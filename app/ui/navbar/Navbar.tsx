import Link from "next/link"

export default function Navbar() {

    return (
        <nav className="flex flex-col fixed">
            <ul>
                <li>
                    <Link className='bg-slate-700 active' href='#home'>
                        <span className="" />
                        <span className="">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#about' className='bg-slate-700' >
                        <span className="" />
                        <span className="">
                            About Me
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#experience' className='bg-slate-700'>
                        <span className="" />
                        <span className="">
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#projects' className='bg-slate-700'>
                        <span className="" />
                        <span className="">
                            Projects
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href='#contact' className='bg-slate-700'>
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


