import Image from "next/image"
import { talksPubs } from "@/app/lib/portfolioData"
import { talksPubsData } from "@/app/lib/types"

export default function TalksAndPubs() {

    return (
        <section id='talks' className="flex flex-col items-center mb-40 w-full">
            <h3 className='text-primary text-xl mt-5 mb-10 font-semibold'>
                Talks and Publications
            </h3>
            <div className="flex flex-col w-3/5 xl:w-1/3 gap-10">
                {talksPubs.map((card: talksPubsData) => {
                    return (
                        <article key={card.title} className="border-2 border-primary grid content-center bg-background bg-opacity-35 boxGlow rounded-xl p-2">
                            <a href={card.externalLink} className="flex flex-col items-center text-center p-5 opacity-75 hover:opacity-100 transition-all duration-200 gap-5">
                                {card.thumbnail &&
                                    <div className="rounded-xl flex flex-col items-end">
                                        <Image
                                            src={card.thumbnail}
                                            alt={`{card.title} - thumbnail`}
                                            width={335}
                                            height={225}
                                            className=" rounded-xl relative z-10 w-96 h-auto"
                                            placeholder="blur"
                                        />
                                        <Image
                                            src="/externalDark.svg"
                                            alt={`${card.title}-publication-external-link`}
                                            width={20}
                                            height={20}
                                            className="-mt-6 z-10 mr-2 "
                                        />
                                    </div>}
                                <h5 className={`md:w-4/5 font-medium`}>&quot;{card.title}&quot;</h5>
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}


