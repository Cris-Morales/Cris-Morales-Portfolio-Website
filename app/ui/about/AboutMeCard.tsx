'use client'

import Image from "next/image"
import { aboutMeImageType } from "@/app/lib/types"
import { motion } from 'framer-motion'
import { useState } from "react"

export default function AboutMeCard({ imageData }: { imageData: aboutMeImageType }) {
    return (
        <div
            className="min-w-24 max-w-64 hover:scale-105 duration-300 transition-all rounded-3xl"
        >
            <Image
                src={imageData.source}
                alt={imageData.alt}
                width={imageData.resolutionX}
                height={imageData.resolutionY}
                className="rounded-3xl aboutImageGlow"
            />
        </div>
    )
}


