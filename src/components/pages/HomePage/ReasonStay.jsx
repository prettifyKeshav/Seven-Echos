import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ReasonStay = () => {
    return (
        <>
            <div className="home-secE-2">
                <div className="container" >
                    <div className="heading">
                        <h2>If You Have A Reason, We Have A Stay</h2>
                        <p>From quiet escapes to big celebrations find a home that matches your moment.</p>
                    </div>

                    <div className="grid-box">
                        {ReasonStayData.map((item, i) => {
                            return (
                                <Link href={item.cardHref} className="col" key={i}>
                                    <figure>
                                        <Image src={item.figureImage} width={413} height={300} alt="ico" ></Image>
                                        <figcaption>
                                            <h4>{item.title}</h4>
                                            <div className="bottom-flex">
                                                <p>{item.description}</p>
                                                <button>Explore</button>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReasonStay


const ReasonStayData = [
    {
        cardHref: "/",
        figureImage: '/assets/images/home/reason-stay/1.jpg',
        title: "Family Getaways & Reunions",
        description: "Spacious stays made for comfort and togetherness.",
    },
    {
        cardHref: "/",
        figureImage: '/assets/images/home/reason-stay/2.jpg',
        title: "Friends' Vacations & Group Retreats",
        description: "Ideal for groups with private spaces and fun amenities.",
    },
    {
        cardHref: "/",
        figureImage: '/assets/images/home/reason-stay/3.jpg',
        title: "Parties & Bachelorettes",
        description: "Celebrate in style with poolside vibes and privacy.",
    },
    {
        cardHref: "/",
        figureImage: '/assets/images/home/reason-stay/4.jpg',
        title: "Intimate Weddings & Pre-Wedding Stays",
        description: "Elegant spaces with picture-perfect backdrops.",
    },
    {
        cardHref: "/",
        figureImage: '/assets/images/home/reason-stay/5.jpg',
        title: "Honeymoons & Romantic Escapes",
        description: "Secluded, cozy, and crafted for unforgettable moments.",
    },
    {
        cardHref: "/",
        figureImage: '/assets/images/home/reason-stay/6.jpg',
        title: "Workations, Offsites & Dealer Meets",
        description: "Quiet, work-friendly spaces with fast Wi-Fi.",
    }
]