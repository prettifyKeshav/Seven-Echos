import React from 'react'
import HeroFormSec from './HeroFormSec'
import Motion from '@/components/organisms/Animate'

const Hero = () => {
    return (
        <>
            <div className="BecomeAnHost-banner">
                <div className="bg-background">
                    {/* <Image src="/assets/images/becomeanhost/become-an-host-banner.jpg" height={626} width={1028} alt='banner image'></Image> */}
                    <div className="container">
                        <div className="bg-wrapper">
                            <div className="col">
                                <Motion variant='fadeUp'>
                                    <h1>Place Your Home in Trusted Hands</h1>
                                    <p>From daily care to guest experience, we manage every detail with quiet excellence.</p>
                                </Motion>
                            </div>

                            <div className="col">
                                <Motion variant='fadeUp'>
                                    <HeroFormSec />
                                </Motion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero