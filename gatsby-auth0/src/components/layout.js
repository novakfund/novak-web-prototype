import React from "react"
import "../css/global.css"

import Navigation from "./navigation"
import Footer from "./footer"

export default ({ children }) => (
    <div className="flex flex-col">
        <Navigation />
        <div className="container h-screen my-6 mx-6 md:mx-auto px-10">
            {children}
        </div>
        <Footer />
    </div>
)