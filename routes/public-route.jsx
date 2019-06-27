import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Counter from "../components/usereducer";

const HomePage = lazy(() => import("../components/homepage"));
const ClassBased = lazy(() => import("../components/classbased"));
const Login = lazy(() => import("../components/login"));
const TableContent = lazy(() => import("../components/tablecontent"));
const PageNotFound = lazy(() => import("../components/page-not-found"));

export default () => {
    return (
        <Suspense fallback={
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/homepagecheck" component={HomePage}></Route>
                <Route exact path="/classbasedcheck" component={ClassBased}></Route>
                <Route exact path="/countercheck" component={Counter}></Route>
                <Route path="/counter" component={Counter} />
                <Route exact path="/tablecontent" component={TableContent}></Route>

                <Route path="*" render={() => (<Redirect to="/"></Redirect>)} />
                {/* <Route path="*" component={PageNotFound} /> */}
            </Switch>
        </Suspense>
    );
};
