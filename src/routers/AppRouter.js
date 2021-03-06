import React from 'react';
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import createHistory from "history/createBrowserHistory";
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import LoginPage from "../components/LoginPage.js";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute.js";
import PublicRoute from "./PublicRoute.js"


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true}/>
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
          <PrivateRoute path="/create" component={AddExpensePage}/>
          <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
          <Route component={NotFoundPage} />
        </Switch>
   </div> 
  </Router>
);


export default AppRouter;