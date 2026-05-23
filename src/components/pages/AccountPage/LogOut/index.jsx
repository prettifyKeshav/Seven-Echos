"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useHeaderFixed } from '@/context/useHeaderContext';

const Logout = () => {
    const { setIsHeaderFixed } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])
    return (
        <div className="log-out">
            <h1 className="viewHeader">Logout</h1>
            <p>Are you sure you want to log out?</p>
            <Link href="" className="btn custom-name full">
                Confirm Logout
            </Link>
        </div>
    );
}

export default Logout