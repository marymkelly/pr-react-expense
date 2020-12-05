import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focusedCalendar: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }   
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focusedCalendar: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please provide values for both description and amount '}))
            console.log(this.state.error);
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render(){
        return (
            <div> 
                <h4 hidden={!this.state.error}>{this.state.error}</h4>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                    />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        value={this.state.amount} 
                        onChange={this.onAmountChange} 
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.focusedCalendar} 
                        onFocusChange={this.onFocusChange} 
                        numberOfMonths={1}
                        isOutsideRange={(day) => (false)}
                    />
                    
                    <textarea 
                        placeholder="Add a note for your expense optional" 
                        value={this.state.note} 
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}