import React from 'react'

const ExploreLocalCulture = () => {
    return (
        <>
            <div className="travel-guide-secB">
                <div className="container">
                    <ul className="tab-nav">
                        {
                            ExploreLocalCultureData.map((item, i) => (
                                <li key={i}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ExploreLocalCulture

const ExploreLocalCultureData = [
    {
        title: "Assagao",
        list: [

        ]
    },
    {
        title: "Calangute",
        list: [

        ]
    },
    {
        title: "Anjuna",
        list: [

        ]
    },
    {
        title: "Panjim",
        list: [

        ]
    }
]