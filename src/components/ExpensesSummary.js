import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses.js";
import selectExpensesTotal from "../selectors/expenses-total.js";
import { Link } from "react-router-dom";

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses" ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");

    return (
        <div className="page-header">
            <div className="content-container">
            <h2 className="page-header-title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h2>
            <div className="page-header-actions">
                <Link className="Button" to="/create">Add Expense</Link>
            </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary)