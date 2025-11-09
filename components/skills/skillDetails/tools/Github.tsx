import Image from "next/image";

const Github = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/tools/github.svg" alt="Github Logo" width={153} height={150}/>
            </div>
            <p>
                <b>Github</b> nutze ich Privat sehr gerne. Vorallem seitdem private Repos auch kostenlos möglich sind.
            </p>
            <p>
                Diese Webseite liegt auch auf Github und wird mit Github Actions gebaut und deployt.
            </p>
        </>
    );
};

export default Github;