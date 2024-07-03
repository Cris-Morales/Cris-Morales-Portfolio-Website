import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center font-body text-primary z-10 fixed h-screen w-screen grid content-center'>
            <h2>Not Found</h2>
            <p>Could not find requested page</p>
            <Link href="/" className='hover:text-primary'>Return Home</Link>
        </div>
    )
}