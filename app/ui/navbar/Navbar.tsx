import Link from "next/link"
import { useEffect, useState } from "react"

const navDict: any = {
    'hero': '#home',
    'about': '#about',
    'experience': '#experience',
    'projects': '#projects',
    'talks': '#projects',
    'contact': '#contact'
}

export default function Navbar() {
    const [active, setActive] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            })
        });
        const sections = document.querySelectorAll('section');
        sections.forEach((el) => observer.observe(el));
    }, []);


    useEffect(() => {
        const navLinks = document.querySelectorAll(`nav ul li a`);
        const activeLink = document.querySelector(`a[href="${navDict[active]}"]`);
        navLinks.forEach((el: Element | null) => {
            el == activeLink ? el?.classList.add('active') : el?.classList.remove('active');
        })
    }, [active])

    return (
        <nav className="hidden md:m-nav md:flex md:flex-col md:fixed md:h-screen md:justify-center">
            <ul className="md:flex md:flex-col md:h-nav md:justify-between md:top-nav md:p-1">
                <li>
                    <Link className='bg-slate-700 active' href='#home'>
                        <span className="" />
                        <span className="text-primary">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#about' className='text-primary' >
                        <span className="" />
                        <span className="">
                            About Me
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#experience' className='text-primary'>
                        <span className="" />
                        <span className="">
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#projects' className='text-primary'>
                        <span className="" />
                        <span className="">
                            Projects
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#contact' className='text-primary'>
                        <span className="" />
                        <span className="">
                            Message Me
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


