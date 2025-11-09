import Image from "next/image";

const Bitbucket = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/tools/bitbucket.svg" alt="Bitbucket Logo" width={300} height={43}/>
            </div>
            <p>
                <b>Bitbucket</b> habe ich am häufigsten als Git-Repo genutzt.
            </p>
            <p>
                Die sehr gute Jira Integration sowie Automatismen wie SonarQube Scan oder Trivy haben bei der Entwicklung
                sehr gut unterstützt.
            </p>
        </>
    );
};

export default Bitbucket;