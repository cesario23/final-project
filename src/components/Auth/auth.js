import React from 'react'
import ChangeInput from '../../components/Hooks/Inputs'

function auth(props) {

    let isLoginRoute = props.match.path === "/login"
    let buttonTitle = isLoginRoute ? "Login" : "Sing up";

    const [firstName, handlefirstNameChange, firstNameIsError, firstNameErrorMessage, isFirstNameDisabled, clearFirstNameInput ] = ChangeInput("firstName");
    const [lastName, handleLastNameChange, lastNameIsError, lastNameErrorMessage, isLastNameDisabled, clearLastNameInput] = ChangeInput("lastName");
    const [email, handleEmailChange, emailIsError, emailErrroMessage, isEmailDisabled, clearEmailInput] = ChangeInput("email");
    const [username, handleUsernameChange, usernameIsError, usernameErrorMessage, isUsernameDisabled, clearUsernameInput] = ChangeInput("username");
    const [password, handlePasswordChange, passwordIsError, passwordErrorMessage, isPasswordDisabled, clearPasswordInput] = ChangeInput("password");
    const [confirmPassword, handleConfirmPasswordChange, confirmPasswordIsError, confirmPasswordErrorMessage, isConfirmPasswordDisabled, clearConfirmPasswordInput ] = ChangeInput("confirmPassword");

    return (
        <div className="Container">
            <div className="form-text">Sign up</div>
            <div className ="form-div">
                <form className="form" >
                  <div className="form-group-inline">
                    <div className="inline-container">
                        <label htmlFor="firstName">First Name</label>
                        <input
                        type="text"
                        id= "firstName"
                        name="firstName"
                        value={firstName}
                        />
                    </div>
                    <div className="inline-container">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                            type= "text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
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

                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default auth
