import Image from "next/image";

const Odoo = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/backendFrameworks/odoo.svg" alt="Odoo Logo" width={200} height={150}/>
            </div>
            <p>
                <b>Odoo</b> versucht ein bisschen die eierlegende Wollmilchsau zu sein. Ob ERP, CRM, E-Commerce oder
                CMS, alles kann Odoo abdecken.
            </p>
            <p>
                Mit sehr aggressivem Marketing haben sie sich schnell eine weite Verbreitung gesichert. Ich habe es
                in meinem letzten Projekt als ERP + E-Commerce System genutzt mit einem Headless Frontend.
            </p>
        </>
    );
};

export default Odoo;