"use client"
import React, { useEffect } from 'react'
import "@/uploads/styles/projects/projects.css"
import "@/uploads/styles/component/component.css"
import Hero from './Hero';
import DetailSec from './DetailSec';
import { useHeaderFixed } from '@/context/useHeaderContext';

const ProductDetail = () => {
    const { setIsHeaderFixed , setIsWhiteHeader } = useHeaderFixed()

    useEffect(() => {
        setIsHeaderFixed(true)
        setIsWhiteHeader(true)
    }, [])
    
    return (
        <div className="project-detail-page">
            <Hero />
            <DetailSec />
        </div>
    )
}

export default ProductDetail