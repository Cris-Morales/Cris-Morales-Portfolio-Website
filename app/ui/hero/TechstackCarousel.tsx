'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { techstackIcons } from "@/app/lib/portfolioData"
import Image from "next/image"
import { useReducedMotion } from 'framer-motion'

const animation = { duration: 15000, easing: (t: number) => t }

export default function TechstackCarousel() {
    const reduceMotion = useReducedMotion();
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            drag: true,
            renderMode: "performance",
            slides: {
                number: 17,
                perView: 7,
                spacing: 5,
            },
            mode: 'free-snap',
            created(s) {
                if (!reduceMotion) {
                    s.moveToIdx(5, true, animation)
                }
            },
            updated(s) {
                if (!reduceMotion) {
                    s.moveToIdx(s.track.details.abs + 5, true, animation)
                }
            },
            animationEnded(s) {
                if (!reduceMotion) {
                    s.moveToIdx(s.track.details.abs + 5, true, animation)
                }
            },
        },
        [
        ]
    )

    return (
        <div ref={sliderRef} className="keen-slider overflow-x-hidden h-14 max-w-carousel min-w-carousel mb-6 mt-3 carousel">
            {techstackIcons.map((icon: string, index: number) => {
                return (
                    <div className={`keen-slider__slide number-slide${index} flex justify-center items-center min-w-14`} key={icon}>
                        <Image
                            src={icon}
                            alt={icon.slice(16, -4) + 'Icon'}
                            width={50}
                            height={50}
                            className=''
                        />
                    </div>
                )
            })}
        </div>
    )
}
