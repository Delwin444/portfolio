import Image from "next/image";

const Php = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/php.svg" alt="php logo" width={279} height={150}/>
            </div>
            <p>
                <b>PHP</b> ist bis heute meine einzige dedizierte Backend-Programmiersprache.
                Typo3, Wordpress, Magento2 und Symfony Projekte habe ich damit umgesetzt.
            </p>
        </>
    );
};

export default Php;