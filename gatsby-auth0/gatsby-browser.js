import React from "react"
import { silentAuth } from "./src/utils/auth"

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  //Set flag to false so we don't keep checking Auth0 token
  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  //Silently checks if user logged in
  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

//Wrap SessionCheck to whole app
export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
