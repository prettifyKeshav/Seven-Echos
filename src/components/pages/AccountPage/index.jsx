"use client"

import { useHeaderFixed } from '@/context/useHeaderContext'
import { useEffect, useState } from 'react'
import "@/uploads/styles/dashboard/dashboard.css"
import "@/uploads/styles/component/component.css"
import ContentArea from './ContentArea'
import Sidebar from './Sidebar'

const AccountPage = () => {
    const { setIsHeaderFixed } = useHeaderFixed()
    const [activeView, setActiveView] = useState('myprofile');

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])


    return (
        <>
            <div className="layout-wrapper">
                <div className="container">
                    <div className="layout dashboard-layout">
                        <Sidebar activeView={activeView} onViewChange={setActiveView} />
                        <ContentArea activeView={activeView} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountPage