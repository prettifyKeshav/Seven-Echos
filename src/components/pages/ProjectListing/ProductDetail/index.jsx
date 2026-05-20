"use client"
import React, { useEffect } from 'react'
import "@/uploads/styles/projects/projects.css"
import "@/uploads/styles/component/component.css"
import Hero from './Hero';
import { useHeaderFixed } from '@/context/useHeaderContext';
import FilterSec from '@/components/organisms/FilterSec';
import DetailSec from './DetailSec';

const ProductDetail = () => {
    const { setIsHeaderFixed, setIsWhiteHeader } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
        setIsWhiteHeader(true)
    }, [])

    return (
        <div className="project-detail-page">
            <FilterSec />
            <Hero />
            <DetailSec />
        </div>
    )
}

export default ProductDetail