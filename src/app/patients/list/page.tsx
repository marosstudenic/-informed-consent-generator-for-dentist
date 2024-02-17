"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { DataTable } from "./components/dataTable";
import { columns } from "./components/columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PacientsPage() {
    const patients = useQuery(api.patients.getPatients);

    return (
        <div className="container pt-10 min-h-[70vh]">
            <div className="flex justify-between items-center mb-4">
                <h1>Moji Pacienti</h1>
                <Button asChild>
                    <Link href="/patients/create">Pridať pacienta</Link>
                </Button>

            </div>

            {patients &&
                <DataTable columns={columns} data={patients} />
            }
        </div>
    )
}

