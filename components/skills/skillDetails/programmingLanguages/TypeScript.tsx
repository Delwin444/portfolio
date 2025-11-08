import Image from "next/image";

const TypeScript = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/ts.svg" alt="TypeScript logo" width={150} height={150}/>
            </div>
            <p>
                <b>TypeScript</b> habe ich in 2 Projekten genutzt. Anfangs etwas schwergängig, möchte ich heute kein
                Projekt ohne umsetzen.
            </p>
        </>
    );
};

export default TypeScript;