import Image from "next/image";

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
                      <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Hi, ich bin Justin</h2>
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
          <div className="lg:max-w-[1280px] mx-auto px-4 py-10 pb-16 lg:pb-8">
              <blockquote
                  className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                  <span className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Hallo Welt"</span>
              </blockquote>
              <div className="md:flex gap-8">
                  <div className="flex-1">
                      <p>
                          2014 ging es wie bei vielen Entwickler:innen mit dem ersten "echo" los. Während meiner dualen Ausbildung
                          in einer kleinen Agentur habe ich die ersten Kundenprojekte umgesetzt.
                      </p>
                  </div>
                  <div className="flex-1">
                    <p>
                        2017 ging es dann als PHP E-Commerce Entwickler ins Berufsleben. Seitdem habe ich mehrere Magento 2 / Adobe Commerce
                        Webshops umgesetzt.
                    </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
