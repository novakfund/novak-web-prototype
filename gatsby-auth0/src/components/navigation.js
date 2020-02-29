import React from "react"
import { Link } from "gatsby"


export default class Navigation extends React.Component {
    state = {
        isMenuActive: false,

    }

    toggleMenu = event => {
        event.preventDefault()
        this.setState({isMenuActive: !this.state.isMenuActive})
    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/" className="font-semibold text-xl tracking-tight my-auto">NOVAK</Link>
                </div>
                <div className="block md:hidden">
                    <button onClick={this.toggleMenu} className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={(this.state.isMenuActive ? 'flex' : 'hidden') + " w-full block flex-col justify-center md:justify-end md:flex md:items-center md:flex-row md:w-auto md:flex-row"}>
                    <Link to="#" className="flex justify-end mt-4 md:my-auto text-blue-200 hover:text-white mr-4">
                        About Us
                    </Link>
                    <Link to="#" className="flex justify-end mt-4 md:my-auto text-blue-200 hover:text-white mr-4">
                        Contact
                    </Link>
                    <Link to="/account" className="flex justify-end mt-4 md:my-auto text-blue-200 hover:text-white mr-4">
                        Account
                    </Link>
                    <div>
                    </div>
                </div>
            </nav>
        )
    }
}