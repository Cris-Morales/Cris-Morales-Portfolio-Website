'use client';

import { sendEmail, formState } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function ContactButton({ status }: { status: string }) {
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
        </>
    )
}