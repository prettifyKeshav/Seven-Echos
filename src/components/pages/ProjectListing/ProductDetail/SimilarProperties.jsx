"use client"

import SimilarPropertiesCard from '@/components/organisms/SimilarPropertiesCard'
import { useState } from 'react'

import { similarPropertiesCardData } from '@/data/ProductDetails/ProductDetails'

const SimilarProperties = () => {
    const [activeTab, setActiveTab] = useState(0)

    // Dynamically compute "All Villas" list from all other categories
    const allVillasList = similarPropertiesCardData
        .filter(({ categoryTitle }) => categoryTitle !== "All Villas")
        .flatMap(({ list }) => list)

    const tabs = similarPropertiesCardData.map((tab) =>
        tab.categoryTitle === "All Villas"
            ? { ...tab, list: allVillasList }
            : tab
    )
    return (
        <>
            <ul className="tab-nav">
                {
                    tabs.map(({ categoryTitle }, i) => {
                        return (
                            <li onClick={() => setActiveTab(i)} className={activeTab === i ? "active" : ""} key={i}>{categoryTitle}</li>
                        )
                    })
                }
            </ul>

            {tabs[activeTab].list.map((item, i) => {
                return (
                    <SimilarPropertiesCard key={i} {...item} />
                )
            })}

        </>
    )
}

export default SimilarProperties