import React from "react"
import { FC } from 'react'
import { Navbar } from "../components/navbar"

const StandardLayout : FC = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        </>
    )
}

export default StandardLayout