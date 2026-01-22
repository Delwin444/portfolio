import Image from "next/image";

const Nest = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/nest.svg" alt="NestJS Logo" width={150} height={150}/>
            </div>
            <p>
                <b>NestJS</b> nutze ich aktuell für eine Middleware.
            </p>
            <p>
                NestJS ist ein serverseitiges Node.js Framework und arbeitet per default mit ExpressJS.
            </p>
        </>
    );
};

export default Nest;