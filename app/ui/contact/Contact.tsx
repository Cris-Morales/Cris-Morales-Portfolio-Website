export default function Contact() {


    // controlled formed
    // follow nextJs's docs on using forms with loading states
    // have both loading, success, error components for this
    // on filled input the boxGlow effect is added

    return (
        <section id='contact' className="max-h-fit flex flex-col items-center md:scroll-m-20 w-full my-10">
            <h3 className='text-primary text-3xl mb-4'>
                Contact Me
            </h3>
            <form className=" border-2 border-primary boxGlow  rounded-3xl flex flex-col justify-center items-center p-5 w-5/6 xl:w-1/2">
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
                <textarea className="rounded-md bg-background bg-opacity-75 border-2 border-primary py-2 px-4 mb-4 text-wrap w-3/4 max-h-fit min-h-56" />
                <button className=" text-background text-xl font-bold iconGlow bg-primary w-3/4 rounded-xl my-2">Submit</button>
            </form>
        </section>
    )
}


