import { PatientForm } from './PatientForm';

async function Page() {
    return (
        <div className='pt-10 container'>
            <h1 className='text-lg mb-8'>Pridať nového pacienta</h1>
            <PatientForm />
        </div>
    )
}

export default Page;