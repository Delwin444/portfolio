import {ReactElement} from "react";
import {SkillElement} from "del/components/skills/SkillElement";

export type SkillListType = Record<string, number>;


export const SkillList = ({skills}: { skills: SkillListType }): ReactElement => {
    skills = Object.fromEntries(Object.entries(skills).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }));
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