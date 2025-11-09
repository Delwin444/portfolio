import Image from "next/image";

const Nextjs = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/next.svg" alt="NextJS Logo" width={341} height={69}/>
            </div>
            <p>
                <b>Next.JS</b> habe ich in einem Projekt etwa ein Jahr lang genutzt. Auch diese Seite ist mit
                Next.JS umgesetzt.
            </p>
            <p>
                Die breite Nutzung im professionellen Kontext und die große Community lassen vermuten, dass es
                in naher Zukunft weiterhin sehr erfolgreich eingesetzt wird.
            </p>
        </>
    );
};

export default Nextjs;