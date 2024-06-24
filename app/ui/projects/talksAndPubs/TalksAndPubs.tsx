import Image from "next/image"
import { talksPubs } from "@/app/lib/portfolioData"
import { talksPubsData } from "@/app/lib/types"

export default function TalksAndPubs() {

    return (
        <section id='talks' className="flex flex-col items-center md:scroll-m-16 md:mb-20">
            <h3 className='text-primary text-xl ml-10'>
                Talks and Publications
            </h3>
            {talksPubs.map((card: talksPubsData) => {
                return (
                    <div key={card.title}>
                        <a href={card.externalLink}>
                            {card.thumbnail &&
                                <Image
                                    src={card.thumbnail}
                                    alt={`{card.title} - image`}
                                    width={335}
                                    height={225}
                                />}
                            <h5>{card.title}</h5>
                        </a>
                    </div>
                );
            })}
        </section>
    )
}


