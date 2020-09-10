import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth.js";


export const LoginPage = ({startLogin}) => (
    <div className="loginPage">
        <div className="loginPage-box">
            <h1 className="loginPage-title">Money Manager</h1>
            <p>Track and manage your money here!</p>
            <button onClick={startLogin}>Login</button>
        </div>
        
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});



export default connect(undefined, mapDispatchToProps)(LoginPage);