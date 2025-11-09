import Image from "next/image";

const Tekton = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/ciCd/tekton.png" alt="Tekton Logo" width={341} height={110}/>
            </div>
            <p>
                <b>Tekton</b> ist ein cloudbasiertes tool für CI/CD Pipelines.
            </p>
            <p>
                Mit Tekton habe ich in meinem letzten Projekt Container-Images gebaut.
            </p>
        </>
    );
};

export default Tekton;