'use client';

import { sendEmail } from '@/app/lib/actions';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function ContactForm() {
    const initialState: any = { name: null, email: null, subject: null, message: null };
    const [state, dispatch] = useFormState(sendEmail, initialState);


    return (


        <form action={dispatch} className="border-2 border-primary boxGlow rounded-3xl flex flex-col justify-center items-center p-5 xl:px-5 xl:py-5 w-5/6 xl:w-1/3">
            <label className="mb-2 text-base">
                Name
            </label>
            <input required maxLength={50} type="text" id="name" name="name" className="rounded-md bg-background bg-opacity-35 border-2 border-primary py-1 px-2 mb-2 w-3/4" />
            <label className="mb-2 text-base">
                Email
            </label>
            <input required type='email' id="email" name='email' className="rounded-md bg-background bg-opacity-35 border-2 border-primary py-1 px-2 mb-4 w-3/4" />
            <label className="mb-2 text-base">
                Subject
            </label>
            <input required maxLength={100} type="text" id='subject' name="subject" className="rounded-md bg-background bg-opacity-35 border-2 border-primary py-1 px-2 mb-4 w-3/4" />
            <label className="mb-2 text-base">
                Message
            </label>
            <textarea required maxLength={1000} id='message' name="message" className="rounded-md bg-background bg-opacity-35 border-2 border-primary py-2 px-2 mb-4 text-wrap w-3/4 max-h-fit min-h-40" />
            <button type="submit" className=" text-background text-xl font-bold iconGlow bg-primary w-3/4 rounded-xl my-2" >Submit</button>
        </form>)
}