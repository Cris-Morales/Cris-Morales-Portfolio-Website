import Image from "next/image"
import { techstackIcons } from "@/app/lib/portfolioData"


export default function Footer() {

    return (
        <footer className="flex flex-col items-center justify-center w-full min-h-footer gap-4 text-sm md:py-3 py-5">
            Created by Cristian Morales
            <ul className="flex justify-center gap-2">

                <li>
                    <Image
                        src={techstackIcons[0].source}
                        alt={techstackIcons[0].source.slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[0].source}
                    />
                </li>
                <li>
                    <Image
                        src={techstackIcons[1].source}
                        alt={techstackIcons[1].source.slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[1].source}
                    />
                </li>
                <li>
                    <Image
                        src={techstackIcons[3].source}
                        alt={techstackIcons[3].source.slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[3].source}
                    />
                </li>
                <li>
                    <Image
                        src={techstackIcons[9].source}
                        alt={techstackIcons[9].source.slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[9].source}
                    />
                </li>
            </ul>
            Hosted on Vercel
            <a href='https://github.com/Cris-Morales/Cris-Morales-Portfolio-Website.git' className="flex flex-col justify-center items-center">
                Checkout the Repo for this Site
                <Image
                    src="/github.svg"
                    alt='through this github link.'
                    width={32}
                    height={32}
                    className=" min-w-8 iconGlow"
                />
            </a>
        </footer>
    )
}


