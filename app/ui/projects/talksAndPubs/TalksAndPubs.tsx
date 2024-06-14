'use client'
import Image from "next/image"

export default function TalksAndPubs() {

    return (
        <section id='talks'>
            <Image
                src="/projects/talksAndPubs/Docketeer15-Article-Icon.png"
                alt="External Link Thumbnail to Medium Article on the Release of Docketeer 15"
                width={454}
                height={530.11}
                priority
            />
            <Image
                src="/projects/talksAndPubs/TechTalk.png"
                alt="External Link Thumbnail to Tech Talk on The Internet of Things"
                width={454}
                height={530.11}
                priority
            />
        </section>
    )
}


