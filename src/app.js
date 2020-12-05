import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 50000}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)


// ReactDOM.render(<AppRouter />, document.getElementById('app'))
ReactDOM.render(jsx, document.getElementById('app'))
