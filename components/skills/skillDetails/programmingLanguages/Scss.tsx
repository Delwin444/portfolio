import Image from "next/image";

const Scss = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/sass.svg" alt="Sass Logo" width={200} height={150}/>
            </div>
            <p>
                <b>Scss</b> wurde in Magento2 sowie Headless React Projekten als CSS Preprocessor genutzt.
            </p>
        </>
    );
};

export default Scss;