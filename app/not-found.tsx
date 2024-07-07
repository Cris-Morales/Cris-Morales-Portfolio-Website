import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='p-content md:flex z-30 flex flex-col justify-center items-center h-screen w-screen text-lg'>
            <h2 className='font-bold text-4xl'>404</h2>
            <h3 className=''>Page Not Found</h3>
            <Link className='text-xl text-primary font-bold textGlow my-4' href="/">Return Home</Link>
        </div>
    )
}