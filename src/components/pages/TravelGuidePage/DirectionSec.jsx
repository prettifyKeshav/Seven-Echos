import React from "react";
import Image from "next/image";

const DirectionSec = ({ heading, image }) => {
    return (
        <section>
            <div className="direction-sec-secA">
                <div className="container">
                    <div className="heading">
                        <h2>{heading.title}</h2>
                        <h3>{heading.subtitle}</h3>
                        <p>{heading.description}</p>
                    </div>

                    <figure>
                        <Image
                            src={image.src}
                            width={1200}
                            height={900}
                            alt={image.alt}
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default DirectionSec;