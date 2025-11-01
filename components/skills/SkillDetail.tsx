"use client";
import {useActiveSkill} from "del/hooks/useActiveSkill";

export const SkillDetail = () => {
    const activeSkill = useActiveSkill((state) => state.activeSkill);
    return (
        <>
            <h1>Skills</h1>
            {activeSkill && <h2>{activeSkill}</h2>}
            {!activeSkill &&
                <p>Hover über einen Skill um mehr Informationen zu erhalten</p>
            }
        </>
    );
};