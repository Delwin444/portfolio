import Image from "next/image";

const Magento = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/magento.svg" alt="Magento 2 Logo" width={341} height={115}/>
            </div>
            <p>
                <b>Magento 2</b>, bzw. Adobe Commerce, habe ich beruflich am Längsten entwickelt. Seit 2017 entwickle
                ich Magento 2 Full-Stack.
            </p>
            <p>
                2019 habe ich die ich Professional Zertifizierung abgeschlossen:
            </p>
            <a href="https://www.credly.com/badges/535d92df-7eef-4406-bad2-520fe5b6bf66" target="_blank" className="inline-block p-2 border hover:underline mb-4">
                Magento 2 Professional
            </a>
            <p>
                Sowie 2020 die Frontend Experten Zertifizierung:
            </p>
            <a href="https://www.credly.com/badges/00f92721-a59f-449d-b528-fecfdc7e19a7" target="_blank" className="inline-block p-2 border hover:underline mb-4">
                Magento 2 Frontend Expert
            </a>
            <p>
                Diese habe ich 2025 nochmal abgeschlossen:
            </p>
            <div className="flex gap-4">
                <a href="https://certification.adobe.com/credential/verify/b2f1ab1e-a620-11f0-8ca0-42010a400fd3"
                   target="_blank"
                   className="flex-1">
                    <Image src="/img/skills/frontend-certification.png" alt="Magento 2 Frontend Expert Zertifizierung Badge"
                           width={480} height={479}/>
                </a>
                <p className="flex-1">
                    <a href="https://certification.adobe.com/credential/verify/b2f1ab1e-a620-11f0-8ca0-42010a400fd3" target="_blank" className="inline-block p-2 border hover:underline mb-4">
                        Magento 2 Frontend Expert
                    </a>
                </p>
            </div>
        </>
    );
};

export default Magento;