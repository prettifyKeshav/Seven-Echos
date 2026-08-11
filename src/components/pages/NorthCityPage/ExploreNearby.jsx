"use client";

import { useState } from "react";
import Image from "next/image";

const ExploreNearby = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="explore-nearby">
            <div className="container">

                <ul className="tab-list">
                    {ExploreNearbyData.map((item, i) => (
                        <li
                            key={i}
                            className={activeTab === i ? "active" : ""}
                            onClick={() => setActiveTab(i)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>

                <div className="grid-box">
                    {ExploreNearbyData[activeTab].list.map((item, i) => (
                        <div className="box" key={i}>
                            <figure>
                                <Image
                                    src={item.image}
                                    width={450}
                                    height={310}
                                    alt={item.title}
                                />
                            </figure>

                            <figcaption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </figcaption>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExploreNearby;

const ExploreNearbyData = [
    {
        title: "Dining",
        list: [
            {
                title: "Gun Powder",
                description: "Highly rated place for modern South Indian & regional dishes.",
                image: "/assets/images/travel-guide/explore-nearby/1.jpg",
            },
            {
                title: "Cafe Cotinga",
                description: "Vibrant all-day restaurant & bar with diverse flavours.",
                image: "/assets/images/travel-guide/explore-nearby/2.jpg",
            },
            {
                title: "Mojigao",
                description: "Nature-inspired restaurant with Mediterranean & Middle Eastern fare.",
                image: "/assets/images/travel-guide/explore-nearby/3.jpg",
            },
            {
                title: "SOPO",
                description: "Beautiful fine-dining restaurant with creative Burmese plates.",
                image: "/assets/images/travel-guide/explore-nearby/4.jpg",
            },
            {
                title: "Izumi",
                description: "Japanese & Asian cuisine with high-quality dishes.",
                image: "/assets/images/travel-guide/explore-nearby/5.jpg",
            },
            {
                title: "Tamil Table & Jamun",
                description: "Excellent South Indian restaurant with rich flavours.",
                image: "/assets/images/travel-guide/explore-nearby/6.jpg",
            },
        ],
    },
    {
        title: "Cafés & Coffee Spots",
        list: [
            {
                title: "Blue Tokai",
                description: "Specialty coffee with fresh pastries and snacks.",
                image: "/assets/images/travel-guide/explore-nearby/1.jpg",
            },
            {
                title: "Artjuna",
                description: "Popular café serving healthy food and artisan coffee.",
                image: "/assets/images/travel-guide/explore-nearby/2.jpg",
            },
            {
                title: "Babka",
                description: "Fresh bakery, desserts, and handcrafted coffee.",
                image: "/assets/images/travel-guide/explore-nearby/3.jpg",
            },
            {
                title: "Bean Me Up",
                description: "Relaxed café serving healthy meals and organic coffee.",
                image: "/assets/images/travel-guide/explore-nearby/4.jpg",
            },
            {
                title: "Eva Cafe",
                description: "Cozy beachfront café with delicious breakfast options.",
                image: "/assets/images/travel-guide/explore-nearby/5.jpg",
            },
            {
                title: "Baba Au Rhum",
                description: "French bakery known for pastries and artisan coffee.",
                image: "/assets/images/travel-guide/explore-nearby/6.jpg",
            },
        ],
    },
    {
        title: "Scenic Spots & Beaches",
        list: [
            {
                title: "Anjuna Beach",
                description: "Relax and enjoy Goa's famous sunsets.",
                image: "/assets/images/travel-guide/explore-nearby/1.jpg",
            },
            {
                title: "Vagator Beach",
                description: "Known for dramatic cliffs and beautiful sea views.",
                image: "/assets/images/travel-guide/explore-nearby/2.jpg",
            },
            {
                title: "Chapora Fort",
                description: "Historic fort with panoramic coastal views.",
                image: "/assets/images/travel-guide/explore-nearby/3.jpg",
            },
            {
                title: "Ozran Beach",
                description: "A peaceful beach with stunning rocky landscapes.",
                image: "/assets/images/travel-guide/explore-nearby/4.jpg",
            },
            {
                title: "Morjim Beach",
                description: "Known for its turtle nesting sites and serene ambiance.",
                image: "/assets/images/travel-guide/explore-nearby/5.jpg",
            },
            {
                title: "Ashwem Beach",
                description: "A quiet beach perfect for relaxing and long walks.",
                image: "/assets/images/travel-guide/explore-nearby/6.jpg",
            },
        ],
    },
    {
        title: "Fashion & Clothing Boutiques",
        list: [
            {
                title: "Rangeela",
                description: "Designer clothing and handcrafted accessories.",
                image: "/assets/images/travel-guide/explore-nearby/1.jpg",
            },
            {
                title: "The Flame Store",
                description: "Premium fashion and lifestyle boutique.",
                image: "/assets/images/travel-guide/explore-nearby/2.jpg",
            },
            {
                title: "Sacha's Shop",
                description: "Unique bohemian clothing and handmade collections.",
                image: "/assets/images/travel-guide/explore-nearby/3.jpg",
            },
            {
                title: "No Nasties",
                description: "Sustainable fashion made from organic cotton.",
                image: "/assets/images/travel-guide/explore-nearby/4.jpg",
            },
            {
                title: "Jade Jagger Boutique",
                description: "Luxury resort wear and handcrafted jewelry.",
                image: "/assets/images/travel-guide/explore-nearby/5.jpg",
            },
            {
                title: "People Tree",
                description: "Curated collection of clothing, décor, and accessories.",
                image: "/assets/images/travel-guide/explore-nearby/6.jpg",
            },
        ],
    },
];