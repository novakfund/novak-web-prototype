import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="w-full bg-blue-800 text-white">
    <div className="flex justify-between px-6 py-4">
      <div className="font-semibold my-auto">
        <Link to="/">NOVAK FUND LLC</Link>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Company</h1>
        <Link className="hover:underline" to="/about-us">
          About Us
        </Link>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold">Membership</h1>
        <Link className="hover:underline" to="/account">
          Member Portal
        </Link>
        <Link className="hover:underline" to="/sign-up">
          Join Us
        </Link>
      </div>
    </div>
  </div>
)
