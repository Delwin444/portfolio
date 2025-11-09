import Image from "next/image";

const KnockoutJS = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/frontendFrameworks/ko.png" alt="KnockoutJS Logo" width={400} height={150}/>
            </div>
            <p>
                <b>KnockoutJS</b> ist ein älteres JS Framework für declarative Binding und UI refresh (ohne Shadow DOM).
            </p>
            <p>
                Magento 2 nutzt KnockoutJS für interaktive Elemente exzessiv, bspw. Warenkorb, Checkout, Backoffice.
                Es gibt keine weitere Struktur vor, dadurch sind leider schnell technische Schulden eingebaut.
            </p>
            <p>
                Das führte dazu, dass es sehr unbeliebt war, obwohl mit etwas Disziplin und Gehirnschmalz
                sehr gute Interaktivität und Performance erreicht werden können.
            </p>
        </>
    );
};

export default KnockoutJS;