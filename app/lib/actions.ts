'use server';

import EmailTemplate from './EmailTemplate';
import { Resend } from 'resend';
import { z } from 'zod'
export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    subject: z.string(),
    message: z.string(),
});


const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendEmail(prevState: State, formData: FormData) {


    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Send Email.',
        };
    }

    try {

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'crismorales@protonmail.com',
            subject: 'Portfolio Contact Form Message',
            text: 'test'
            // react: EmailTemplate(validatedFields.data)
        })

        return {
            message: 'Successfully Sent Email'
        }
    } catch (error) {
        console.error(`Error in Send Email Server Action: ${error}`);
        return {
            message: 'Email Service Error: Failed to Send Email'

        }
    }
}