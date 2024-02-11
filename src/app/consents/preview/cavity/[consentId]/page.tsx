import { useSearchParams } from "next/navigation";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../../convex/_generated/api";
import Image from "next/image";
import { TREATMENT_OPTIONS } from "../../../create/components/ConsentFormUniversal";

export default async function Preview({ params }: { params: { consentId: Id<"consents"> } }) {
    // const params = useSearchParams();
    // const consentId = params.get("consentId") as Id<"consents">;
    console.log(params, "params")
    const consentId = params.consentId;
    console.log(consentId, "consentId");
    const consent = await fetchQuery(api.consents.getConsent, { id: consentId });
    return (
        <div className="container py-4 space-y-4 max-w-3xl">
            <h1 className="font-bold text-2xl text-center">POUČENIE A PÍSOMNÝ INFORMOVANÝ SÚHLAS PACIENTA</h1>
            <h2 className="font-bold text-xl text-center">V ZMYSLE § 6 ZÁKONA Č. 576/2004 z. Z. O ZDRAVOTNEJ STAROSTLIVOSTI</h2>
            <hr className="h-2" />
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-2">
                    <p>Názov PZS</p> <p>:TODO</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>Lekár</p> <p>:TODO</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>Adresa PZS:</p> <p>:TODO</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>Kód lekára</p> <p>:TODO</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>IČO</p> <p>:TODO</p>
                </div>
            </div>
            <hr className="h-2 " />
            <div className="grid grid-cols-1">
                <div className="grid grid-cols-2">
                    <p>Priezvisko a meno pacienta</p> <p>: <b>{consent && consent.name}</b></p>
                </div>
                <div></div>
                <div className="grid grid-cols-2">
                    <p>Dátum narodenia</p> <p>: <b>{consent && consent.birthdate}</b></p>
                </div>
            </div>
            <hr className="h-2" />

            <h2 className="font-bold text-xl text-center">Ošetrenie zubného kazu</h2>
            <div className="flex justify-center my-4">
                <Image src="/consent/cavity.png" alt="consent" width={500} height={500} />
            </div>

            <div className="space-y-4">
                <p>Vážený pacient/vážená pacientka, svojím podpisom na tomto dokumente potvrdíte súhlas s navrhovaným liečebným postupom, jeho priebehom a poučením. </p>
                <p>Dolu podpísaný/á {consent && consent.name} potvrdzujem svojím podpisom, že som bol/a poučený/á o:
                </p>
            </div>

            <div className="space-y-12 mt-12">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-green-600">ÚČELE NAVRHOVANÉHO LIEČEBNÉHO POSTUPU</h2>
                    <p>Účelom ošetrenia je zastavenie progresie zubného kazu a jeho odstránenie s následným nahradením tvrdých zubných tkanív kompozitným výplňovým materiálom.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-green-600">POVAHE A PRIEBEHU NAVRHOVANÉHO LIEČEBNÉHO POSTUPU</h2>
                    <p>Ošetrenie sa realizuje v nasledovných krokoch:</p>
                    <ul className="list-disc list-inside">

                        {/* podanie lokálnej anestézie (voliteľné) {ak neni zakliknuta anesteza}
                    nasadenie kofferdamu (izolačnej blany) pre zabezpečenie suchého pracovného poľa nevyhnutného pre zhotovenie kompozitnej výplne (voliteľné)
                    odstránenie zubného kazu rotačnými a ručnými nástrojmi
                    príprava pracovného poľa pre zhotovenie kompozitnej výplne
                    zhotovenie a úprava kompozitnej výplne
                    inštruktáž po ošetrení */}



                        {consent?.options?.includes(TREATMENT_OPTIONS.WITH_ANESTHESIA) && <li> podanie lokálnej anestézie</li>}
                        {consent?.options?.includes(TREATMENT_OPTIONS.KOFERDAM) && <li> nasadenie kofferdamu (izolačnej blany) pre zabezpečenie suchého pracovného poľa nevyhnutného pre zhotovenie kompozitnej výplne</li>}
                        <li>                    odstránenie zubného kazu rotačnými a ručnými nástrojmi
                        </li>
                        <li> príprava pracovného poľa pre zhotovenie kompozitnej výplne</li>
                        <li>zhotovenie a úprava kompozitnej výplne</li>
                        <li>inštruktáž po ošetrení</li>
                    </ul>

                    <p>Počas zákroku možno pociťovať tlak, vibrácie a počuť subjektívne nepríjemné zvuky. Zákrok môže byť subjektívne bolestivý, lokálnou anestéziou však možno bolesť eliminovať.
                    </p>

                    {consent?.options?.includes(TREATMENT_OPTIONS.KOFERDAM) &&
                        <p> Kofferdam je izolačná blana, ktorá nám zabezpečí suché a čisté pracovné pole. Rovnako po jeho nasadení zabraňuje nadmernému prísunu vody do úst zo zubárskych nástrojov či prípadnému prehltnutiu/vdýchnutiu použitých materiálov pri ošetrení. Prítomnosť kofferdamu však môže u niektorých pacientov vyvolať psychický nepokoj, pocit nedostatku vzduchu a náročnejšieho prehĺtania slín. V každom prípade treba lekára a sestru upozorniť, a tí sa posnažia situáciu vyriešiť.</p>}
                </div>


                <div className="space-y-4 mt-12">
                    <h2 className="text-lg font-bold text-green-600">NÁSLEDKOCH A CIEĽOCH NAVRHOVANÉHO LIEČEBNÉHO POSTUPU
                    </h2>
                    <p>Cieľom ošetrenia je odstránenie zubného kazu a nahradenie chýbajúcich tvrdých zubných tkanív kompozitným výplňovým materiálom. Žiadúcim a očakávaným výsledkom je:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>zmiernenie až odstránenie bolesti</li>
                        <li>prevencia progresie a komplikácií zubného kazu</li>
                        <li>obnovenie štruktúry, funkcie a estetiky zubu</li>
                    </ul>
                    <p>Treba však poznamenať, že zub je živé tkanivo, čiže nemožno s určitosťou predpovedať jeho správanie po ošetrení. V prípade novoobjavených alebo pretrvávajúcich ťažkostí môže vzniknúť potreba ďalšieho ošetrenia.
                    </p>
                </div>

                <div className="space-y-4 mt-12">
                    <h2 className="text-lg font-bold text-green-600">RIZIKÁCH SÚVISIACICH S NAVRHOVANÝM LIEČEBNÝM POSTUPOM
                    </h2>
                    <p>Počas zákroku sa môžu vyskytnúť viaceré komplikácie, ktorým sa lekár snaží predchádzať a vo väčšine prípadov ich vie manažovať. Avšak za istých predvídateľných, no i nepredvídateľných, okolností môžu vzniknúť situácie, ktoré lekár ovplyvniť nevie. Veľa z týchto komplikácií/rizík je zriedkavých a len ťažko možno predpovedať ich rozvoj.
                    </p>
                    <h4 className="font-bold"> Riziká a komplikácie lokálnej anestézie:</h4>
                    <p>Podanie lokálnej anestézie môže byť subjektívne nepríjemným a bolestivým zážitkom. Rovnako môže bolestivosť a opuch v mieste vpichu pretrvávať po odznení anestézie i v nasledujúcich dňoch. Nepríjemné pocity by sa mali časom zmierňovať.
                    </p>



                    {consent?.options?.includes(TREATMENT_OPTIONS.WITH_ANESTHESIA) && <>
                        <p>V súvislosti s lokálnou anestéziou môžu vzniknúť nasledovné lokálne komplikácie:
                        </p>

                        <ul className="list-disc list-inside pl-6" >
                            <li>poškodenie nervu s následnou dočasnou/trvalou zníženou citlivosťou až necitlivosťou v oblasti líca, dolnej pery, brady, jazyka, zubov a ďasien v príslušnej polovici tváre</li>
                            <li>poškodenie nervu s dočasne obmedzenou funkciou svalov tváre, zvyčajne ustúpi po odznení anestézie</li>
                            <li>poranenie cievy s tvorbou hematómu (krvného výronu) s následným opuchom a možnými farebnými zmenami na koži</li>
                            <li>dočasne sťažené a bolestivé otváranie úst v dôsledku poškodenia/zápalu svalu a kosti injekčnou ihlou</li>
                            <li>poškodenie sliznice pier, líc a jazyka pri nekontrolovateľných pohyboch počas účinkovania anestézie (neodporúča sa konzumovať jedlá počas jej účinku, nakoľko je daná oblasť umŕtvená a necítite prípadné zahryznutie do sliznice úst)</li>
                            <li>zalomenie injekčnej ihly s nutnosťou jej odstránenia priamo na pracovisku alebo v spolupráci s maxilofaciálnym pracoviskom</li>
                            <li>prehltnutie/vdýchnutie ihly</li>
                        </ul>

                        <p>V súvislosti s lokálnou anestéziou môžu vzniknúť i komplikácie týkajúce sa celého organizmu, ktoré sa môžu individuálne prejaviť miernym nepokojom až život ohrozujúcimi príznakmi. Patria sem:
                        </p>

                        <ul className="list-disc list-inside pl-6" >
                            <li>celková ťažoba organizmu s potením, nevoľnosťou, nepravidelným dýchaním až krátkou stratou vedomia</li>
                            <li>alergická reakcia na lokálne anestetikum s klinickými prejavmi od mierneho nepokoja, cez vyrážky, po anafylaktický šok a smrť</li>
                            <li>toxická reakcia pri preniknutí lokálneho anestetika do cievneho obehu s klinickými prejavmi zmätenosti, porúch vedomia, dvojitého videnia, srdcovej arytmie až náhlej srdcovej smrti</li>
                        </ul>
                    </>}

                    <h4 className="font-bold"> Riziká a komplikácie ošetrenia zubného kazu a kompozitnej výplne:
                    </h4>
                    <p>Akékoľvek ošetrenie, vrátane ošetrenia zubného kazu, je zdrojom potenciálnym zdrojom možných komplikácii či už počas zákroku, ale aj v pooperačnom období. Lekár sa im svojím prístupom snaží vyhnúť a niektoré komplikácie manažuje už počas zákroku. Niektoré komplikácie vyžadujú opakované RTG snímky, dodatočné ošetrenie či hospitalizáciu na lôžkovom oddelení. Každý pacient je však unikátny a rovnako sa prihliada i ku konkrétnym možným komplikáciám. Ak by Váš stav nasvedčoval tomu, že je u Vás vyššia pravdepodobnosť niektorej komplikácie, lekár Vás na ňu vopred upozorní. <br /> Patria sem riziká a komplikácie:
                    </p>

                    <ul className="list-disc list-inside pl-6">
                        <li>
                            v súvislosti s použitím kofferdamu:
                            <ul className="list-disc list-inside pl-6">
                                <li>alergická reakcia na materiál (zvyčajne latex) s prejavmi od mierneho podráždenia slizníc až po ťažkostí s dýchaním a anafylaktický šok a smrť</li>
                                <li>prehltnutie alebo vdýchnutie súčastí kofferdamu</li>
                                <li>mechanické poškodenie zubov a ďasien v dôsledku použitia kofferdamovej spony</li>
                                <li>pretrvávajúca citlivosť zubných krčkov po ošetrení v dôsledku použitia kofferdamovej spony</li>
                                <li>iritácia mäkkých tkanív ústnej dutiny v kontakte s kofferdamovou sponou a blanou</li>
                            </ul>
                        </li>
                        <li>
                            v súvislosti s odstránením zubného kazu
                            <ul className="list-disc list-inside pl-6">
                                <li>poškodenie zubnej drene teplom a vibráciami s následnou pretrvávajúcou citlivosťou, bolesťou zuba až jeho odumretím</li>
                                <li>prederavenie dreňovej dutiny zuba s následnou nutnosťou ošetrenia dreňovej dutiny a koreňových kanálikov</li>
                                <li>oslabenie mechanických vlastností zuba až jeho zlomenie odstraňovaním zubného kazu s následnou nutnosťou ďalšieho ošetrenia</li>
                                <li>pretrvávajúca citlivosť zubov v dôsledku odhalenia zuboviny pri odstraňovaní zubného kazu</li>
                            </ul>
                        </li>

                        <li>
                            v súvislosti s kompozitnou výplňou
                            <ul className="list-disc list-inside pl-6">
                                <li>alergická reakcia na kompozitný materiál</li>
                                <li>dočasná či pretrvávajúca citlivosť zuba po zhotovení kompozitnej výplne</li>
                                <li>zafarbenie výplne vonkajšími faktormi (káva, čaj, červené víno, fajčenie,...)</li>
                                <li>opotrebovanie kompozitnej výplne časom a nutnosť jej výmeny</li>
                                <li>vznik sekundárneho kazu v mikroštrbinách medzi kompozitnou výplňou a zubom</li>
                                <li>zlomenie časti/celého zuba v dôsledku zmrštenia (kontrakcie) kompozitného materiálu</li>
                            </ul>
                        </li>

                        <li>
                            všeobecne pri ošetrení:
                            <ul className="list-disc list-inside pl-6">
                                <li>alergická reakcia/citlivosť na použité materiály</li>
                                <li>prehltnutie či vdýchnutie použitých materiálov</li>
                                <li>nesúlad medzi farbou kompozitnej výplne a zuba</li>
                                <li>zmeny žuvacej roviny v dôsledku rekonštrukcie zuba</li>
                            </ul>
                        </li>
                    </ul>

                    <h4 className="font-bold">MOŽNOSTIACH VOĽBY
                    </h4>

                    <ul className="list-disc list-inside pl-6">
                        <li>použitie iného výplňového materiálu (kompoméry, SIC, amalgám)</li>
                        <li>náhrada tvrdých zubných tkanív fixnými protetickými náhradami (inlay, onlay, overlay, korunka, fazeta)</li>
                        <li>odložená exkavácia – ošetrenie dočasnou výplňou s nutnosťou následného definitívneho ošetrenia</li>
                        <li>endodontické ošetrenie zuba – ošetrenie koreňových kanálikov</li>
                        <li>extrakcia zuba s následnou náhradou fixnou/snímateľnou protetickou náhradou, dentálnym implantátom alebo bez jeho náhrady (neodporúča sa)</li>

                    </ul>
                </div>

                <div className="space-y-4 mt-12">
                    <h2 className="text-lg font-bold text-green-600">RIZIKÁCH SÚVISIACICH S NAVRHOVANÝM LIEČEBNÝM POSTUPOM
                    </h2>

                    <p>Riziká odmietnutia ošetrenia zubného kazu sú nasledovné:
                    </p>

                    <ul className="list-disc list-inside">
                        <li>progresia zubného kazu</li>
                        <li>zápal zubnej drene s nutnosťou endodontického ošetrenia</li>
                        <li>postihnutie závesného aparátu zuba</li>
                        <li>zlomenie zuba/jeho časti</li>
                        <li>strata zuba</li>
                        <li>progresia funkčných ťažkostí a estetických nedokonalostí</li>
                        <li>v mliečnom chrupe poškodenie zárodkov trvalých zubov a v prípade predčasnej straty zubu následné ortodontické odchýlky</li>
                        <li>šírenie infekcie do tkanív mimo zub (vznik granulómov, cýst, píšťal a abscesov)</li>
                        <li>vzdialené šírenie infekcie krvnou cestou z postihnutého zuba s rizikom vzniku celkových ochorení (infekčná endokarditída, artritídy, akné,...) a potenciálnym fatálnym koncom</li>
                        <li>psychický nepokoj zo strachu o zdravie, bolesti, zníženému sebavedomiu</li>
                        <li>vyššie náklady a časový faktor na ošetrenie neskôr</li>
                    </ul>
                </div>
            </div>

            <div>
                <p>Poučenie mi bolo poskytnuté zrozumiteľne, ohľaduplne, bez nátlaku, s možnosťou a dostatočným časom slobodne sa rozhodnúť. Lekár so mnou komunikoval a zodpovedal moje otázky.
                    Rovnako potvrdzujem, že som bol/a informovaný/á o cene a spôsobe finančnej úhrady za navrhovaný liečebný postup podľa platného cenníka.
                    Potvrdzujem, že v prípade odmietnutia poskytnutia zdravotnej starostlivosti som bol/a riadne poučený/á a o rizikách odmietnutia, no napriek tomu som sa rozhodol/rozhodla zákrok nepodstúpiť.
                </p>
            </div>

            <p>S navrhovaným liečebným postupom súhlasím:</p>



            <div className="flex justify-between pt-20">
                <div>
                    <p>.......................</p>
                    <p>Podpis pacienta</p>
                </div>

                <div>
                    <p>.......................</p>
                    <p>Podpis a pečiatka lekára</p>
                </div>
            </div>


            <p className="mt-8">Dňa {new Date().toLocaleDateString('sk')}</p>

        </div >

    )
}
