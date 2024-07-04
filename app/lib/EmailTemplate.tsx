import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, subject, message,
}) => (
    <div>
        <h1 >New Form Submission</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Subject: {subject}</p>
        <p>Message: {message}</p>
    </div>
);
