import Image from "next/image";

const Less = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/less.svg" alt="less logo" width={336} height={150}/>
            </div>
            <p>
                Mit <b>Less</b> habe ich 3 Jahre lang Typo3 und Wordpress Webseiten umgesetzt.
            </p>
        </>
    );
};

export default Less;