import { ConfirmationNumber } from '@material-ui/icons';
import React from 'react'
import ChangeInput from '../../components/Hooks/Inputs'
import HandleFetch from '../Hooks/handleFetch'

function auth(props) {

    let isLoginRoute = props.match.path === "/login"
    let buttonTitle = isLoginRoute ? "Login" : "Sing up";
    let apiURL = isLoginRoute ? "/users/login" : "/users/create-user"

    const [ {isLoading, response, error, setError, setResponse},
        handleAPICallSubmit,
        isMessageOpen,
        handleMessageOpen,
        handleMessageClose,
        successMessageValue,] = HandleFetch()

    const [firstName, handleFirstNameChange, firstNameIsError, firstNameErrorMessage, isFirstNameDisabled, clearFirstNameInput ] = ChangeInput("firstName");
    const [lastName, handleLastNameChange, lastNameIsError, lastNameErrorMessage, isLastNameDisabled, clearLastNameInput] = ChangeInput("lastName");
    const [email, handleEmailChange, emailIsError, emailErrroMessage, isEmailDisabled, clearEmailInput] = ChangeInput("email");
    const [username, handleUsernameChange, usernameIsError, usernameErrorMessage, isUsernameDisabled, clearUsernameInput] = ChangeInput("username");
    const [password, handlePasswordChange, passwordIsError, passwordErrorMessage, isPasswordDisabled, clearPasswordInput] = ChangeInput("password");
    const [confirmPassword, handleConfirmPasswordChange, confirmPasswordIsError, confirmPasswordErrorMessage, isConfirmPasswordDisabled, clearConfirmPasswordInput ] = ChangeInput("confirmPassword");

    function handleOnSubmit(e){
        e.preventDefault();
       
       const user = isLoginRoute
       ? {email,username, password}
       : {firstName, lastName, email, username, password, confirmPassword}
      
     handleAPICallSubmit({
         method: "post",
         data: {
             ...user,
         },
     });

    }

    return (
        <div className="Container">
            <div className="form-text"> Sign up </div>
            <div className ="form-div">
                <form className="form"  onSubmit={handleOnSubmit}>
                    {!isLoginRoute &&(
                  <div className="form-group-inline">
                    <div className="inline-container">
                        <label htmlFor="firstName">First Name</label>
                        <input
                        type="text"
                        id= "firstName"
                        name="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className="error">
                        {firstNameIsError ?? firstNameErrorMessage}
                    </div>
                    <div className="inline-container">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                            type= "text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            />
                    </div>
                    <div className="error">
                        {lastNameIsError ?? lastNameErrorMessage}
                    </div>
                 </div>
                    )}
                    {!isLoginRoute && (
                    <div className="form-group">
                        <div className="block-container">
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                        </div>
                        <div className="error">
                            {emailIsError ?? emailErrroMessage}
                        </div>
                    </div>
                    )}
                    <div className="form-group">
                        <div className="block-container">
                            <label htmlFor="username">Username</label>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="error">
                            {usernameIsError ?? usernameErrorMessage}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="block-container">
                            <label htmlFor="password">Password</label>
                            <input
                            type="text"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="error">
                            {passwordIsError ?? passwordErrorMessage}
                        </div>
                    </div>
                    {!isLoginRoute && (
                    <div className="form-group">
                        <div className="block-container">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                            type="text"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}

                            />
                        </div>
                        <div className="error">
                            {confirmPasswordIsError ?? confirmPasswordErrorMessage}
                        </div>
                    </div>
                    )}
                    <div className="button-container">
                        <button type="submit"
                        disabled = {
                            isLoginRoute
                            ? isEmailDisabled || isPasswordDisabled
                            : isEmailDisabled || isPasswordDisabled
                            || isUsernameDisabled
                        }
                        >{buttonTitle}</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default auth
