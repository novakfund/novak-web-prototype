import React from "react"
import { login } from "../../utils/auth"

export default class SignUpForm extends React.Component {

  state = {
    emailError: false,
    exerpError: false,
    firstNameError: false,
    lastNameError: false,
    inputEmail: "",
    inputExerpt: "",
    inputFirstName: "",
    inpustLastName: "",

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

      if(this.validateFields()) {
        return //TODO: mock somehing
    }
      
      return
  }

  //TODO: there's prob a cleaner way to do this
  validateFields = () => {    
    if (this.state.inputEmail) {
      this.setState({ emailError: false })
    }
    else {
      this.setState({ emailError: true })
      return false
    }

    if (this.state.inputFirstName) {
        this.setState({ firstNameError: false })
    }
    else {
        this.setState({ firstNameError: true })
        return false
    }

    if (this.state.inputLastName) {
        this.setState({ lastNameError: false })
    }
    else {
        this.setState({ lastNameError: true })
        return false
    }

    if (this.state.inputExerpt) {
      this.setState({ exerpError: false })
    }
    else {
      this.setState({ exerpError: true })
      return false
    }

    return true
  }

  render() {
    return (
      <div className="w-full mx-auto px-3 md:px-20 pt-4">
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
          <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                    First Name
                    </label>
                    <input className={(this.state.firstNameError ? 'border-red-500' : '') + " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    name="inputEmail"
                    value={this.state.inputFirstName} 
                    onChange={this.handleInputChange} 
                    type="text" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                    Last Name
                    </label>
                    <input className={(this.state.lastNameError ? 'border-red-500' : '') + " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                    name="inputEmail"
                    value={this.state.inputLastName} 
                    onChange={this.handleInputChange} 
                    type="text" />
              </div>
          </div>
          {(this.state.firstNameError || this.state.lastNameError) && 
            <p className="text-red-500 text-xs italic">Please enter a name</p>
          }
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="exerpt">
              About You
            </label>
            <textarea className={(this.state.exerpError ? 'border-red-500' : '') + " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-y"}
            name="inputExerpt"
            value={this.state.inputExerpt} 
            onChange={this.handleInputChange} 
            type="text" 
            placeholder="I love crypto!"/>
            {this.state.exerpError && 
              <p className="text-red-500 text-xs italic">Please enter a quick exerpt about you</p>
            }
          </div>
          <div className="flex items-center justify-between">
            <button 
            onClick={this.handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button">
              Apply
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          2020 NOVAK Fund LLC.
        </p>
      </div>
    )
  }
}