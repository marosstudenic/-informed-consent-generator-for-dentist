"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { DataTable } from "./components/dataTable";
import { columns } from "./components/columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PacientsPage() {
    const consents = useQuery(api.consents.getConsents);

    return (
        <div className="container pt-10">
            <div className="flex justify-between items-center mb-4">
                <h1>Moje informované súhlasy</h1>
            </div>

            {consents &&
                <DataTable columns={columns} data={consents} />
            }
        </div>
    )
}

