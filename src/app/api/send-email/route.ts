import { string } from 'zod';
import EmailTemplate from '../../../components/email/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {


    const reqData = await req.json();
    const { fileConsentLink, patientEmail, patientName } = reqData as { fileConsentLink: string, patientEmail: string, patientName: string };

    console.log(fileConsentLink, patientEmail, patientName, "reqData")

    try {
        const data = await resend.emails.send({
            from: 'Dentihelp <hello@fullstack-developer.sk>',
            to: [patientEmail],
            subject: 'Informovaný súhlas k zákroku',
            react: EmailTemplate({ name: patientName }),
            attachments: [
                {
                    "filename": "informovany-suhlas.pdf",
                    "path": fileConsentLink
                }
            ]
        });

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ message: error, status: 500 });
    }
}