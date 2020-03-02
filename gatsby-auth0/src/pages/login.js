import React from "react"
import { signup, login } from "../utils/auth"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LoginForm from "../components/account/loginForm"

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
            <Layout>
                <div className="flex items-center flex-col justify-center mx-auto">
                    <div>
                        <h1 className="font-bold text-xl">Login Required</h1>
                    </div>
                    <div>
                        <p className="text-gray-600 italic">The NOVAK Portal is accessible to members only</p>
                    </div>
                </div>
                <LoginForm />
                <div className="flex items-center flex-col justify-center mx-auto pt-10">
                    <div>
                        <p className="text-gray-600 italic">Not a member?</p>
                        <Link className="hover:underline text-blue-500" to="/sign-up">
                            Request to join!
                        </Link>
                    </div>
                </div>
            </Layout>
        )
    }
}