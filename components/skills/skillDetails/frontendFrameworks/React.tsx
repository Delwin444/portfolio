import Image from "next/image";

const React = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/frontendFrameworks/react.svg" alt="React Logo" width={169} height={150}/>
            </div>
            <p>
                <b>React</b> habe ich 1 Jahr lang für 2 Neuentwicklungen genutzt und 2 Weiterbildungen mitgemacht.
            </p>
            <p>
                Mit der JSX/TSX Syntax bin ich noch nicht zu 100% warm geworden, da finde ich Svelte oder
                VueJS einfacher zu lesen.
            </p>
        </>
    );
};

export default React;