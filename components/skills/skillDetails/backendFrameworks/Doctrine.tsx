import Image from "next/image";

const Doctrine = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/doctrine.svg" alt="Doctrine Logo" width={115} height={150}/>
            </div>
            <p>
                <b>Doctrine</b> habe ich in einem Projekt genutzt. Es ist ein ORM mit dem sich schnell und einfach
                relationale Datenbankschemas und Entities erstellen lassen.
            </p>
        </>
    );
};

export default Doctrine;