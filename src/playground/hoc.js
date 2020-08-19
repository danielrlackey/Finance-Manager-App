import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>the info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAdmin && <p>this is private info do not share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>access denied!!!</p>
            )}
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById("app"))
