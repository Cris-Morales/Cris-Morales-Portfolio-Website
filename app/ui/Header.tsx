import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return (
        <header className="flex justify-between fixed w-screen h-header py-3 px-4 mt-1 md:px-7">
            <ul className="flex gap-3 items-center">
                <li>
                    <Link href='https://github.com/Cris-Morales'>
                        <Image
                            src="/github.svg"
                            alt="Cristian's Github Profile Link"
                            width={40}
                            height={40}
                        />
                    </Link>
                </li>
                <li>
                    <Link href='https://www.linkedin.com/in/Cris-Morales/'>
                        <Image
                            src="/linkedIn.svg"
                            alt="Cristian's LinkedIn Profile Link"
                            width={40}
                            height={34}
                        />
                    </Link>
                </li>
                <li>
                    <Link href='mailto:CrisMorales@protonmail.com'>
                        <Image
                            src="/email.svg"
                            alt="Cristian's Buisness Email"
                            width={37}
                            height={34}
                        />
                    </Link>
                </li>
            </ul>
            <div className=" grid content-center text-center">
                <Link href='/CristianMorales-Resume.pdf' download className=" text-primary font-bold text-base text-center content-center">
                    View Resume
                </Link>
            </div>
        </header>
    )
}


