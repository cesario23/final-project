import {useContext} from 'react'
import Cookie from 'js-cookie'
import jwtDecode from "jwt-decode";
import {AuthContext} from '../../Context/AuthContext'


function checkAuthCookie() {
    const {dispatch} = useContext(AuthContext);

    function checkIfCookieExists(){
        const cookie = Cookie.get("jwt-cookie");

        if(cookie){
            return true;
        }else {
            return false;
        }
    }

    function logUserIn(){
        let checkCookieExist = checkIfCookieExists();
        if(checkCookieExist){
            const cookie = Cookie.get("jwt-cookie");
            const jwtDecodedToken = jwtDecode(cookie);

            dispatch({
                type: "LOGIN",
                user: {
                    email: jwtDecodedToken.email,
                    username: jwtDecodedToken.username,
                }
            })
        }
    }
    return {
        checkIfCookieExists,
        logUserIn,
    }
}

export default checkAuthCookie
