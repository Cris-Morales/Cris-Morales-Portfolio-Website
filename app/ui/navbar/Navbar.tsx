'use client'
import Link from "next/link"

export default function Navbar() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    };

    return (
        <nav className="flex flex-col justify-center fixed">
            <ul>
                <li>
                    <Link className='bg-slate-700 active' href='#home' onClick={handleScroll}>
                        <span className="" />
                        <span className="">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#about' className='bg-slate-700' onClick={handleScroll}>
                        <span className="" />
                        <span className="">
                            About Me
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#experience' className='bg-slate-700' onClick={handleScroll}>
                        <span className="" />
                        <span className="">
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#projects' className='bg-slate-700' onClick={handleScroll}>
                        <span className="" />
                        <span className="">
                            Projects
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#contact' className='bg-slate-700' onClick={handleScroll}>
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


