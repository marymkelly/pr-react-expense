import React from 'react';

const getExpensesTotal = (expenses = []) => {
    if(!Array.isArray(expenses)) {       
        return expenses.amount ? expenses.amount : 0
    }

    const amounts = expenses.map((expense) => expense.amount ? expense.amount : 0);  
    return amounts.reduce((sum, val) => sum + val, 0)

}

export default getExpensesTotal;