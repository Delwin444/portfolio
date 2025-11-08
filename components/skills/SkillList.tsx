"use client";
import {ReactElement, useMemo} from "react";
import {SkillElement} from "del/components/skills/SkillElement";

export type SkillListType = Record<string, number>;


export const SkillList = ({skills}: { skills: SkillListType }): ReactElement => {
    const sortedSkills = useMemo(() => (
        Object.keys(skills).sort((a, b) => skills[b] - skills[a] || a.localeCompare(b))
    ), [skills])
    return (
        <>
            <section className="grid grid-cols-3">
                {sortedSkills.map((skillName) => {
                    return <SkillElement key={skillName} skill={skillName} rating={skills[skillName]}/>
                })}
            </section>
        </>
    );
};