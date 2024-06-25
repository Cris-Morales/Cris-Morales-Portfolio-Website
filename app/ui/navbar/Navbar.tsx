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
            el === activeLink ? el?.classList.add('active') : el?.classList.remove('active');
        })
    }, [active])


    return (
        <nav className="hidden 2xl:flex 2xl:flex-col 2xl:fixed 2xl:h-screen 2xl:justify-center z-10">
            <ul className="flex flex-col h-nav justify-between top-nav p-1">
                <li>
                    <a className='text-primary bg-slate-700 flex items-center active' href='#home'>
                        <div className="navLine" />
                        <span className="">
                            Home
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#about' className='text-primary bg-slate-700 flex items-center' >
                        <div className="navLine" />
                        <span className="">
                            About Me
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#experience' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">
                            Experience
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#projects' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">
                            Projects
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#contact' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">
                            Contact Me
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}


