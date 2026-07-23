import React from 'react'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import Overlay from '../organisms/Overlay'
import EnquireModal from '../organisms/EnquireModal'
import HamburgerModel from '../organisms/HamburgerModel'

const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Overlay />
            <EnquireModal />
            <HamburgerModel />
        </>
    )
}

export default MainTemplate