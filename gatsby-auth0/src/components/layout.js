import React from "react"
import "../css/global.css"

import Navigation from "./navigation"

export default ({ children }) => (
    <div>
        <Navigation />
        <div class="container mx-auto p-6">
            {children}
        </div>
    </div>
)