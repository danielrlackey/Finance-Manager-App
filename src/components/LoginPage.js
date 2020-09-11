import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth.js";


export const LoginPage = ({startLogin}) => (
    <div className="loginPage">
        <div className="loginPage-Box">
            <h1 className="loginPage-Title">Money Manager</h1>
            <p>Track and manage your money here!</p>
            <button className="Button" onClick={startLogin}>Login using Google</button>
        </div>
        
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});



export default connect(undefined, mapDispatchToProps)(LoginPage);