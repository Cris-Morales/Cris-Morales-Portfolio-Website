'use client';

import { sendEmail, formState } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';
import ContactButton from './ContactButton';

export default function ContactForm() {
    const initialState: formState = {
        status: null,
        errors: null,
        fieldValues: {
            name: null,
            email: null,
            subject: null,
            message: null
        }
    };

    const [formState, dispatch] = useFormState(sendEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (formState.status === "success") {
            formRef.current?.reset();
        }
    }, [formState]);

    return (
        <form ref={formRef} action={dispatch} className="border-2 border-primary boxGlow rounded-3xl flex flex-col justify-center items-center p-5 xl:px-5 xl:py-5 w-5/6 xl:w-1/3">
            <label className="mb-1 text-base">
                Name
            </label>
            <input maxLength={50} type="text" id="name" name="name" className={`rounded-lg bg-background bg-opacity-35 border-2 py-1 px-2 mb-2 w-3/4 border-primary`} onChange={(event) => {
                event.target.value.length != 0 ? event.target.classList.add('inputGlow') : event.target.classList.remove('inputGlow');
                if (formState.errors?.name) {
                    event.target.classList.remove('border-error');
                    event.target.classList.remove('inputError');
                    event.target.classList.add('border-primary');
                };
            }} />
            {formState.errors?.name && <span className='text-error -mt-2 mb-2'>{formState.errors.name}</span>}
            <label className="mb-1 text-base">
                Email
            </label>
            <input type='email' id="email" name='email' className="rounded-lg bg-background bg-opacity-35 border-2 border-primary py-1 px-2 mb-4 w-3/4" onChange={(event) => {
                event.target.value.length != 0 ? event.target.classList.add('inputGlow') : event.target.classList.remove('inputGlow');
            }} />
            {formState.errors?.email && <span className='text-error -mt-4 mb-2'>{formState.errors.email}</span>}
            <label className="mb-1 text-base" >
                Subject
            </label>
            <input maxLength={100} type="text" id='subject' name="subject" className="rounded-lg bg-background bg-opacity-35 border-2 border-primary py-1 px-2 mb-4 w-3/4" onChange={(event) => {
                event.target.value.length != 0 ? event.target.classList.add('inputGlow') : event.target.classList.remove('inputGlow');
            }} />
            {formState.errors?.subject && <span className='-mt-4 text-error mb-2'>{formState.errors.subject}</span>}
            <label className="mb-1 text-base">
                Message
            </label>
            <textarea maxLength={1000} id='message' name="message" className="rounded-lg bg-background bg-opacity-35 border-2 border-primary py-2 px-2 mb-4 text-wrap w-3/4 max-h-fit min-h-40" onChange={(event) => {
                event.target.value.length != 0 ? event.target.classList.add('inputGlow') : event.target.classList.remove('inputGlow');
            }} />
            {formState.errors?.message && <span className='-mt-4 text-error mb-2'>{formState.errors.message}</span>}
            <ContactButton status={formState.status} serverError={formState.errors?.server} />
        </form>)
}