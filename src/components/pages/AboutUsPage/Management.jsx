import React from 'react'
import Image from 'next/image'
import Motion from '@/components/organisms/Animate'

const Management = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="about-secC">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>The People Who Shape Seven Echoes</h2>
                                <p>Co-founded by Shubham Jain and Bhavuk Gupta, Seven Echoes is built on the belief that every stay should feel personal, seamless, and genuinely welcoming.</p>
                            </div>
                        </Motion>

                        <div className="flex-box">
                            <Motion variant='fadeUp'>
                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/about/management-1.jpg" width={628} height={713} alt="ico" ></Image>
                                        <div className="user-info">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ex nesciunt enim iste. In esse deserunt, illo nisi perferendis fugiat sapiente voluptatibus veritatis numquam soluta suscipit nemo harum alias totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ex nesciunt enim iste. In esse deserunt, illo nisi perferendis fugiat sapiente voluptatibus veritatis numquam soluta suscipit nemo harum alias totam?</p>
                                        </div>
                                    </figure>
                                    <figcaption>
                                        <h5>Shubham Jain</h5>
                                        <p>Co-founder</p>
                                    </figcaption>
                                </div>
                            </Motion>

                            <Motion variant='fadeUp'>
                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/about/management-2.jpg" width={628} height={713} alt="ico" ></Image>
                                        <div className="user-info">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ex nesciunt enim iste. In esse deserunt, illo nisi perferendis fugiat sapiente voluptatibus veritatis numquam soluta suscipit nemo harum alias totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ex nesciunt enim iste. In esse deserunt, illo nisi perferendis fugiat sapiente voluptatibus veritatis numquam soluta suscipit nemo harum alias totam?</p>
                                        </div>
                                    </figure>
                                    <figcaption>
                                        <h5>Bhavuk Gupta</h5>
                                        <p>Co-founder</p>
                                    </figcaption>
                                </div>
                            </Motion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Management