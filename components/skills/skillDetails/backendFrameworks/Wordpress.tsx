import Image from "next/image";

const Wordpress = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/wordpress.svg" alt="Wordpress Logo" width={150} height={150}/>
            </div>
            <p>
                <b>Wordpress</b> ist die wohl weitverbreitetste Blog-Software im Internet.
            </p>
            <p>
                Ein Wordpress-Projekt war mein erstes Solo-Projekt für ein kleines, lokales Unternehmen.
            </p>
        </>
    );
};

export default Wordpress;