import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar/navbar'
import Sidebar from './components/Sidebar/sidebar'

const Home = React.lazy(() => import("./components/Home/home"));
const Auth = React.lazy(() => import("./components/Auth/auth"));


function MainRouter(){
    return(
        <>
        <Navbar />
        <Sidebar />
        <Switch>
            <Route exact path="/sign-up" component={Auth}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/logout" render={() => <Redirect to="/login"/>}/>
            <Route exact path="/" component= {Home}/>
        </Switch>
        </>
    )
}

export default MainRouter;