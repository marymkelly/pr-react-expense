import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/pages/Dashboard';
import EditExpensePage from '../components/pages/EditExpense';
import AddExpensePage from '../components/pages/AddExpense';
import NotFoundPage from '../components/pages/404';
import Login from '../components/pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/" component={Login} exact={true} />
                    <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                    <PrivateRoute path="/create" component={AddExpensePage} />
                    <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

 export default AppRouter;