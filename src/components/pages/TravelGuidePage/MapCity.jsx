import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const cityData = [
    {
        id: 1,
        title: "North Goa",
        description:
            "Where Portuguese heritage meets bohemian soul—discover the cultural heart of Goa through its cafés, beaches, and timeless streets.",
        image: "/assets/images/travel-guide/map-img1.jpg",
        href: "/north-city",
        buttonText: "Explore North Goa",
    },
    {
        id: 2,
        title: "South Goa",
        description:
            "Where Portuguese heritage meets bohemian soul—discover the cultural heart of Goa through its cafés, beaches, and timeless streets.",
        image: "/assets/images/travel-guide/map-img2.jpg",
        href: "/south-city",
        buttonText: "Explore South Goa",
    },
];

const AboutCity = () => {
    return (
        <section>
            <div className="travel-guide-secA">
                <div className="container">
                    <div className="heading">
                        <h2>The Art of Slow Travel</h2>
                        <h3>Discover Goa Beyond the Ordinary</h3>

                        <p>
                            This is not your typical travel guide. We've walked these
                            streets, savored these meals, and watched countless sunsets
                            from these shores. Every recommendation comes from genuine
                            experience—a collection of places that embody the soulful
                            essence of Goa.
                        </p>

                        <p>
                            From the bohemian cafés of Assagao to the serene beaches of
                            the South, let us guide you through an experience that honors
                            both tradition and thoughtful exploration.
                        </p>
                    </div>

                    <div className="cat-grid-box">
                        {cityData.map((item) => (
                            <Link
                                href={item.href}
                                className="grid-box-item"
                                key={item.id}
                            >
                                <figure>
                                    <Image
                                        src={item.image}
                                        width={704}
                                        height={593}
                                        alt={item.title}
                                    />

                                    <div className="figinfo">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </figure>

                                <div className="group-btn">
                                    <button
                                        type="button"
                                        className="btn"
                                    >
                                        {item.buttonText}
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCity