import Sidebar from "@/components/pages/AccountPage/Sidebar"
import "@/uploads/styles/dashboard/dashboard.css"
import "@/uploads/styles/component/component.css"

export default function AccountLayout({ children }) {
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