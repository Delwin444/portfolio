import Image from "next/image";

const Docker = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/ciCd/docker.svg" alt="Docker Logo" width={190} height={150}/>
            </div>
            <p>
                <b>Docker</b> ist für die heutige Webentwicklung fast nicht mehr wegzudenken.
            </p>
            <p>
                Seit 2017 nutze ich für die lokale Entwicklung von beruflichen Projekten Docker + Docker-Compose.
                Auf dem Produktiv-System läuft meist Kubernetes.
            </p>
        </>
    );
};

export default Docker;