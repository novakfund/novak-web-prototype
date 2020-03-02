import React from "react"
import { Router, navigate } from "@reach/router"
import { isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Home from "./account/home"
import Settings from "./account/settings"
import Status from "./account/status"

const Account = () => {
  if (!isAuthenticated()) {
    navigate("/login")
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout>
      <Router className="py-6 px-6">
        <Home path="/account/home" />
        <Settings path="/account/settings" />
        <Status path="/account/status" />
      </Router>
    </Layout>
  )
}

export default Account
