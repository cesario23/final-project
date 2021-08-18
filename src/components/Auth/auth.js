import React from 'react'
import ChangeInput from '../../components/Hooks/Inputs'

function auth(props) {

    let isLoginRoute = props.match.path === "/login"
    let buttonTitle = isLoginRoute ? "Login" : "Sing up";

    const [firstName, handleFirstNameChange, firstNameIsError, firstNameErrorMessage, isFirstNameDisabled, clearFirstNameInput ] = ChangeInput("firstName");
    const [lastName, handleLastNameChange, lastNameIsError, lastNameErrorMessage, isLastNameDisabled, clearLastNameInput] = ChangeInput("lastName");
    const [email, handleEmailChange, emailIsError, emailErrroMessage, isEmailDisabled, clearEmailInput] = ChangeInput("email");
    const [username, handleUsernameChange, usernameIsError, usernameErrorMessage, isUsernameDisabled, clearUsernameInput] = ChangeInput("username");
    const [password, handlePasswordChange, passwordIsError, passwordErrorMessage, isPasswordDisabled, clearPasswordInput] = ChangeInput("password");
    const [confirmPassword, handleConfirmPasswordChange, confirmPasswordIsError, confirmPasswordErrorMessage, isConfirmPasswordDisabled, clearConfirmPasswordInput ] = ChangeInput("confirmPassword");

    function handleOnSubmit(e){
        e.preventDefault();
       
       const user = isLoginRoute
       ? {email, password}
       : {firstName, lastName, email, username, password,}

       
    }

    return (
        <div className="Container">
            <div className="form-text">Sign up</div>
            <div className ="form-div">
                <form className="form"  onSubmit={handleOnSubmit}>
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
                 </div>
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
                    </div>
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
                    </div>
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
                    </div>
                    <div className="button-container">
                        <button type="submit">{buttonTitle}</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default auth
