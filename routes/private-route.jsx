import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const HomePage = lazy(() => import("../components/homepage"));
const ClassBased = lazy(() => import("../components/classbased"));
const Counter =lazy(()=>import("../components/usereducer"));
const Login = lazy(() => import("../components/login"));
const PageNotFound = lazy(() => import("../components/page-not-found"));

export default () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/homepage" component={HomePage}></Route>
                <Route exact path="/classbased" component={ClassBased}></Route>
                <Route exact path="/counter" component={Counter}></Route>
                <Route path="*" render={() => (<Redirect to="/" />)} />
                {/* <Route path="*" component={PageNotFound} /> */}
            </Switch>
        </Suspense>
    );
};
