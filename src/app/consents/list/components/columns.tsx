"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Doc, Id } from "../../../../../convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import { getTreatmentTypeLabel } from "../../create/components/ConsentFormUniversal"
export const getStorageLink = ({ fileId }: { fileId: string }) => {
    return `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}${fileId}`
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const getColums = (handleSendEmail: ({ name, email, consent, consentId }: { name: string, email: string, consent: string, consentId: string }) => any, isSendingEmail: boolean): ColumnDef<Doc<"consents">>[] => {
    return [
        {
            accessorKey: "name",
            header: "Meno",
        },
        {
            accessorKey: "_creationTime",
            header: "Dátum vytvorenia",
            cell: ({ row }) => {
                const consent = row.original
                return <span>{new Date(consent._creationTime).toLocaleDateString('sk')}</span>
            }
        },
        {
            accessorKey: "type",
            header: "Typ zákroku",
            cell: ({ row }) => {
                const consent = row.original
                return <span>{getTreatmentTypeLabel(consent.type)}</span>
            }
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const consent = row.original

                const isConsentGenerated = consent.pdfId !== undefined;
                const consentLink = consent.pdfId ? getStorageLink({ fileId: consent.pdfId }) : "";

                let textEmail = "Poslať na email";
                if (isSendingEmail) {
                    textEmail = "Odosielam email";
                }

                if (consent.emailSent) {
                    textEmail = `Odoslané na email ${new Date(consent.emailSent).toLocaleDateString('sk')}`;
                }

                // TODO, podla typu zakroku zobrazit iny link
                return (
                    <div className="flex justify-end gap-4">
                        <Button asChild disabled={!isConsentGenerated}>
                            <a target="__blank" href={consentLink}>{!isConsentGenerated ? "Generujem" : "Zobraziť"}</a>
                        </Button>

                        <Button disabled={consent.pdfId === undefined} onClick={() => handleSendEmail({ name: consent.name, email: consent.email, consent: consentLink, consentId: consent._id })}>
                            {textEmail}
                        </Button>
                    </div>
                )
            },
        },
    ]
}
