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
                    console.log(entry.target.id, entry.intersectionRatio)
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
        <nav className="hidden md:m-nav md:flex md:flex-col md:fixed md:h-screen md:justify-center">
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
                            Message Me
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}


