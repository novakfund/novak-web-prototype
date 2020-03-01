import React from "react"
import { login } from "../../utils/auth"

export default class LoginForm extends React.Component {

  state = {
    emailError: false,
    passwordError: false,
    inputEmail: "",
    inputPassword: "", //TODO: look up best practice for this
  }

  handleInputChange = event => {
      const target = event.target
      const value = target.value
      const name = target.name

      this.setState({
          [name]: value,
      })
  }

  handleSubmit = event => {
      event.preventDefault()

      if(this.validateLogin()) {
        login(this.state.inputEmail, this.state.inputPassword)
      }
      
      return
  }

  validateLogin = () => {    
    if (this.state.inputEmail) {
      this.setState({ emailError: false })
    }
    else {
      this.setState({ emailError: true })
      return false
    }

    if (this.state.inputPassword) {
      this.setState({ passwordError: false })
    }
    else {
      this.setState({ passwordError: true })
      return false
    }

    return true
  }

  render() {
    return (
      <div className="max-w-4xl mx-auto px-3 md:px-20 pt-4">
        <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input className={(this.state.emailError ? 'border-red-500' : '') + " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
            name="inputEmail"
            value={this.state.inputEmail} 
            onChange={this.handleInputChange} 
            type="text" 
            placeholder="Username"/>
            {this.state.emailError && 
              <p className="text-red-500 text-xs italic">Please enter a valid email</p>
            }
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className={(this.state.passwordError ? 'border-red-500' : '') + " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"}
            name="inputPassword"
            value={this.state.inputPassword} 
            onChange={this.handleInputChange} 
            type="password" 
            placeholder="******************"/>
            {this.state.passwordError && 
              <p className="text-red-500 text-xs italic">Please enter a password</p>
            }
          </div>
          <div className="flex items-center justify-between">
            <button 
            onClick={this.handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          2020 NOVAK Fund LLC.
        </p>
      </div>
    )
  }
}