import Image from "next/image"
import { techstackIcons } from "@/app/lib/portfolioData"


export default function Footer() {

    return (
        <footer className="flex flex-col items-center justify-center w-screen min-h-footer gap-4 text-sm md:py-3 py-5">
            Created by Cristian Morales
            <ul className="flex justify-center gap-2">

                <li>
                    <Image
                        src={techstackIcons[0]}
                        alt={techstackIcons[0].slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[0]}
                    />
                </li>
                <li>
                    <Image
                        src={techstackIcons[1]}
                        alt={techstackIcons[1].slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[1]}
                    />
                </li>
                <li>
                    <Image
                        src={techstackIcons[3]}
                        alt={techstackIcons[3].slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[3]}
                    />
                </li>
                <li>
                    <Image
                        src={techstackIcons[9]}
                        alt={techstackIcons[9].slice(16, 26)}
                        width={30}
                        height={30}
                        key={techstackIcons[9]}
                    />
                </li>
            </ul>
            Hosted on Vercel
            <a href='https://github.com/Cris-Morales'>
                Checkout the Repo for this Site on my Github
            </a>
        </footer>
    )
}


