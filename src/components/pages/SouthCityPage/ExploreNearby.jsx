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

                <div className="heading">
                    <h2>Beaches (Calm, Scenic & Less Crowded)</h2>
                </div>

                <div className="grid-box south-grid">
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
        title: "Beaches",
        list: [
            {
                title: "Colva Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Benaulim Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "Varca Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Cavelossim Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "Mobor Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Betalbatim Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
    {
        title: "Sightseeing & Heritage",
        list: [
            {
                title: "Basilica of Bom Jesus",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Se Cathedral",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "Cabo de Rama Fort",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Big Foot Museum",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "Rachol Seminary",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Our Lady of Mercy Church",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
    {
        title: "Nature & Experiences",
        list: [
            {
                title: "Dudhsagar Waterfalls",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Cotigao Wildlife Sanctuary",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "Sal River Cruise",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Butterfly Beach",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "Spice Plantation Tour",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Bird Watching Trail",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
    {
        title: "Cafés & Brunch Spots",
        list: [
            {
                title: "The Fisherman's Wharf Café",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Cavatina Café",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "The Farmhouse Bistro",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Blue Planet Café",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "JuJu Café",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Caravela Café",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
    {
        title: "Nightlife & Bars",
        list: [
            {
                title: "SinQ Beach Club",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Leopard Valley",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "Southern Deck",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Cabo Beach Bar",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "Silent Noise Club",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Martin's Corner Bar",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
    {
        title: "Restaurants & Beach Shacks",
        list: [
            {
                title: "Martin's Corner",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Mickey's Restaurant",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "The Fisherman's Wharf",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Zeebop by the Sea",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "Pedro's Beach Shack",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Joe's River Cove",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
    {
        title: "Shopping & Local Markets",
        list: [
            {
                title: "Margao Municipal Market",
                image: "/assets/images/travel-guide/explore-nearby-south/1.jpg",
            },
            {
                title: "Colva Beach Market",
                image: "/assets/images/travel-guide/explore-nearby-south/2.jpg",
            },
            {
                title: "Benaulim Local Market",
                image: "/assets/images/travel-guide/explore-nearby-south/3.jpg",
            },
            {
                title: "Goa Chitra Store",
                image: "/assets/images/travel-guide/explore-nearby-south/4.jpg",
            },
            {
                title: "Handicraft Emporium",
                image: "/assets/images/travel-guide/explore-nearby-south/5.jpg",
            },
            {
                title: "Saturday Night Market",
                image: "/assets/images/travel-guide/explore-nearby-south/6.jpg",
            },
        ],
    },
];