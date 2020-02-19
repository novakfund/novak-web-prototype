import React from "react"
import { isAuthenticated, signup, login } from "../utils/auth"
import { navigate } from "@reach/router"

//This is a stateful object
export default class Login extends React.Component {
    state = {
        loginEmail: "",
        loginPassword: "",
        signUpEmail: "",
        signUpPassword: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
    }

    //Handle submit for sign up
    //Can I combine this with login?
    //Same logic just one change in method call
    handleSubmitSignUp = event => {
        event.preventDefault()
        signup(this.state.signUpEmail, this.state.signUpPassword)
    }

    handleSubmitLogin = event => {
        event.preventDefault()
        login(this.state.loginEmail, this.state.loginPassword)
    }

    render() {
        return (
            <>
            <form id="signup">
                <fieldset>
                    <legend>Login</legend>
                    <p>
                        <input 
                            type="email" 
                            name="loginEmail"
                            placeholder="Email" 
                            required 
                            value={this.state.loginEmail} 
                            onChange={this.handleInputChange} />
                    </p>
                    <p>
                        <input 
                            type="password" 
                            name="loginPassword"
                            placeholder="Password" 
                            required 
                            value={this.state.loginPassword}
                            onChange={this.handleInputChange} />
                    </p>
                    <button onClick={this.handleSubmitLogin}>Login</button>
                </fieldset>
                <fieldset>
                    <legend>Sign up</legend>
                    <p>
                        <input 
                            type="email" 
                            name="signUpEmail"
                            placeholder="Email" 
                            required 
                            value={this.state.signUpEmail} 
                            onChange={this.handleInputChange} />
                    </p>
                    <p>
                        <input 
                            type="password" 
                            name="signUpPassword"
                            placeholder="Password" 
                            required 
                            value={this.state.signUpPassword}
                            onChange={this.handleInputChange} />
                    </p>
                    <button onClick={this.handleSubmitSignUp}>Sign Up</button>
                </fieldset>
            </form>
            </>
        )
    }
}