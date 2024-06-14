import Image from "next/image"

export default function Header() {

    return (
        <header>
            <ul>
                <li>
                    <a href='https://github.com/Cris-Morales'>
                        <Image
                            src="/github.svg"
                            alt="Cristian's Github Profile Link"
                            width={40}
                            height={40}
                        />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/Cris-Morales/'>
                        <Image
                            src="/linkedIn.svg"
                            alt="Cristian's LinkedIn Profile Link"
                            width={40}
                            height={34}
                        />
                    </a>
                </li>
                <li>
                    <a href='mailto:CrisMorales@protonmail.com'>
                        <Image
                            src="/email.svg"
                            alt="Cristian's Buisness Email"
                            width={37}
                            height={34}
                        />
                    </a>
                </li>
            </ul>
            <div>
                <a href='/CristianMorales-Resume.pdf' download>
                    View Resume
                </a>
            </div>
        </header>
    )
}


