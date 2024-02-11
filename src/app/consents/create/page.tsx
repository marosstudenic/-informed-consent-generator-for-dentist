"use client"

import { useQuery } from "convex/react";
import { useSearchParams } from "next/navigation"
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { ConsentFormUniversal } from "./components/ConsentFormUniversal";

export default function Page() {

    const params = useSearchParams();
    const patientId = params.get("patientId") as Id<"patients">;

    const patient = useQuery(api.patients.getPatient, { id: patientId });

    return (
        <div className="container py-4">

            <h1 className="text-2xl mb-4">Vytvoriť súhlas</h1>

            {patient &&
                <div className="flex gap-4">
                    <h2>Meno: {patient.name}</h2>
                    <p>Dátum narodenia: {patient.birthdate}</p>
                </div>
            }

            <ConsentFormUniversal />
        </div>
    )
}

