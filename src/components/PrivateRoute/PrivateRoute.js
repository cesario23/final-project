import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';

import {AuthContext} from '../../Context/AuthContext'
import checkAuthCookie from '../Hooks/checkAuthCookie'

function PrivateRoute({ component: Component, ...rest}) {
    const {state: user, state: card} = useContext(AuthContext);
    const {checkIfCookieExist} = checkAuthCookie()

console.log(user)
    return (
        <Route
        {...rest}
        render={(props) => 
         checkIfCookieExist ? <Component {...props} /> : <Redirect to="/login"/>
        }
        />
    );
}

export default PrivateRoute
