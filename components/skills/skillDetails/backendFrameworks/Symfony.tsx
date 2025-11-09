import Image from "next/image";

const Symfony = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/symfony.svg" alt="Symfony Logo" width={350} height={150}/>
            </div>
            <p>
                <b>Symfony</b> ist eines der ersten großen PHP Frameworks. Viele Frameworks nutzen Symfony als Grundlage
                oder einzelne Komponenten.
            </p>
            <p>
                Magento 2 nutzt bspw. die Console, Intl, Process, String, Mailer und Mime Komponenten.
            </p>
            <p>
                In meiner Ausbildung wurde Symfony auch für einige kleine Backoffices genutzt.
            </p>
        </>
    );
};

export default Symfony;