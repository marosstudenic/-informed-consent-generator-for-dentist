import { Alert } from "flowbite-react";
import Image from "next/image";



export default function Home() {


  return (
    <>
      <main className='container'>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Zjednodušte proces informovaných súhlasov s DentiHelp
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Bezproblémové riešenie pre zubárov na vytváranie prispôsobených informovaných súhlasov.</p>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:opacity-85 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Vytvoriť účet
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Dohodnite si prezentáciu
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
              <Image className="h-80 w-40 object-contain rounded-lg" src="/logo/business_13558469.png" alt="office content 1" width="100" height="100" />

            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Informujte pacienta o procedúre a chránte svoju ambulanciu</h2>
              <p className="mb-4">V DentiHelp vieme, že proces informovaného súhlasu môže byť zložitý - nielen pre pacientov, ale aj pre zubárov. Naša platforma ponúka intuitívne riešenie na generovanie personalizovaných súhlasov, ktoré jasne komunikujú dôležité informácie o zákrokoch, rizikách a možnostiach starostlivosti.</p>

              <p>S DentiHelp, môžete:</p>
            </div>

            <ul className="lg:grid lg:grid-cols-2">
              {/* Vytvárať a spravovať súhlasy online s niekoľkými kliknutiami.
Zabezpečiť, že pacienti sú plne informovaní o svojich zákrokoch s prispôsobiteľnými šablónami.
Ušetriť čas a zdroje vďaka automatizovanému procesu, ktorý eliminuje potrebu papierovania.
Zvýšiť dôveru a spokojnosť pacientov transparentnou a pochopiteľnou komunikáciou. */}

              <li className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-700">
                    <svg className="w-6 h-6 text-primary-500 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Vytvárať a spravovať súhlasy online s niekoľkými kliknutiami.</h3>
                  <p className="text-gray-500 dark:text-gray-400">Vytvorte súhlas s niekoľkými kliknutiami a spravujte ho z jedného miesta.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-700">
                    <svg className="w-6 h-6 text-primary-500 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Zabezpečiť, že pacienti sú plne informovaní o svojich zákrokoch s prispôsobiteľnými šablónami.</h3>
                  <p className="text-gray-500 dark:text-gray-400">Použite naše šablóny na vytvorenie súhlasu, ktorý je prispôsobený potrebám pacienta.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-700">
                    <svg className="w-6 h-6 text-primary-500 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Ušetriť čas a zdroje vďaka automatizovanému procesu, ktorý eliminuje potrebu papierovania.</h3>
                  <p className="text-gray-500 dark:text-gray-400">Nemusíte sa starať o papierovanie, všetko je online a automatické.</p>
                </div>
              </li>

              <li className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-700">
                    <svg className="w-6 h-6 text-primary-500 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Zvýšiť dôveru a spokojnosť pacientov transparentnou a pochopiteľnou komunikáciou.</h3>
                  <p className="text-gray-500 dark:text-gray-400">Pacienti budú mať jasno v tom, čo ich čaká a budú sa cítiť bezpečne.</p>
                </div>
              </li>

            </ul>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {/* <Image className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" /> */}
              {/* <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
            </div>
          </div>
        </section>

      </main >
    </>
  );
}
