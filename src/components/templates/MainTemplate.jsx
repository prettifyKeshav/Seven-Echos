import React from 'react'
import Header from '../molecules/Header'

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default MainTemplate