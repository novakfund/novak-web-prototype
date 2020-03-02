import React from "react"
import { getProfile } from "../../utils/auth"

const Home = () => {
  const user = getProfile()

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-semibold">
        Welcome, {user.name ? user.name : "friend"}
      </h1>
      <p className="italic text-gray-600">
        This page is where some basic user account information would be present.
      </p>
    </div>
  )
}

export default Home
