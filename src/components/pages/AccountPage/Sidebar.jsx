"use client"

import Image from "next/image"
import { usePathname } from 'next/navigation'
import Link from "next/link"

const Sidebar = () => {
    const menuItems = [
        { label: 'My Profile', href: '/account/my-profile' },
        { label: 'My Wishlist', href: '/account/my-wishlist' },
        { label: 'My Booking', href: '/account/my-booking' },
        { label: 'Change Password', href: '/account/change-password' },
        { label: 'Logout', href: '/account/log-out' }
    ];
    const pathname = usePathname();

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
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`menuItem ${pathname === item.href
                            ? "active"
                            : ""
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar