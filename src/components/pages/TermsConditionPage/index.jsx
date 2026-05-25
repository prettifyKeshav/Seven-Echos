"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useHeaderFixed } from '@/context/useHeaderContext'
import "@/uploads/styles/other/other.css"

const TermsAndConditions = () => {
    const { setIsHeaderFixed } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])
    return (
        <>
            <section>
                <div className="privacy-secA">
                    <div className="container">
                        <div className="website-content" data-animate="fade-up">
                            <h1>Terms and Conditions</h1>
                            <p>
                                Welcome to Seven Echoes! By accessing or using our website
                                (<Link href="https://www.abcd.com/">www.abcd.com</Link>) and platform,
                                you agree to comply with and be bound by the following terms and conditions.
                                Please read them carefully before using our services or engaging with our
                                educational content and digital solutions.
                            </p>

                            <h2>Acceptance of Terms</h2>
                            <p>
                                By using this website or our platform, you agree to these terms and conditions in full.
                                If you do not agree with any part of these terms, please do not use our services.
                            </p>

                            <h3>Use of Platform</h3>
                            <ul>
                                <li>You must be at least 18 years old to use this platform or submit requests.</li>
                                <li>
                                    All content provided on this platform, including educational materials, templates,
                                    course-related content, and services, is for general informational and business use.
                                </li>
                                <li>
                                    We reserve the right to modify, update, suspend, or discontinue any part of the
                                    platform or services at any time without prior notice.
                                </li>
                            </ul>

                            <h3>Intellectual Property</h3>
                            <ul>
                                <li>
                                    All content on this platform, including text, graphics, branding, course materials,
                                    documents, and digital assets, is the property of Seven Echoes or its licensors.
                                </li>
                                <li>
                                    You may not copy, reproduce, distribute, modify, or create derivative works without
                                    prior written permission from Seven Echoes.
                                </li>
                            </ul>

                            <h3>User Responsibilities</h3>
                            <ul>
                                <li>
                                    You agree to use the platform only for lawful purposes and in a manner that does not
                                    violate any applicable laws or regulations.
                                </li>
                                <li>
                                    You must not attempt to gain unauthorized access to any part of the platform, servers,
                                    or systems.
                                </li>
                                <li>
                                    Any information provided by you (such as content requirements, personal details, or
                                    communication) must be accurate and complete.
                                </li>
                            </ul>

                            <h3>Services and Content</h3>
                            <p>
                                Seven Echoes provides academic content support, digital resources, and related services.
                                While we strive to ensure quality and accuracy, we do not guarantee that all content will
                                be error-free, complete, or suitable for every use case. Services are subject to
                                availability and internal policies, and we reserve the right to accept, reject, or cancel
                                any request at our discretion.
                            </p>

                            <h3>Payments and Transactions (If Applicable)</h3>
                            <p>
                                Certain services may be offered on a paid basis. All payments, pricing, and service terms
                                will be communicated clearly before confirmation. We reserve the right to modify pricing
                                at any time. Refunds, if applicable, will be governed by our internal policies.
                            </p>

                            <h3>Third-Party Links</h3>
                            <p>
                                Our platform may contain links to third-party websites or tools. These are provided for
                                convenience only, and we do not control or take responsibility for their content,
                                policies, or practices.
                            </p>

                            <h3>Disclaimer of Liability</h3>
                            <ul>
                                <li>
                                    We make no warranties regarding the accuracy, reliability, or completeness of any
                                    content or services provided through the platform.
                                </li>
                                <li>
                                    Seven Echoes shall not be liable for any direct, indirect, incidental, or consequential
                                    damages arising from the use or inability to use the platform or services.
                                </li>
                            </ul>

                            <h3>Privacy Policy</h3>
                            <p>
                                Your use of this platform is also governed by our 
                                <Link href="/privacy-policy"> Privacy Policy</Link>, which explains how we collect,
                                use, and protect your information.
                            </p>

                            <h3>Changes to Terms</h3>
                            <p>
                                We reserve the right to update or modify these terms at any time. Changes will be effective
                                immediately upon posting. Continued use of the platform after changes constitutes your
                                acceptance of the updated terms.
                            </p>

                            <h3>Governing Law</h3>
                            <p>
                                These terms shall be governed by and interpreted in accordance with the laws of India.
                                Any disputes shall be subject to the jurisdiction of courts in Delhi NCR, India.
                            </p>

                            <h3>Contact Us</h3>

                            <p>
                                If you have any questions or requests regarding this Privacy Policy, please contact us:<br />
                                <strong>Email</strong>: info@www.abcd.com<br />
                                <strong>Alternate Email</strong>: privacy@www.abcd.com<br />
                                <strong>Phone</strong>: +91 XXXXX XXXXX<br />
                                <strong>Address</strong>: Company Address
                            </p>

                            <p>
                                By continuing to use our platform, you acknowledge that you have read, understood,
                                and agreed to these Terms and Conditions.
                            </p>

                            <p><strong>Last Updated:</strong> May 25, 2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsAndConditions