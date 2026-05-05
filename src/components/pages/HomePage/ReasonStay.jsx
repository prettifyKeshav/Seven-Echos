import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ReasonStay = () => {
    return (
        <>
            <div className="home-secE-2">
                <div className="container">
                    <div className="heading">
                        <h2>If You Have A Reason, We Have A Stay</h2>
                        <p>From quiet escapes to big celebrations find a home that matches your moment.</p>
                    </div>

                    <div className="grid-box">
                        <Link href="/" className="col">
                            <Image src="/assets/images/home/reason-stay/1.jpg" width={413} height={300} alt="ico" ></Image>
                            <figcaption>
                                <h4>Family Getaways & Reunions</h4>
                                <div className="bottom-flex">
                                    <p>Spacious stays made for comfort and togetherness.</p>
                                    <button>Explore</button>
                                </div>
                            </figcaption>
                        </Link>

                        <Link href="/" className="col">
                            <Image src="/assets/images/home/reason-stay/2.jpg" width={413} height={300} alt="ico" ></Image>
                            <figcaption>
                                <h4>Family Getaways & Reunions</h4>
                                <div className="bottom-flex">
                                    <p>Spacious stays made for comfort and togetherness.</p>
                                    <button>Explore</button>
                                </div>
                            </figcaption>
                        </Link>

                        <Link href="/" className="col">
                            <Image src="/assets/images/home/reason-stay/3.jpg" width={413} height={300} alt="ico" ></Image>
                            <figcaption>
                                <h4>Family Getaways & Reunions</h4>
                                <div className="bottom-flex">
                                    <p>Spacious stays made for comfort and togetherness.</p>
                                    <button>Explore</button>
                                </div>
                            </figcaption>
                        </Link>

                        <Link href="/" className="col">
                            <Image src="/assets/images/home/reason-stay/4.jpg" width={413} height={300} alt="ico" ></Image>
                            <figcaption>
                                <h4>Family Getaways & Reunions</h4>
                                <div className="bottom-flex">
                                    <p>Spacious stays made for comfort and togetherness.</p>
                                    <button>Explore</button>
                                </div>
                            </figcaption>
                        </Link>

                        <Link href="/" className="col">
                            <Image src="/assets/images/home/reason-stay/5.jpg" width={413} height={300} alt="ico" ></Image>
                            <figcaption>
                                <h4>Family Getaways & Reunions</h4>
                                <div className="bottom-flex">
                                    <p>Spacious stays made for comfort and togetherness.</p>
                                    <button>Explore</button>
                                </div>
                            </figcaption>
                        </Link>
                        <Link href="/" className="col">
                            <Image src="/assets/images/home/reason-stay/6.jpg" width={413} height={300} alt="ico" ></Image>
                            <figcaption>
                                <h4>Family Getaways & Reunions</h4>
                                <div className="bottom-flex">
                                    <p>Spacious stays made for comfort and togetherness.</p>
                                    <button>Explore</button>
                                </div>
                            </figcaption>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReasonStay