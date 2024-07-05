import React from 'react';
import {
    Html,
    Body,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components";
import { Tailwind } from '@react-email/tailwind';
interface EmailTemplateProps {
    senderName: string;
    senderEmail: string;
    senderMessage: string;
    senderSubject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    senderName, senderEmail, senderMessage, senderSubject
}) => (
    <Html>
        <Preview >New message from your portfolio sites</Preview>
        <Tailwind>
            <Body >
                <Container >
                    <Section>
                        <Heading>You received the following message from the contact form</Heading>
                        <Text className='font-bold text-xl'>Subject: {senderSubject}</Text>
                        <Text>Message: <br />{senderMessage}</Text>
                        <Hr />
                        <Text>- {senderName} at {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);
