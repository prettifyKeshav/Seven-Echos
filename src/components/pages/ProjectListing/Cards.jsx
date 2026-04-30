import ProjectsCard from '@/components/organisms/ProjectsCard'
import { OurVillasCardsData } from '@/data/home/HomeData'

import React from 'react'

const Cards = () => {
    return (
        <>
            <section>
                <div className="projects-sec">
                    <div className="container">
                        <div className="flex-box">
                            <aside>
                                Filter
                            </aside>
                            <div className="cards-wrapper">
                                {
                                    OurVillasCardsData.map((item) => {
                                        <ProjectsCard {...item} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards