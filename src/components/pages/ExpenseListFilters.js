import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters.js';


class ExpenseListFilters extends React.Component {
    state = {
        focusedCalendar: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (focusedCalendar) => {
        this.setState(() => ({ focusedCalendar }))
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select 
                    onChange={(e) => {
                    e.target.value === 'date' ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
        
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId=""
                    endDate={this.props.filters.endDate}
                    endDateId=""
                    onDatesChange={this.onDatesChange}   
                    focusedInput={this.state.focusedCalendar}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>(false)}
                />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);