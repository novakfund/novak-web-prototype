import React from "react"
import "../css/global.css"

import Navigation from "./navigation"
import Footer from "./footer"

export default ({ children }) => (
    <div className="flex flex-col h-screen justify-between">
        <Navigation />
        <div className="container flex-grow my-6 mx-6 md:mx-auto">
            {children}
        </div>
        <Footer />
    </div>
)