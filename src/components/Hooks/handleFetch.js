import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../../Context/AuthContext';


function handleFetch(url) {
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
        },

        try{
            let response = await axios(baseURL + url, requestOptionObj);
            console.log(response)
        } catch(e){
            setError(e.response.data.message);
            setIsLoading(false);
            handleMessageOpen();
        }
    }
    

   

    return 
}

export default handleFetch
