export function Page() {
    return (
        <div className='pt-10 container min-h-[80vh]'>
            <h1 className='text-lg mb-8'>Pridať nového pacienta</h1>
            <PatientForm />
        </div>
    )
}