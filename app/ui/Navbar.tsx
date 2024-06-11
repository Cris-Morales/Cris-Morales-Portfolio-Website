'use client'
import Image from "next/image"

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li>
                    <a className='active' href='#home'>
                        <span className="" />
                        <span className="">
                            Home
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#about'>
                        <span className="" />
                        <span className="">
                            About Me
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#experience'>
                        <span className="" />
                        <span className="">
                            Experience
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#projects'>
                        <span className="" />
                        <span className="">
                            Projects
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#contact'>
                        <span className="" />
                        <span className="">
                            Message Me
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}


