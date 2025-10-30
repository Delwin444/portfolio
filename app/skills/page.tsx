"use client"
import {SkillSection} from "del/components/skills/SkillSection";
import {useActiveSkill} from "del/hooks/useActiveSkill";

export default function Page() {

    const activeSkill = useActiveSkill((state) => state.activeSkill);

    return (
        <div className="flex">
            <div className="hidden md:block flex-1">
                <h1>Skills</h1>
                {activeSkill && <h2>{activeSkill}</h2>}
                {!activeSkill &&
                    <p>Hover über einen Skill um mehr Informationen zu erhalten</p>
                }
            </div>
            <div className="flex-2">
                <SkillSection/>
            </div>
        </div>
    );
}