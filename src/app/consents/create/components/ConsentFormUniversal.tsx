"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAction, useMutation, useQuery } from "convex/react"
import { Dispatch, SetStateAction, useRef, useState } from "react"
import { api } from "../../../../../convex/_generated/api"
import { useRouter, useSearchParams } from "next/navigation"
import { Id } from "../../../../../convex/_generated/dataModel"
import { set } from "zod";


const TREATMENT_TYPES = {
    CAVITY: "cavity",
    OTHER: "other",
}

export const TREATMENT_TYPES_LABELS = [
    { value: TREATMENT_TYPES.CAVITY, label: 'Zubný kaz' },
    // { value: 'whitening', label: 'Belenie zubov' },
    // { value: 'extraction', label: 'Vytrhnutie zubu' },
    // { value: 'implant', label: 'Implantát' },
    // { value: 'braces', label: 'Oprava zubov' },
    // { value: 'root', label: 'Liečba zubného nervu' },
    // { value: 'denture', label: 'Náhrada zubov' },
    // { value: 'cleaning', label: 'Čistenie zubov' },
    { value: TREATMENT_TYPES.OTHER, label: 'Iné' },
]

export const getTreatmentTypeLabel = (type: string) => {
    const label = TREATMENT_TYPES_LABELS.find((item) => item.value === type)
    return label ? label.label : type
}



const INPUT_TYPES = {
    RADIO: "radio",
    MULTIPLE: "multiple",
}



export const TREATMENT_OPTIONS = {
    WITH_ANESTHESIA: "withAnesthesia",
    WITHOUT_ANESTHESIA: "withoutAnesthesia",
    FOTOKOMPOZIT: "fotokompozit",
    AMALGAM: "amalgam",
    SKLOIONOMER: "skloionomer",
    KOFERDAM: "koferdam",
}

const CAVITY_FORM = [
    {
        label: 'Anestézia', name: 'anesthesia', multiple: false, options: [{
            label: 'S anestéziou', value: TREATMENT_OPTIONS.WITH_ANESTHESIA
        },
        {
            label: 'Bez anestézie', value: TREATMENT_OPTIONS.WITHOUT_ANESTHESIA
        }
        ]
    },
    {
        label: "Výplň", name: "filling", multiple: true, options: [
            { label: 'Fotokompozit', value: TREATMENT_OPTIONS.FOTOKOMPOZIT },
            { label: 'Amalgam', value: TREATMENT_OPTIONS.AMALGAM },
            { label: 'Skloionomer', value: TREATMENT_OPTIONS.SKLOIONOMER },
            { label: 'Koferdam', value: TREATMENT_OPTIONS.KOFERDAM },
        ]
    }
]


const toggleOption = (option: string, options: string[], setOptions: Dispatch<SetStateAction<string[]>>) => {
    if (options.includes(option)) {
        setOptions(options.filter((item) => item !== option))
    } else {
        setOptions([...options, option])
    }
}

const toggleRadio = (option: string, radioOptions: { label: string, value: string }[], options: string[], setOptions: Dispatch<SetStateAction<string[]>>) => {
    // remove options that are in radioOptions
    let newOptions = options.filter((item) => !radioOptions.map((option) => option.value).includes(item))
    newOptions.push(option)
    setOptions(newOptions)
}


const CavityForm = () => {
    const params = useSearchParams();
    const patientId = params.get("patientId") as Id<"patients">;
    const [isGenerating, setIsGenerating] = useState(false);

    const patient = useQuery(api.patients.getPatient, { id: patientId });

    const [options, setOptions] = useState([] as string[]);
    const createConsent = useAction(api.handleCreateConsent.handleCreateConsent);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const handleSubmit = async () => {
        setIsGenerating(true);
        if (!formRef.current) {
            console.error("Form not found");
            return;
        };
        if (!patient) {
            console.error("Patient not found");
            return;
        }

        const consentId = await createConsent({
            type: TREATMENT_TYPES.CAVITY,
            options,
            tooth: formRef.current.tooth.value,
            name: patient.name,
            birthdate: patient.birthdate,
        })
        setIsGenerating(false);
        // router.replace(`/consents/preview/cavity/${consentId}`)
        router.replace(`/consents/list`)
    }

    return (
        <form ref={formRef}>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="tooth">Zub</Label>
                <Input type="text" id="tooth" placeholder="" />
            </div>
            {CAVITY_FORM.map((input) => (
                <div className="mb-4" key={input.name}>
                    <h3 className="mb-2">{input.label}</h3>
                    <div className="flex gap-4">
                        {input.options.map((option) => (
                            <Button variant={options.includes(option.value) ? "default" : "outline"} key={option.value} onClick={() => { input.multiple ? toggleOption(option.value, options, setOptions) : toggleRadio(option.value, input.options, options, setOptions) }} type="button">{option.label}</Button>
                        ))}
                    </div>
                </div>
            ))}
            <Button variant="default" className="mt-10" onClick={
                () => handleSubmit()
            } type="button"

            >{isGenerating ? "Generujem..." : "Vytvoriť súhlas"}</Button>
        </form>
    )
}


const forms = {
    cavity: <CavityForm />,
}

const GetFormByType = (type: string) => {
    switch (type) {
        case TREATMENT_TYPES.CAVITY:
            return <CavityForm />
        default:
            return null
    }
}

export function ConsentFormUniversal() {
    const [selectedOption, setSelectedOption] = useState(TREATMENT_TYPES_LABELS[0].value);
    return (
        <div className="pt-10">
            <h2 className="text-lg mb-4">Typ ošetrenia</h2>
            <div className="flex gap-4 mb-8">
                {TREATMENT_TYPES_LABELS.map((option) => (
                    <Button variant={option.value === selectedOption ? "default" : "outline"} key={option.value} onClick={() => setSelectedOption(option.value)} type="button">{option.label}</Button>))
                }
            </div>

            {GetFormByType(selectedOption)}

        </div>
    );
}