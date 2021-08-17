import {useState} from 'react';
import {isEmail, isAlpha, isAlphanumeric } from 'validator'

function ChangeInput(inputType){
    const[value, setValue]= useState("");
    const[isError, setIsError] = useState(false);
    const[errorMessage, setErrorMessage] = useState("")
    const[isDisabled, setIsDisabled] = useState(true);


    function onChange(e){
        let value = e.target.value 
        setValue(value)
        checkInput(value);
    }
   
   function clearInput(){
       setValue("")
    }

    function checkInput(value){
        if(value.length === 0){
            setIsError(true);
            setErrorMessage(`${inputType} is required`)
        }else {
            setIsError(false);
            setErrorMessage(``);
            setIsDisabled(false);
        }
    }
    return [value, onChange, isError, errorMessage, isDisabled, clearInput];
}

export default ChangeInput