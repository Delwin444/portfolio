import Image from 'next/image'

const Css = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/css.svg" alt="CSS Logo" width={106} height={150}/>
            </div>
            <p>
                Mit <b>CSS</b> arbeite ich seit meinen ersten Ausbildungstagen. 2014 Begann es mit Typo3 und Wordpress
                Frontends nach Photoshop Design, sowie E-Mail Templates. Preprocessor wie
                Less und Scss wurden ebenfalls genutzt.
            </p>
        </>
    );
};

export default Css;