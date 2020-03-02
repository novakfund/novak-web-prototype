import React from "react"
import Layout from "../components/layout"
import TeamEntry from "../components/aboutUs/teamEntry"

export default () => (
  <Layout>
    <div className="py-6 px-6">
      <h1 className="text-4xl text-center">Our Mission</h1>
      <p className="pt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div className="py-6 px-6 bg-gray-200">
      <h1 className="text-4xl text-center">Our Team</h1>
      <div className="flex flex-col mt-6">
        <div className="flex md:flex-row flex-col justify-center">
          <TeamEntry name="John" position="Founder" background="Google" />
          <TeamEntry
            name="Person Name"
            position="LT"
            background="Crypto enthusiast"
          />
        </div>
        <div className="flex justify-center">
          <TeamEntry
            name="Person Name"
            position="LT"
            background="Crypto enthusiast"
          />
          <TeamEntry
            name="Person Name"
            position="LT"
            background="Crypto enthusiast"
          />
        </div>
        <div className="flex justify-center">
          <TeamEntry
            name="Person Name"
            position="LT"
            background="Crypto enthusiast"
          />
          <TeamEntry
            name="Person Name"
            position="LT"
            background="Crypto enthusiast"
          />
        </div>
      </div>
    </div>
  </Layout>
)
