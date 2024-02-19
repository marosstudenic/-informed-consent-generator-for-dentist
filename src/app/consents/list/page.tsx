"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { DataTable } from "./components/dataTable";
import { getColums } from "./components/columns";
import { Id } from "../../../../convex/_generated/dataModel";
import { useState } from "react";

export default function PacientsPage() {
    const consents = useQuery(api.consents.getConsents);
    const sentEmail = useMutation(api.consents.sendEmail);
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    const handleSendEmail = async ({ name, email, consent, consentId }: { name: string, email: string, consent: string, consentId: string }) => {

        setIsSendingEmail(true);
        console.log("Sending email")
        console.log(name, email, consent);
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ patientEmail: email, patientName: name, fileConsentLink: consent }),
        })

        const data = await response.json();
        console.log(data)
        if (data.data) {
            console.log("Email sent")
            await sentEmail({ consentId: consentId as Id<"consents"> })
        }
        setIsSendingEmail(false);
    }

    const firstConsent = (consents && consents.length > 0) ? [consents[0]] : [];

    return (
        <div className="container pt-10 min-h-[70vh]">
            <h2 className="font-bold mb-2">Posledný zgenerovaný súhlas</h2>
            {consents &&
                <DataTable table={{ columns: getColums(handleSendEmail, isSendingEmail), data: firstConsent }} showPagination={false} />
            }

            <h2 className="font-bold mb-2 mt-4">Všetky súhlasy</h2>
            {consents &&
                <DataTable table={{ columns: getColums(handleSendEmail, isSendingEmail), data: consents }} />
            }
        </div>
    )
}

