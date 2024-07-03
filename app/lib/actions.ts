'use server'

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
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string(),
    message: z.string(),
});



export async function sendEmail(prevState: State, formData: FormData) {

    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    });

    console.log(validatedFields);

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Send Contact Message.',
        };
    };

    try {

    } catch (error) {

        console.error(`Error in Contact Form Email Server Action: ${error}`);
        return {
            message: 'Contact Error: Failed to Send Message to Cristian'
        }
    }

    return
}