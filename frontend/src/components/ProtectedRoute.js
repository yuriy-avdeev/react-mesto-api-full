import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Main, ...props }) {
    return (
        <Route>
            {props.loggedIn ? <Main {...props} /> : <Redirect to="/signin" />}
        </Route>
    );
};

export default ProtectedRoute;