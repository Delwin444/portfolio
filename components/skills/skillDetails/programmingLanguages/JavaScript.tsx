import Image from "next/image";

const JavaScript = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/js.png" alt="css" width={150} height={150}/>
            </div>
            <p>
                <b>JavaScript</b> war meine erste Programmiersprache. Anfangs (2014) wurde viel mit jQuery gemacht
                (Typo3, Wordpress Frontends),
                Magento2/Adobe Commerce nutzt im Frontend KnockoutJS, jQuery und jQueryUI.
            </p>
            <p>
                In der Freizeit habe ich kleine Anwendungen in VueJS geschrieben. Ein Jahr hatte ich beruflich auch mit
                ReactJS gearbeitet.
            </p>
        </>
    );
};

export default JavaScript;