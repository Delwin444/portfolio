import Image from "next/image";

const Typo3 = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/typo3.svg" alt="Typo3 Logo" width={341} height={144}/>
            </div>
            <p>
                <b>Typo3</b> ist ein PHP basiertes CMS in dem ich mehrere Projekte umgesetzt habe.
            </p>
            <p>
                Da das letzte Projekt schon ein paar Jahre her ist, bin ich leider nicht mehr auf dem neusten Stand
                wie sich das Framework entwickelt hat.
            </p>
        </>
    );
};

export default Typo3;