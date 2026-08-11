import React from "react";
import Link from "next/link";

const JourneyAwaitsSec = ({ heading, buttons }) => {
    return (
        <section>
            <div className="journey-awaits-sec">
                <div className="container">
                    <div className="heading">
                        <h2>{heading.title}</h2>
                        <h3>{heading.subtitle}</h3>
                        <h4>{heading.highlight}</h4>
                        <p>{heading.description}</p>
                    </div>

                    <div className="group-btn">
                        {buttons.map((button, index) => (
                            <Link key={index} href={button.href}>
                                {button.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyAwaitsSec;