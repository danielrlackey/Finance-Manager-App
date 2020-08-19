import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses.js";
import { setTextFilter } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import "normalize.css/normalize.css";
import "./styles/styles.css";

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
