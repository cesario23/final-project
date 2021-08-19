import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../../Context/AuthContext';


function HandleFetch(url) {
    const baseURL =
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "DEPLOYED LOCATION";

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({});

    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [successMessageValue, setSuccessMessage] = useState(null);
    
    const {dispatch} = useContext(AuthContext);
    
    function handleMessageOpen() {
        setIsMessageOpen(true)
    }

    function handleMessageClose(){
       setError(null);
       setResponse(null);
       setIsMessageOpen(false);
       setSuccessMessage(null);
    }
    function handleAPICallSubmit(options = {}){
        setOptions(options);
        setIsLoading(true);
    }
    async function handleAPIFetch(){
        const requestOptionObj = {
           ...options,
           withCredentials: true,
           credentials: "include",
           ...{
               headers:{
                   authorization: null,
               },
           } ,
        }

        try{
            let response = await axios(baseURL + url, requestOptionObj);
            console.log(response);

            if(response.data.message === "user created"){
                setResponse(response.data.message);
                setIsLoading(false);
                handleMessageOpen();
                setSuccessMessage(response.data.message);
            }else{
                setIsLoading(false);
                dispatch({
                    type: "LOGIN",
                    user: {
                        email: response.data.user.email,
                        username: response.data.user.username,
                    }
                })
            }
        } catch(e){
            setError(e.response.data.message);
            setIsLoading(false);
            handleMessageOpen();
        }
    }
    
    useEffect(() =>{
        if(!isLoading){
            return;
        }
        handleAPIFetch();
    },[isLoading, url, options, baseURL]);

    return [
        {isLoading, response, error, setError, setResponse},
        handleAPICallSubmit,
        isMessageOpen,
        handleMessageOpen,
        handleMessageClose,
        successMessageValue,
    ]; 
}

export default HandleFetch
