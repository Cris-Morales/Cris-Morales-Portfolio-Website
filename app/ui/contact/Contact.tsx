export default function Contact() {


    // controlled formed
    // follow nextJs's docs on using forms with loading states
    // have both loading, success, error components for this

    return (
        <section id='contact' className="max-h-fit min-h-screen flex flex-col items-center md:scroll-m-20 mt-10 w-full">
            <h3 className='text-primary text-3xl mb-4 mt-10'>
                Contact Me
            </h3>
            <form className=" border-2 border-primary boxGlow w-5/6 rounded-3xl flex flex-col justify-center items-center p-5">
                <label className="mb-2 text-xl">
                    Name
                </label>
                <input className="rounded-md bg-background bg-opacity-75 border-2 border-primary py-1 px-2 mb-2 w-3/4" />
                <label className="mb-2 text-xl">
                    Email
                </label>
                <input type='email' className="rounded-md bg-background bg-opacity-75 border-2 border-primary py-1 px-2 mb-4 w-3/4" />
                <label className="mb-2 text-xl">
                    Subject
                </label>
                <input className="rounded-md bg-background bg-opacity-75 border-2 border-primary py-1 px-2 mb-4 w-3/4" />
                <label className="mb-2 text-xl">
                    Message
                </label>
                <textarea className="rounded-md bg-background bg-opacity-75 border-2 border-primary py-2 px-4 mb-4 text-wrap w-3/4 min-h-56" />
                <button className=" text-background text-xl font-bold iconGlow bg-primary w-3/4 rounded-xl my-2">Submit</button>
            </form>
        </section>
    )
}


