"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Doc } from "../../../../../convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getTreatmentTypeLabel } from "../../create/components/ConsentFormUniversal"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Doc<"consents">>[] = [
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

            // TODO, podla typu zakroku zobrazit iny link
            return (
                <div className="flex justify-end">
                    <Button asChild>
                        <Link href={`/consents/preview/cavity/${consent._id}`}>Zobrazit</Link>
                    </Button>
                </div>
            )
        },
    },
]
