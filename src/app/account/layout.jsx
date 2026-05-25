"use client"

import Sidebar from "@/components/pages/AccountPage/Sidebar"
import "@/uploads/styles/dashboard/dashboard.css"
import "@/uploads/styles/component/component.css"
import { useEffect } from "react"
import { useHeaderFixed } from "@/context/useHeaderContext"

export default function AccountLayout({ children }) {
    const { setIsHeaderFixed } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])

    return (
        <div className="layout-wrapper">
            <div className="container">

                <div className="layout dashboard-layout">

                    <Sidebar />

                    <main className="contentArea">
                        <div className="contentWrapper">
                            {children}
                        </div>
                    </main>

                </div>

            </div>
        </div>
    )
}