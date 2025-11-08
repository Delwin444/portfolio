import Image from "next/image";

const Cplusplus = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/programmingLanguages/cplusplus.svg" alt="C++ Logo" width={133} height={150}/>
            </div>
            <p>
                <b>C++</b> war die primäre Programmiersprache in meiner Ausbildung. Seitdem gab es nur wenige Berührungspunkte.
            </p>
        </>
    );
};

export default Cplusplus;