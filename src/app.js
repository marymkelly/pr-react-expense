import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configStore.js';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

console.log('TESTING');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'))
