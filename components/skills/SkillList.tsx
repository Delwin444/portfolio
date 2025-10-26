import {ReactElement} from "react";
import {SkillElement} from "del/components/skills/SkillElement";

export type SkillListType = Record<string, number>;


export const SkillList = ({skills}: {skills: SkillListType}): ReactElement => {
    return (
        <>
            <section className="grid grid-cols-2">
                {Object.keys(skills).map((skillName) => {
                    return <SkillElement key={skillName} skill={skillName} rating={skills[skillName]}/>
                })}
            </section>
        </>
    );
};