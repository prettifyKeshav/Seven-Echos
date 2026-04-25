import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ShareHomeStory = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="home-secE">
                        <div className="flex-box">
                            <figcaption>
                                <h2>Share Your Home, Share Your Story</h2>
                                <p>Share your home’s warmth with people who truly value it.</p>
                                <Link href="" className="btn " >Know More</Link>
                            </figcaption>
                            <figure>
                                <Image src="/assets/images/home/shere-home.jpg" width={823} height={390} alt='ico' ></Image>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShareHomeStory