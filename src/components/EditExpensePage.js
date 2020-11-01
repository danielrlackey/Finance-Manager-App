import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm.js"
import { startEditExpense, startRemoveExpense } from "../actions/expenses.js"


const EditExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header-title">Edit expense</h1>
                </div>
            </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(props.expense.id, expense));
                        props.history.push("/");
                    }}
                    />
                    <button className="button button-secondary" onClick={() => {
                        props.dispatch(startRemoveExpense({ id: props.expense.id }));
                        props.history.push("/");
                    }}>Remove</button>
                </div>
            </div>
        );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);