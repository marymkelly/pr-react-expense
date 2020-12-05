import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expenses.js';

export const ExpenseList = (props) => (
    <div>{
        props.expenses.length === 0 ? ( <p>No Expenses</p>) : (         
            props.expenses.map((item) => {
                console.log(item)
                return <ExpenseListItem key={item.id} {...item} />
            }))        
     }</div>

) 

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

