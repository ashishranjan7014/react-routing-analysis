import React from 'react';
import { Router } from 'react-router-dom';
import history from "../history/history";
import PrivateRoute from "../routes/private-route";
import PublicRoute from "../routes/public-route";


export default () => {
    
    const privateRoute=localStorage.getItem("privateRoute");
    console.log(privateRoute);

    return (
        <Router history={history}>
            {
                privateRoute ?
                <PrivateRoute></PrivateRoute>
                :
                <PublicRoute></PublicRoute>
            }
        </Router>
    );
};
