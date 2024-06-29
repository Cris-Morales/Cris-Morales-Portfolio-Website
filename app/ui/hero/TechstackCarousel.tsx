'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import { techstackIcons } from "@/app/lib/portfolioData"
import Image from "next/image"

const animation = { duration: 15000, easing: (t) => t }

export default function TechstackCarousel() {
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
                s.moveToIdx(5, true, animation)
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
        },
        [
            // add plugins here
        ]
    )

    return (
        <div ref={sliderRef} className="keen-slider h-14 max-w-carousel min-w-carousel my-6 carousel">
            {techstackIcons.map((icon: string) => {
                return (
                    <div className='keen-slider__slide w-12' key={icon}>
                        <Image
                            src={icon}
                            alt={icon.slice(16, -4)}
                            width={50}
                            height={50}
                        />
                    </div>
                )
            })}
        </div>
    )
}
