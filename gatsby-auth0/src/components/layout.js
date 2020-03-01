import React from "react"
import "../css/global.css"

import Navigation from "./navigation"
import Footer from "./footer"

export default ({ children }) => (
    <div className="flex flex-col">
        <Navigation />
        <div className="flex flex-col h-screen">
            {children}
        </div>
        <Footer />
    </div>
)