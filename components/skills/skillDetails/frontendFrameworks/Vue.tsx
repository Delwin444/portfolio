import Image from "next/image";

const Vue = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <Image src="/img/skills/frontendFrameworks/vue.svg" alt="VueJS Logo" width={173} height={150}/>
            </div>
            <p>
                <b>VueJS</b> würde ich gerne öfter einsetzen. Es ist performant, hat eine sehr angenehme Syntax und eine
                große Community. Bisher habe ich es leider nur in kleinen privaten Projekten genutzt.
            </p>
        </>
    );
};

export default Vue;