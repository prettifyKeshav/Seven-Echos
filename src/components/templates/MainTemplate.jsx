import React from 'react'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import Overlay from '../organisms/Overlay'
import EnquireModal from '../organisms/EnquireModal'
import AuthModal from '../organisms/AuthModal'

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Overlay />
            <EnquireModal />
        </>
    )
}

export default MainTemplate