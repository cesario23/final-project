import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import {AuthContext} from '../../Context/AuthContext'
import checkAuthCookie from '../Hooks/checkAuthCookie'

function CardPrivateRoute({component: Component, ...rest}){
    const {state: card} = useContext(AuthContext);
    const {checkIfCookieExist} = checkAuthCookie();\
    console.log(card)

    console.log(user)
    return(
        <Route
        {...rest}
        render={(props) =>
        checkIfCookieExist ? <Component {...props} /> : <Redirect to="/card"/>
        }
        />

    )
}

export default CardPrivateRoute;