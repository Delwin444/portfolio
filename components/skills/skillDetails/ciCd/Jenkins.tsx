import Image from "next/image";

const Jenkins = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/ciCd/jenkins.svg" alt="Jenkins Logo" width={341} height={110}/>
            </div>
            <p>
                <b>Jenkins</b> war lange Zeit das einzige CI/CD Tool, welches ich genutzt habe.
            </p>
            <p>
                Mit modernen Alternativen und größere Verbreitung von K8s kann es von Tekton und ArgoCD abgelöst werden.
            </p>
        </>
    );
};

export default Jenkins;