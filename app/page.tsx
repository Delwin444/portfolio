import Image from "next/image";
import {GithubButton} from "del/components/GithubButton";

export default function Home() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <Image src="/img/computer-1836330_1920.png"
                       alt="Hero Image- Sourcecode"
                       className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center brightness-40 blur-xs"
                       width={1920}
                       height={943}
                />
                <div className="mx-auto max-w-7xl lg:px-8 p-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Hi, ich bin
                            Justin</h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Ich bin ein Full-Stack Entwickler aus dem Raum Leipzig
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Jahre Erfahrung</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">8+</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">spreche ich fließend</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">PHP, JS</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Zertifizierungen</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">3</dd>
                            </div>
                            <div className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-gray-300">Adobe Commerce</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">Entwickler</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto px-4 py-10 pb-16 lg:pb-8">
                <div className="md:flex gap-8 mb-4 items-center">
                    <div className="flex-1 mb-8 md:mb-0 md:p-12">
                        <blockquote
                            className="p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                            <span className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">&#34;Hallo Welt&#34;</span>
                        </blockquote>
                    </div>
                    <div className="flex-1 md:p-12">
                        <p>
                            2014 ging es wie bei vielen Entwickler:innen mit dem ersten &#34;echo&#34; los. Während meiner
                            dualen Ausbildung
                            in einer kleinen Agentur habe ich die ersten Kundenprojekte in PHP umgesetzt.
                        </p>
                        <p>
                            2017 ging es dann als PHP E-Commerce Entwickler ins Berufsleben. Seitdem habe ich mehrere
                            Magento 2 / Adobe Commerce
                            Webshops umgesetzt.
                        </p>
                    </div>
                </div>
                <h1 className="text-center text-2xl md:text-4xl font-semibold mt-12">Über mich</h1>
                <div className="md:flex md:flex-row-reverse gap-8 mb-4 items-center">
                    <div className="flex-1 p-8 md:p-12">
                        <Image className="max-w-full mx-auto rounded-xl" src="/img/avatar-isolated.png" alt="Avatar" width={800} height={800} placeholder="blur" blurDataURL="/img/avatar-isolated-blur.png"/>
                    </div>
                    <div className="flex-1 mb-8 md:mb-0 md:p-8">
                        Ich bin Baujahr &#39;96, aus dem schönen Thüringen und war 2019 ins Leipziger Umland gezogen.<br />
                        In meiner Freizeit spiele ich Klavier und bin in der Leipziger Lego- sowie GameDev-Community aktiv.
                        Neben Videospielen versuche ich auch einen Ausgleich beim Tischtennis, Fahrradfahren und im Fitnessstudio zu finden.
                    </div>
                </div>
                <hr className="mb-8"/>
                <div className="lg:flex gap-8">
                    <div className="flex-2">
                        <p>
                            Für diese Webseite habe ich mir nur wenige Abende vorgenommen. Die meiste Zeit ging in die
                            Skills-Seite.
                            Damit sie dennoch visuell ansprechend ist, habe ich erstmalig
                            auf <a className="underline" href="https://mui.com/" target="_blank">mui</a> (Material
                            UI) und <a className="underline" href="https://flowbite.com/" target="_blank">Flowbite</a> (TailwindCSS
                            Komponenten) zurückgegriffen.
                        </p>
                    </div>
                    <div className="flex-1 lg:text-right">
                        <GithubButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}
