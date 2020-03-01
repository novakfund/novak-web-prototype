import React from "react"

export default ({name, position, background}) => (
    <div className="py-4 px-10 text-center">
        <img className="block mx-auto rounded w-64 content-center" src={'/assets/avatar.jpg'} />
        <div className="p-2">
            <h1 className="font-semibold">{name}</h1>
            <h2 className="italic">{position}</h2>
            <h2 className="italic">{background}</h2>
        </div>
    </div>
)