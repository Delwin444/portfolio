import Image from "next/image";

const GitLab = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/tools/gitlab.svg" alt="GitLab Logo" width={150} height={150}/>
            </div>
            <p>
                <b>GitLab</b> habe ich in mehreren Projekten im beruflichen Kontext genutzt.
            </p>
        </>
    );
};

export default GitLab;