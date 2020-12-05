//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({  //text matching description or text fields
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE
export const sortByDate = () => ({  //text matching description or text fields
    type: 'SORT_BY_DATE'
})

//SORT_BY_AMOUNT
export const sortByAmount = () => ({  //text matching description or text fields
    type: 'SORT_BY_AMOUNT'
})

//SET_START_DATE
export const setStartDate = (startDate) => ({  //text matching description or text fields
    type: 'SET_START_DATE',
    startDate
})

//SET_END_DATE
export const setEndDate = (endDate) => ({  //text matching description or text fields
    type: 'SET_END_DATE',
    endDate
})
