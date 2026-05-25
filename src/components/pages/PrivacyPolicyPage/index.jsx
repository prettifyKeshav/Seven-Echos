"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useHeaderFixed } from '@/context/useHeaderContext'
import "@/uploads/styles/other/other.css"

const PrivacyPolicyPage = () => {

    const { setIsHeaderFixed } = useHeaderFixed()
    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])

    return (
        <>
            <section>
                <div className="privacy-secA">
                    <div className="container">
                        <div className="website-content">
                            <h1>Privacy Policy</h1>
                            <p>
                                At Seven Echoes, your privacy is of utmost importance to us. This Privacy Policy outlines
                                how we collect, use, disclose, and safeguard your personal information when you visit our
                                website (<Link href="https://www.abcd.com/">https://www.abcd.com/</Link>), use our
                                platform,
                                access educational content, request services, submit forms, or interact with our digital
                                content and academic support solutions. By accessing or using our platform, you agree to the
                                terms of this Privacy Policy.
                            </p>

                            <h2>Information We Collect</h2>
                            <p>When you interact with our platform or services, we may collect the following types of
                                information:</p>
                            <ol>
                                <li>
                                    <strong>Personal Information</strong>: Includes your name, email address, phone number,
                                    organization/institution name, course or content requirements, preferences, and any other
                                    details you provide through forms, onboarding, or communication with us.
                                </li>
                                <li>
                                    <strong>Usage Information</strong>: Includes how you interact with our platform, such as
                                    pages visited, content accessed, time spent, clicks, and navigation behavior.
                                </li>
                                <li>
                                    <strong>Device & Technical Information</strong>: Includes your browser type, device details,
                                    IP address, and general location data to enhance platform performance and security.
                                </li>
                                <li>
                                    <strong>Cookies and Tracking Technologies</strong>: We use cookies and similar technologies
                                    to remember your preferences, improve functionality, and analyze user behavior. You can
                                    control cookies through your browser settings.
                                </li>
                            </ol>

                            <h3>How We Use Your Information</h3>
                            <p>We use the collected information for the following purposes:</p>
                            <ul>
                                <li>To provide, manage, and improve our educational content and platform services.</li>
                                <li>To respond to inquiries, provide support, and communicate with users.</li>
                                <li>To personalize your experience and recommend relevant content or services.</li>
                                <li>To send important updates, service notifications, and promotional communications (where
                                    permitted).</li>
                                <li>To monitor usage trends, improve performance, and enhance security.</li>
                                <li>To comply with legal obligations and protect against misuse or unauthorized activities.</li>
                            </ul>

                            <h3>Information Sharing and Disclosure</h3>
                            <p>
                                We do not sell or rent your personal information. We may share your information only in the
                                following cases:
                            </p>
                            <ul>
                                <li>
                                    With trusted third-party service providers (such as hosting services, analytics tools,
                                    CRM platforms, and communication tools) who assist in operating our platform.
                                </li>
                                <li>When required by law, regulation, or legal process.</li>
                                <li>To protect the rights, safety, and security of Seven Echoes, our users, or others.</li>
                                <li>
                                    In the event of a business transfer such as a merger, acquisition, or asset sale.
                                </li>
                            </ul>

                            <h3>Data Security</h3>
                            <p>
                                We implement appropriate security measures to protect your personal information from
                                unauthorized access, misuse, or disclosure. However, no method of transmission over the
                                Internet is completely secure, and we cannot guarantee absolute security.
                            </p>

                            <h3>Your Rights</h3>
                            <p>
                                Depending on applicable laws (including India’s Digital Personal Data Protection Act), you may
                                have the right to:
                            </p>
                            <ul>
                                <li>Access, update, or delete your personal data.</li>
                                <li>Withdraw consent for data processing where applicable.</li>
                                <li>Opt out of marketing communications at any time.</li>
                                <li>Request information about how your data is used.</li>
                            </ul>

                            <h3>Third-Party Links</h3>
                            <p>
                                Our platform may contain links to third-party websites or tools. We are not responsible
                                for their privacy practices, and we encourage you to review their policies.
                            </p>

                            <h3>Changes to This Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time. Updates will be posted on this page
                                with a revised “Last Updated” date. Continued use of our platform indicates acceptance
                                of the updated policy.
                            </p>

                            <h3>Contact Us</h3>
                            <p>
                                If you have any questions or requests regarding this Privacy Policy, please contact us:<br />
                                <strong>Email</strong>: info@www.abcd.com<br />
                                <strong>Alternate Email</strong>: privacy@www.abcd.com<br />
                                <strong>Phone</strong>: +91 XXXXX XXXXX<br />
                                <strong>Address</strong>: Company Address
                            </p>

                            <p><strong>Last Updated:</strong> May 25, 2026</p>

                            <p>By using our platform, you acknowledge that you have read and agree to this Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicyPage