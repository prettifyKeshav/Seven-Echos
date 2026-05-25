"use client"

import { useHeaderFixed } from '@/context/useHeaderContext'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ThankYouPage = () => {
    const { setIsHeaderFixed } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])
    return (
        <>
            <section>
                <div className="not-found-banner">
                    <div className="content text-center">
                        <div className="logo">
                            <div className="">
                                <Image src="/assets/logo.svg" width={108} height={108} alt="ico"></Image>
                            </div>
                        </div>
                        <h1>Thank You!</h1>
                        <p>Thank you for connecting with us! We appreciate your interest and will be in touch shortly.</p>
                        <Link className="btn primary-btn" href="/">Back to Home</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThankYouPage