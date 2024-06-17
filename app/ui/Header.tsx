import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return (
        <header className="flex justify-between fixed w-screen h-header">
            <ul className="flex">
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
            <div>
                <Link href='/CristianMorales-Resume.pdf' download>
                    View Resume
                </Link>
            </div>
        </header>
    )
}


