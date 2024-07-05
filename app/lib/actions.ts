'use server';

import { Resend } from 'resend';
import { z } from 'zod';
import * as sanitizeHtml from "sanitize-html";
import { EmailTemplate } from './EmailTemplate';
import React from 'react';
export type formState = {
    message: null | string,
    errors: {
        name?: string[] | undefined,
        email?: string[] | undefined,
        subject?: string[] | undefined,
        message?: string[] | undefined
    } | null,
    fieldValues: {
        name: null | string,
        email: null | string,
        subject: null | string,
        message: null | string
    }
};

const FormSchema = z.object({
    name: z.string().min(1, { message: 'Name is required.' }).max(50, { message: 'Name must be 50 characters or less.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    subject: z.string().min(1, { message: 'Subject is required.' }).max(100, { message: 'Subject must be 100 characters or less.' }),
    message: z.string().min(1, { message: 'Message is required.' }).max(1000, { message: 'Message must be 1000 characters or less.' }),
});


const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendEmail(prevState: formState, formData: FormData): Promise<formState> {


    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    })


    if (!validatedFields.success) {

        console.log('here')
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'There were errors with your submission. Please correct them and try again.',
            fieldValues: {
                name: null,
                email: null,
                subject: null,
                message: null
            }
        };
    }

    const sanitizedData: any = {
        name: sanitizeHtml.default(validatedFields.data.name),
        email: sanitizeHtml.default(validatedFields.data.email),
        subject: sanitizeHtml.default(validatedFields.data.subject),
        message: sanitizeHtml.default(validatedFields.data.message),
    };


    try {
        const { data, error } = await resend.emails.send({
            from: `Portfolio Contact Form <PortfolioContact@resend.dev>`,
            to: 'crismorales@protonmail.com',
            subject: `${sanitizedData.subject} - ${sanitizedData.name}`,
            reply_to: sanitizedData.email,
            react: React.createElement(EmailTemplate, { senderName: sanitizedData.name, senderEmail: sanitizedData.email, senderMessage: sanitizedData.message, senderSubject: sanitizedData.subject })
        });

        console.log('Successfully sent email: ', data);

        if (error) {
            throw error
        };

        return {
            message: 'success',
            errors: null,
            fieldValues: {
                name: null,
                email: null,
                subject: null,
                message: null
            }
        };

    } catch (error) {
        console.error(`Error in Send Email Server Action: ${error}`);
        return {
            message: `${error}`,
            errors: null,
            fieldValues: {
                name: null,
                email: null,
                subject: null,
                message: null
            }
        }
    }
}