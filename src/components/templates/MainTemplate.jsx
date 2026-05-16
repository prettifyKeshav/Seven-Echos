import React from 'react'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainTemplate