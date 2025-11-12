import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Werdegang",
}

export default function Page() {
    return (
        <div className="max-w-[1280px] mx-auto px-4 py-10 pb-16 lg:pb-8">
            <h1 className="text-2xl font-semibold mb-6">Werdegang</h1>
            <ol className="career-list relative border-s border-gray-200 dark:border-gray-700">
                <li className="mms ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2022 - heute
                    </time>
                    <h3 className="text-lg font-semibold ">
                        Telekom MMS
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Bei der Telekom MMS werde ich als Frontend-Entwickler sowie Full-Stack Magento / Adobe Commerce Entwickler eingesetzt.
                    </p>
                </li>
                <li className="real mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2021
                    </time>
                    <h3 className="text-lg font-semibold ">
                        real.digital
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Bei real.digital habe ich kurz nach der Übernahme durch Kaufland angefangen. Dort habe ich an
                        einigen Komponenten für <a href="https://www.kaufland.de/" target="_blank">kaufland.de</a> gearbeitet.
                    </p>
                </li>
                <li className="y1 mb-10 ms-4">
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2020
                    </time>
                    <h3 className="text-lg font-semibold ">
                        Sitewards / Y1 GmbH
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Sitewards war eine Frankfurter Agentur, die gerade einen neuen Standort in Leipzig aufbaute.
                        Ich war der dritte eingestellte Entwickler. Noch 2020 fusionierte die Agentur mit anderen Agenturen
                        zur Y1 Digital AG. Dort habe ich Full-Stack Magento 2 Webseiten entwickelt und auch ein Projekt
                        als Tech-Lead umgesetzt.
                    </p>
                </li>
                <li className="dS mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2017
                    </time>
                    <h3 className="text-lg font-semibold">
                        dot.Source SE
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        In meinem ersten Job habe ich als E-Commerce Entwickler gearbeitet. Hier habe ich meine ersten
                        Magento 2 Projekte umgesetzt. Da der Checkout bei Kollegen nicht beliebt war habe ich in ihn
                        meinem naiven Optimismus oft umgesetzt und dabei Magento 2 in seinen Höhen und Tiefen kennengelernt.
                    </p>
                </li>
                <li className="nm mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        2014
                    </time>
                    <h3 className="text-lg font-semibold">
                        Ausbildung next.motion OHG
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        In meiner 3-jährigen dualen Ausbildung als Fachinformatiker für Anwendungsentwicklung habe ich
                        meine ersten Kundenprojekte umgesetzt.
                    </p>
                </li>
            </ol>
        </div>
    );
}