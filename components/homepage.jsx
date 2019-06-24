import React from 'react';
import { Redirect } from "react-router-dom";
import logo from '../logo.svg';
import privateRoute from '../routes/private-route';


export default () => {
    const removeCredential = () => {
        localStorage.removeItem("privateRoute");
    }
    if (!privateRoute) {
        return (
            <Redirect to="/login"></Redirect>
        )
    }
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <button className="btn btn-lg btn-google btn-block text-uppercase" onClick={removeCredential}><i className="fab fa-google mr-2"></i> Logout</button>
            </div>
        </>
    );
};