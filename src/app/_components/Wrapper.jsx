import React from 'react'

export default function Wrapper({ children, classname = ''}) {
    return (
        <div className={` max-w-screen-lg md:max-w-screen-xl md:px-0 px-5  mx-auto py-16 ${classname}`}>{children} </div>
    )
}
