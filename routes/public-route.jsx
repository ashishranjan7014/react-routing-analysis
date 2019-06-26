import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Counter from "../components/usereducer";

const HomePage = lazy(() => import("../components/homepage"));
const ClassBased = lazy(() => import("../components/classbased"));
const Login = lazy(() => import("../components/login"));
const PageNotFound = lazy(() => import("../components/page-not-found"));

export default () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/homepagecheck" component={HomePage}></Route>
                <Route exact path="/classbasedcheck" component={ClassBased}></Route>
                <Route exact path="/countercheck" component={Counter}></Route>
                <Route path="*" render={()=>(<Redirect to="/"></Redirect>)} ></Route>
              {/*<Route path="*" component={PageNotFound} ></Route>*/}
            </Switch>
        </Suspense>
    );
};
