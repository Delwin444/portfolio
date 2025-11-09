import Image from "next/image";

const PhpStorm = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/tools/phpstorm.svg" alt="PhpStorm Logo" width={150} height={150}/>
            </div>
            <p>
                <b>PhpStorm</b> ist meine default IDE seit 2015.
            </p>
            <p>
                Für TypeScript Projekte versuche ich noch mit VSCode warm zu werden, vor allem in der DevContainer
                Integration hängt IntelliJ noch etwas hinterher.
            </p>
        </>
    );
};

export default PhpStorm;