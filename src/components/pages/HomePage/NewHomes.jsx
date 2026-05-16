import React from 'react'
import Image from 'next/image'
import Motion from '@/components/organisms/Animate'

const NewHomes = () => {
    return (
        <>
            <section>
                <div className="home-secH">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <Motion variant='fadeUp'>
                                    <h2>Be the First to Know When New Homes Open Their Doors</h2>
                                    <p>Join our small circle and get updates on new homes, stories, and openings shared only when it truly matters.</p>
                                </Motion>
                                <Motion variant='fadeUp'>
                                    <form action="" className='form'>
                                        <input type="text" placeholder='Enter your email here' />
                                        <button className='btn btn-primary'>Try for free</button>
                                    </form>
                                </Motion>
                            </div>
                            <div className="col">
                                <Motion variant='fadeUp'>
                                    <figure>
                                        <Image src="/assets/images/home/new-home.png" width={556} height={623} alt="ico"></Image>
                                        <figcaption>
                                            <div className="col">
                                                <div className="figure">
                                                    <Image src="/assets/icon/star-pointer.svg" width={20} height={20} alt='ico'></Image>
                                                </div>
                                                <div className="figcontent">
                                                    <h4>5% off your first stay</h4>
                                                    <p>Instant savings on your first booking.</p>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="figure">
                                                    <Image src="/assets/icon/star-pointer.svg" width={20} height={20} alt='ico'></Image>
                                                </div>
                                                <div className="figcontent">
                                                    <h4>Early access to new listings</h4>
                                                    <p>See new homes before anyone else.</p>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="figure">
                                                    <Image src="/assets/icon/star-pointer.svg" width={20} height={20} alt='ico'></Image>
                                                </div>
                                                <div className="figcontent">
                                                    <h4>Member-only travel guides</h4>
                                                    <p>Get curated tips for unforgettable trips.</p>
                                                </div>
                                            </div>

                                        </figcaption>
                                    </figure>
                                </Motion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewHomes