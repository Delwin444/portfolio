import Image from "next/image";

const TailwindCSS = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/frontendFrameworks/tailwind.svg" alt="TailwindCSS Logo" width={246} height={150}/>
            </div>
            <p>
                <b>TailwindCSS</b> wurde ebenfalls in einem meiner letzten Projekte genutzt.
            </p>
            <p>
                Es ermöglicht schnelle Team-übergreifende Komponentenentwicklung. Bläht aber die HTML-Tags teilweise sehr auf.
            </p>
        </>
    );
};

export default TailwindCSS;