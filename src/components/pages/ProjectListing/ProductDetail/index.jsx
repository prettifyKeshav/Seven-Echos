"use client"
import React, { useEffect } from 'react'
import { useNotFound } from "@/context/useNotFoundContext";
import "@/uploads/styles/projects/projects.css"
import Hero from './Hero';

const ProductDetail = () => {
    const { setIsNotFound } = useNotFound()

    useEffect(() => {
        setIsNotFound(true)
    }, [])

    return (
        <div className="project-detail-page">
            <Hero />
        </div>
    )
}

export default ProductDetail