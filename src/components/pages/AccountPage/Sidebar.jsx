"use client"

import Image from "next/image"

const Sidebar = ({ onViewChange, activeView }) => {
    const menuItems = [
        { id: 'myprofile', label: 'My Profile' },
        { id: 'mywishlist', label: 'My Wishlist' },
        { id: 'mybooking', label: 'My Booking' },
        { id: 'password', label: 'Change Password' },
        { id: 'logout', label: 'Logout' },
    ];

    return (
        <aside className="sidebar">

            <div className="profile-wrapper">
                <figure>
                    <Image src="/assets/images/profile/user.jpg" width={73} height={73} alt="user image"></Image>
                </figure>
                <div className="name">
                    <p>Deepak Chauhan</p>
                </div>
                <div className="email">
                    <p>info@sevenechoes.com</p>
                </div>
                <button><span>View Profile</span></button>
            </div>

            <nav className="nav">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onViewChange(item.id)}
                        className={`menuItem ${activeView === item.id ? 'active' : ''}`}
                    >
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar