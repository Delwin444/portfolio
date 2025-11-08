import Image from "next/image";

const GdScript = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/godot.svg" alt="css" width={150} height={150}/>
            </div>
            <p>
                Seit einigen Jahren interessiere ich mich für die Spiele-Entwicklung, sei es kleine JS Spiele wie Snake,
                oder 4-Gewinnt, bin ich seit 2 Jahren immer wieder in der Godot Engine unterwegs.
            </p>
            <p>
                <b>gdScript</b> ist die native Scriptsprache der Engine. Die Syntax ähnelt einer Mischung aus Python und JS.
            </p>
            <p>
                2 mal im Jahr versuche ich an "Game-Jams" teilzunehmen. Das letzte Ergebnis ist hier zu sehen:<br />
            </p>
            <a href="https://www.youtube.com/watch?v=pkQEwNifHpM" target="_blank" className="inline-block p-2 border hover:underline">YouTube Video</a>
        </>
    );
};

export default GdScript;