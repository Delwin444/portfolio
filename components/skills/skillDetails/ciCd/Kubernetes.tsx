import Image from "next/image";

const Kubernetes = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/ciCd/kubernetes.svg" alt="Kubernetes Logo" width={154} height={150}/>
            </div>
            <p>
                <b>Kubernetes</b>, oder K8s, habe ich 2 Jahre genutzt.
            </p>
            <p>
                Mit Kubernetes lassen sich containerisierte Anwendungen verwalten.
            </p>
        </>
    );
};

export default Kubernetes;