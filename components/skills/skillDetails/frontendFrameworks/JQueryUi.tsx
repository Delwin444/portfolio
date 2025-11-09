import Image from "next/image";

const JQueryUi = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/frontendFrameworks/jqueryui.svg" alt="jQueryUi Logo" width={400} height={150}/>
            </div>
            <p>
                <b>jQueryUI</b> baut wie der Name schon verrät auf jQuery auf. Magento2 nutzt es im Backoffice komplexe
                Komponenten darzustellen, oder als Basis für Frontend Funktionalitäten wie Tabs, Accordion, Drag&Drop.
            </p>
        </>
    );
};

export default JQueryUi;