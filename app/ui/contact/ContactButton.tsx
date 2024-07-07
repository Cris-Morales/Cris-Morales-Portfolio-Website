'use client';

import { useFormStatus } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function ContactButton({ status, serverError }: { status: string | null, serverError: string | undefined }) {
    const { pending } = useFormStatus();
    return (
        <>
            < button type="submit" disabled={pending} className=" text-background text-xl flex justify-center items-center font-bold iconGlow bg-primary w-3/4 rounded-xl my-2 h-8">
                <AnimatePresence>
                    {pending ?
                        <motion.div
                            className='flex justify-center items-center'
                            initial={{
                                width: 0,
                                opacity: 0,
                            }}
                            animate={{
                                width: 'auto',
                                opacity: 1,
                            }}
                            exit={{
                                width: 0,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1
                            }}
                        >
                            <span className='sr-only'>Loading...</span>
                            <div className='flex justify-center items-center h-8 gap-2'>
                                <div className='h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.3s]' />
                                <div className='h-2 w-2 bg-background rounded-full animate-bounce [animation-delay:-0.15s]' />
                                <div className='h-2 w-2 bg-background rounded-full animate-bounce' />
                            </div>
                        </motion.div> :
                        <motion.span
                            initial={{
                                width: 'auto',
                            }}
                            animate={{
                                width: 'auto',
                            }}
                            exit={{
                                width: 0,
                            }}
                        >
                            Send
                        </motion.span>
                    }
                </AnimatePresence>
            </button>
            <AnimatePresence>
                {(status === 'success') &&
                    <motion.span
                        className="text-base success text-center"
                        initial={{
                            opacity: 0,
                            height: 0
                        }}
                        animate={{
                            opacity: 1,
                            height: 'auto'
                        }}
                        exit={{
                            opacity: 0,
                            height: 'auto'
                        }}
                    >
                        Success! <br /> We'll be in touch soon! :)
                    </motion.span>}
                {serverError &&
                    <motion.span
                        className="text-base text-center text-error text-wrap"
                        initial={{
                            opacity: 0,
                            height: 0
                        }}
                        animate={{
                            opacity: 1,
                            height: 'auto'
                        }}
                        exit={{
                            opacity: 0,
                            height: 'auto'
                        }}
                    >
                        {serverError}
                        <br />
                        Or you can send me a message directly at <a className='iconGlow text-primary' href='mailto:CrisMorales@protonmail.com'>CrisMorales@protonmail.com</a>
                    </motion.span>}
            </AnimatePresence>
        </>
    )
}