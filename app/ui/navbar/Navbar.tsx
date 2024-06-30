'use client'

import React, { useEffect, useState, useCallback } from "react";
interface NavDict {
    [key: string]: string;
}

const navDict: NavDict = {
    'hero': '#home',
    'about': '#about',
    'experience': '#experience',
    'projects': '#projects',
    'talks': '#projects',
    'contact': '#contact'
};


export default function Navbar() {

    const [active, setActive] = useState<string>('');

    const handleScroll = useCallback(
        () => {
            const sections = document.querySelectorAll<HTMLElement>('section');
            const viewportHeight = window.innerHeight;

            sections.forEach((section: HTMLElement) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < viewportHeight && rect.bottom >= viewportHeight / 2) {
                    setActive((prevActive) => (prevActive !== section.id ? section.id : prevActive));
                }
            });
        },
        []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section');
        const viewportHeight = window.innerHeight;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < viewportHeight && rect.bottom >= viewportHeight / 2) {
                setActive(section.id);
            }
        });
    }, []);

    useEffect(() => {
        const navLinks = document.querySelectorAll<HTMLElement>(`nav ul li a`);
        const activeLink = document.querySelector<HTMLElement>(`a[href="${navDict[active]}"]`);
        navLinks.forEach((el) => {
            if (el === activeLink) {
                el?.classList.add('active');
            } else {
                el?.classList.remove('active');
            }
        });
    }, [active]);


    return (
        <nav className="hidden 2xl:flex 2xl:flex-col 2xl:fixed 2xl:h-screen 2xl:justify-center z-10">
            <ul className="flex flex-col h-nav justify-between top-nav p-1">
                <li>
                    <a className='text-primary bg-slate-700 flex items-center' href='#home'>
                        <div className="navLine" />
                        <span className="">Home</span>
                    </a>
                </li>
                <li>
                    <a href='#about' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">About Me</span>
                    </a>
                </li>
                <li>
                    <a href='#experience' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">Experience</span>
                    </a>
                </li>
                <li>
                    <a href='#projects' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">Projects</span>
                    </a>
                </li>
                <li>
                    <a href='#contact' className='text-primary bg-slate-700 flex items-center'>
                        <div className="navLine" />
                        <span className="">Contact Me</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
