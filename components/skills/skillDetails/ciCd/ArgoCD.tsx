import Image from "next/image";

const ArgoCD = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/ciCd/argocd.webp" alt="Argo CD Logo" width={150} height={150}/>
            </div>
            <p>
                <b>Argo CD</b> ist ein delivery tool für Kubernetes.
            </p>
            <p>
                Mit ihm lassen sich einfach Zustand von Pods darstellen sowie Zero Downtime Deployments umsetzen.
            </p>
        </>
    );
};

export default ArgoCD;