import Image from "next/image";

const Jira = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/tools/jira.svg" alt="Jira Logo" width={341} height={144}/>
            </div>
            <p>
                <b>Jira</b> habe ich in jedem meiner beruflichen Projekte genutzt.
            </p>
            <p>
                Dabei habe ich verschiedene Ansätze kennengelernt: u.A. Scrum, Kanban, Wasserfall.
            </p>
        </>
    );
};

export default Jira;