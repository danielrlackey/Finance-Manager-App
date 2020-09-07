import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth.js";
 
export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
         <div>
             <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard </NavLink>
             <NavLink to="/create" activeClassName="is-active"> Create Expense </NavLink>
             <NavLink to="/help" activeClassName="is-active"> Help Page </NavLink>
             <button onClick={startLogout}>Logout</button>
         </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);