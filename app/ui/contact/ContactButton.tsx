'use client';

import { useFormStatus } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function ContactButton({ status, serverError }: { status: string | null, serverError: string | undefined }) {
    const { pending } = useFormStatus();
    return (
        <>
            < button type="submit" disabled={pending} className=" text-background text-xl font-bold iconGlow bg-primary w-3/4 rounded-xl my-2" onClick={() => console.log('pending', pending)}>
                {/* normal, or when there are left out inputs, if they tried postman or something there sound be a message to their console anyway */}
                {pending ? <div className='grid content-center'>
                    <span className='sr-only'>Loading...</span>
                    <div className='flex justify-center items-center h-8 gap-2'>
                        <div className='h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.3s]' />
                        <div className='h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.15s]' />
                        <div className='h-2 w-2 bg-background rounded-full animate-bounce' />
                    </div>
                </div> : <span>Send</span>}

            </button>
            {(status === 'success') && <span className="text-base success text-center">
                Success! <br /> We'll be in touch soon! :)
            </span>}
            {serverError && <span className="text-base text-center text-error text-wrap">
                {serverError}
                <br />
                Or you can send me a message directly at <a className='iconGlow text-primary' href='mailto:CrisMorales@protonmail.com'>CrisMorales@protonmail.com</a>
            </span>}
        </>
    )
}