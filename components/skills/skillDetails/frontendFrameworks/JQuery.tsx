import Image from "next/image";

const JQuery = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/frontendFrameworks/jquery.svg" alt="jQuery Logo" width={400} height={150}/>
            </div>
            <p>
                <b>jQuery</b> wurde lange und gerne in Projekten als Polyfill genutzt. Dank neuen ECMAScript Funktionen
                und besseren Browser-Support hat der Bedarf aber abgenommen.
            </p>
        </>
    );
};

export default JQuery;