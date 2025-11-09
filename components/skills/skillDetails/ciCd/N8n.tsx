import Image from "next/image";

const N8n = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/ciCd/n8n.svg" alt="n8n Logo" width={295} height={150}/>
            </div>
            <p>
                <b>n8n</b> ist ein aufkommendes Automation Tool.
            </p>
            <p>
                Mit ihm lassen sich wiederkehrende Aufgaben automatisieren. Wird bspw. am Ende des Monats ein Finanzreport
                direkt aus der Datenbank benötigt, kann ein Workflow erstellt werden. So können Kollegen ohne Support der
                IT in einem klaren UI den Report erstellen.
            </p>
        </>
    );
};

export default N8n;