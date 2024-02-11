"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Doc } from "../../../../../convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Doc<"patients">>[] = [
    {
        accessorKey: "name",
        header: "Meno",
    },
    {
        accessorKey: "birthdate",
        header: "Dátum narodenia",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const patient = row.original

            return (
                <div className="flex justify-end">

                    <Button asChild>
                        <Link href={`/consents/create?patientId=${patient._id}`}>Vytvoriť súhlas</Link>
                    </Button>
                </div>

            )
        },
    },
]
