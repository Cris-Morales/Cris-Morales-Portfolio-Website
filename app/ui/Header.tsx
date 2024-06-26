import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return (
        <header className=" z-50 flex justify-between fixed w-screen h-header py-3 px-4 md:px-7 bg-background">
            <ul className="flex gap-3 items-center">
                <li>
                    <a href='https://github.com/Cris-Morales' className="iconGlow">
                        <Image
                            src="/github.svg"
                            alt="Cristian's Github Profile Link"
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/Cris-Morales'
                        className="iconGlow">
                        <Image
                            src="/linkedIn.svg"
                            alt="Cristian's LinkedIn Profile Link"
                            width={40}
                            height={34}
                        />
                    </a>
                </li>
                <li>
                    <a href='mailto:CrisMorales@protonmail.com'
                        className="iconGlow">
                        <Image
                            src="/email.svg"
                            alt="Cristian's Buisness Email"
                            width={37}
                            height={34}
                        />
                    </a>
                </li>
            </ul>
            <div className=" grid content-center text-center textGlow">
                <Link href='/CristianMorales-Resume.pdf' download className=" text-primary font-bold text-base text-center content-center ">
                    View Resume
                </Link>
            </div>
        </header>
    )
}


