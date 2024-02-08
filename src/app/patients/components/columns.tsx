"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Doc } from "../../../../convex/_generated/dataModel"

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
        accessorKey: "surname",
        header: "Priezvisko",
    },
    {
        accessorKey: "birthdate",
        header: "Dátum narodenia",
    },
]
