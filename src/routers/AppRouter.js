import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/pages/Dashboard';
import EditExpensePage from '../components/pages/EditExpense';
import AddExpensePage from '../components/pages/AddExpense';
import HelpPage from '../components/pages/Help';
import NotFoundPage from '../components/pages/404';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
 )

 export default AppRouter