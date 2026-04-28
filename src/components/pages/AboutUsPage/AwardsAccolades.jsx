import React from 'react'
import Image from 'next/image'

const AwardsAccolades = () => {
    return (
        <>
            <section>
                <div className="about-secD">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h2>Awards & Accolades</h2>
                                <p>Recognized for excellence in luxury villa experiences and exceptional guest satisfaction.</p>
                            </div>
                            <div className="col">
                                <div className="grid-box">
                                    <div className="grid-box-item">
                                        <figure>
                                            <Image src="/assets/images/about/awards/1.png"  width={252} height={125} alt="ico" ></Image>
                                        </figure>
                                        <h5>Best</h5>
                                        <p>Villas In GOA</p>
                                    </div>

                                      <div className="grid-box-item">
                                        <figure>
                                            <Image src="/assets/images/about/awards/2.png"  width={252} height={125} alt="ico" ></Image>
                                        </figure>
                                        <h5>Best</h5>
                                        <p>Villas In GOA</p>
                                    </div>

                                      <div className="grid-box-item">
                                        <figure>
                                            <Image src="/assets/images/about/awards/3.png"  width={252} height={125} alt="ico" ></Image>
                                        </figure>
                                        <h5>Best</h5>
                                        <p>Villas In GOA</p>
                                    </div>

                                      <div className="grid-box-item">
                                        <figure>
                                            <Image src="/assets/images/about/awards/4.png"  width={252} height={125} alt="ico" ></Image>
                                        </figure>
                                        <h5>Best</h5>
                                        <p>Villas In GOA</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AwardsAccolades  