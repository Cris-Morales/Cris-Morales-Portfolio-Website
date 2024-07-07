import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <section id='contact' className="min-h-contact max-h-fit flex flex-col items-center md:scroll-m-20 w-full">
            <h3 className='text-primary text-3xl mb-4'>
                Contact Me
            </h3>
            <ContactForm />
        </section>
    )
}


