'use client'
import Image from "next/image"

export default function AboutMe() {

    return (
        <section id='about'>
            <div>
                About
            </div>
            <Image
                src="/aboutMe/jiuJitsuTournament.jpg"
                alt="Me, at my 3rd Grappling Tournament at Blue Belt, getting bronze because I was late to my match against the silver metal winner."
                width={454}
                height={530.11}
            />
            <Image
                src="/aboutMe/meAndDoggo.jpg"
                alt="Me and our family Chonk, I mean, Dog in a tortilla blanket."
                width={454}
                height={530.11}
            />
            <Image
                src="/aboutMe/meAndPartner.jpg"
                alt="Me and my wife."
                width={454}
                height={530.11}
            />
        </section>
    )
}


