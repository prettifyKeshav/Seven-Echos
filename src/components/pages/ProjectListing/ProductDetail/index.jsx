"use client"
import React, { useEffect } from 'react'
import { useNotFound } from "@/context/useNotFoundContext";
import "@/uploads/styles/projects/projects.css"
import "@/uploads/styles/component/component.css"
import Hero from './Hero';
import DetailSec from './DetailSec';

const ProductDetail = () => {
    const { setIsNotFound } = useNotFound()

    useEffect(() => {
        setIsNotFound(true)
    }, [])

    return (
        <div className="project-detail-page">
            <Hero />
            <DetailSec />
        </div>
    )
}

export default ProductDetail