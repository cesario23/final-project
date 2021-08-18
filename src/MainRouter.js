import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar/navbar'
import Sidebar from './components/Sidebar/Sidebar'

const Home = React.lazy(() => import("./components/Home/Home"));
const Auth = React.lazy(() => import("./components/Auth/auth"));


function MainRouter(){
    return(
       
        <React.Fragment>
        <Navbar />
        <div style={{display: "flex", height: "600px"}}>
        <div style={{flex: "1"}}>
        <Sidebar />
        </div>
        <div style={{flex: "4", textAlign: "center", marginTop: "160px"}}>
        <Switch>
            <Route exact path="/sign-up" component={Auth}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/logout" render={() => <Redirect to="/login"/>}/>
            <Route exact path="/" component= {Home}/>
        </Switch>
        </div>
        </div>
        </React.Fragment>
    
    )
}

export default MainRouter;