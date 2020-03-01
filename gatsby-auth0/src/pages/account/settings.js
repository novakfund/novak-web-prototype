import React from "react"
import { getProfile } from "../../utils/auth"

const Settings = () => {

    const user = getProfile()

    return (
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">Account Settings</h1>
            <p className="italic text-gray-600">Account settings for {user.name ? user.name : "friend"}</p>
        </div>
    )
}

export default Settings