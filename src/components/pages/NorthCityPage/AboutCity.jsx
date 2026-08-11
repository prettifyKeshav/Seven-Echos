import React from 'react'
import Image from 'next/image'

const AboutCity = () => {
    return (
        <>
            <section>
                <div className="travel-guide-secA">
                    <div className="container">
                        <div className="heading">
                            <h2>Vibrant & Cultural</h2>
                            <h3>North Goa</h3>
                            <p>Where Portuguese heritage meets bohemian soul discover the cultural heart of Goa through its cafés, beaches, and timeless streets.</p>
                        </div>
                        
                        <figure>
                            <Image src="/assets/images/travel-guide/travel-guide-secA.png" width={1200} height={900} alt="ico"></Image>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCity