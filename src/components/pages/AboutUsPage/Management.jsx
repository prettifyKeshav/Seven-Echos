import React from 'react'
import Image from 'next/image'

const Management = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="about-secC">
                        <div className="heading">
                            <h2>The People Who Shape Seven Echoes</h2>
                            <p>Co-founded by Shubham Jain and Bhavuk Gupta, Seven Echoes is built on the belief that every stay should feel personal, seamless, and genuinely welcoming.</p>
                        </div>

                        <div className="flex-box">
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/about/management-1.jpg" width={628} height={713} alt="ico" ></Image>
                                </figure>
                                <figcaption>
                                    <h5>Shubham Jain</h5>
                                    <p>Co-founder</p>
                                </figcaption>
                            </div>

                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/about/management-2.jpg" width={628} height={713} alt="ico" ></Image>
                                </figure>
                                <figcaption>
                                    <h5>Bhavuk Gupta</h5>
                                    <p>Co-founder</p>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Management