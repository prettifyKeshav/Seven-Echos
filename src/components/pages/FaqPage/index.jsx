"use client"

import Accordion from '@/components/organisms/Accordion';
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { faqData } from '@/data/ProductDetails/ProductDetails';
import "@/uploads/styles/Faq/faq.css"
import "@/uploads/styles/component/component.css"
import { useHeaderFixed } from '@/context/useHeaderContext';

const FaqPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const { setIsHeaderFixed } = useHeaderFixed()

    const allFaqs = useMemo(() => {
        return faqData.slice(1).flatMap(item => item.list);
    }, []);

    useEffect(() => {
        setIsHeaderFixed(true)
    }, [])

    const currentTabData = activeTab === 0
        ? allFaqs
        : faqData[activeTab].list;

    const filteredData = useMemo(() => {
        if (!searchQuery.trim()) return currentTabData;

        const query = searchQuery.toLowerCase().trim();

        return currentTabData.filter(item =>
            item.mainTitle.toLowerCase().includes(query) ||
            item.paragraph.toLowerCase().includes(query)
        );
    }, [currentTabData, searchQuery]);

    const isNoResults = filteredData.length === 0 && searchQuery.trim() !== "";

    return (
        <>
            <div className="faq-secA">
                <div className="container">
                    <div className="heading">
                        <h2>FAQ About Villa</h2>
                        <div className="search-group">
                            <Image
                                src="/assets/images/project/detail/reviews-ico/search.svg"
                                width={20}
                                height={20}
                                alt="search"
                            />
                            <input
                                type="search"
                                placeholder='Search FAQs...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <ul className="tab-nav">
                        {faqData.map((item, i) => (
                            <li
                                key={i}
                                onClick={() => {
                                    setActiveTab(i);
                                    setSearchQuery("");
                                }}
                                className={activeTab === i ? "active" : ""}>
                                {item.title}
                            </li>
                        ))}
                    </ul>

                    {isNoResults ? (
                        <div className="product-not-found not-found2">
                            <div className="nt-fnd-wrp">
                                <Image
                                    src="/assets/not-found.gif"
                                    width={120}
                                    height={120}
                                    alt="No results"
                                />
                                <p>Not Found!</p>
                            </div>
                        </div>
                    ) : (
                        <Accordion data={filteredData} />
                    )}
                </div>
            </div>
        </>
    );
};

export default FaqPage;