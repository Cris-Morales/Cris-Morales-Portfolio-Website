import Image from "next/image"

export default function AboutMe() {

    return (
        <section id='about' className="h-section border border-primary">
            <div>
                <Image
                    src="/aboutMe/meAndPartner.jpg"
                    alt="Me and my wife."
                    width={272}
                    height={307}
                />

                <Image
                    src="/aboutMe/meAndDoggo.jpg"
                    alt="Me and our family Chonk, I mean, Dog in a tortilla blanket."
                    width={287}
                    height={287}
                />
                <Image
                    src="/aboutMe/jiuJitsuTournament.jpg"
                    alt="Me, at my 3rd Grappling Tournament at Blue Belt, getting bronze because I was late to my match against the silver metal winner."
                    width={300}
                    height={306}
                />
            </div>
        </section>
    )
}


