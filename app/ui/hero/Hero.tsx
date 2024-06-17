'use client'
import Image from "next/image"

export default function Hero() {

    return (
        <section id='home' className="h-section">
            <div>
                Hero
            </div>
            <Image
                src="/headshot-nobg.png"
                alt="Headshot of me, at my desk, trying to look thoughtful and professional."
                width={454}
                height={530.11}
                priority
            />
        </section>
    )
}


