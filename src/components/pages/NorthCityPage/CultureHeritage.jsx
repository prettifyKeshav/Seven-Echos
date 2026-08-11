"use client";

import { useState } from "react";
import Image from "next/image";

const CultureHeritage = () => {
    const [activeLocation, setActiveLocation] = useState(0);

    return (
        <section>
            <div className="culture-heritage">
                <div className="container">
                    <ul>
                        {ExploreLocalCultureData.map((item, i) => (
                            <li
                                key={i}
                                className={activeLocation === i ? "active" : ""}
                                onClick={() => setActiveLocation(i)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    <div className="heading">
                        <h2>Explore Local Culture & Heritage</h2>
                    </div>

                    {ExploreLocalCultureData[activeLocation].list.map((item, i) => (
                        <div className="flex-box" key={i} >
                            <figure>
                                <Image
                                    src={item.image}
                                    width={714}
                                    height={423}
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

export default CultureHeritage;

const ExploreLocalCultureData = [
    {
        title: "Assagao",
        list: [
            {
                title: "St. Cajetan Church",
                description:
                    "Visit this historic Portuguese-era church with beautiful architecture and peaceful surroundings.",
                image: "/assets/images/travel-guide/tr2.jpg",
            },
            {
                title: "Heritage Walk",
                description:
                    "Take a guided or self-guided walk through the heritage lanes of Assagao and discover local stories, Portuguese architecture, scenic hills, and peaceful village roads.",
                image: "/assets/images/travel-guide/tr1.jpg",
            },
        ],
    },
    {
        title: "Calangute",
        list: [
            {
                title: "Calangute Beach",
                description:
                    "Relax on Goa's famous beach with water sports, beach shacks, and vibrant sunsets.",
                image: "/assets/images/travel-guide/tr1.jpg",
            },
            {
                title: "Tibetan Market",
                description:
                    "Shop for handicrafts, souvenirs, jewelry, and local street food near the beach.",
                image: "/assets/images/travel-guide/tr2.jpg",
            },
        ],
    },
    {
        title: "Anjuna",
        list: [
            {
                title: "Anjuna Beach",
                description:
                    "Known for its rocky shoreline, lively atmosphere, and stunning sunset views.",
                image: "/assets/images/travel-guide/tr2.jpg",
            },
            {
                title: "Anjuna Flea Market",
                description:
                    "Browse unique clothing, handmade crafts, accessories, and local art every week.",
                image: "/assets/images/travel-guide/tr1.jpg",
            },
        ],
    },
    {
        title: "Panjim",
        list: [
            {
                title: "Fontainhas",
                description:
                    "Walk through the Latin Quarter featuring colorful Portuguese houses and charming streets.",
                image: "/assets/images/travel-guide/tr1.jpg",
            },
            {
                title: "Our Lady of the Immaculate Conception Church",
                description:
                    "Visit one of Goa's most iconic churches with panoramic city views.",
                image: "/assets/images/travel-guide/tr2.jpg",
            },
        ],
    },
];