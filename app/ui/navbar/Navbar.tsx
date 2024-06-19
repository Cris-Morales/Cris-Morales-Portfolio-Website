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
            <ul className="flex flex-col h-nav justify-between top-nav p-1">
                <li>
                    <Link className='text-primary bg-slate-700 flex items-center active' href='#home'>
                        <div className="navLine" />
                        <span className="">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#about' className='text-primary bg-slate-700 flex items-center' >
                        <div className="navLine" />
                        <span className="">
                            About Me
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#experience' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#projects' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">
                            Projects
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#contact' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">
                            Message Me
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


