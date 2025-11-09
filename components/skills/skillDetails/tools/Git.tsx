import Image from "next/image";

const Git = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/tools/git.svg" alt="Git Logo" width={341} height={143}/>
            </div>
            <p>
                <b>Git</b> ist aus der Softwareentwicklung nicht mehr wegzudenken.
            </p>
            <p>
                Am liebsten nutze ich die IntelliJ IDE Git Integration.
            </p>
            <p>
                Oft nutzten meine Projekte den Git Flow Ansatz.
            </p>
        </>
    );
};

export default Git;