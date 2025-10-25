import {ReactElement} from "react";
import {SkillElement} from "del/components/skills/SkillElement";

const skills: Record<string, number> = {
    "tekton": 4,
    "kubernetes": 3,
    "docker": 3,
    "terraform": 0,
    "ansible": 3,
    "python": 3,
    "java": 1,
    "c": 3,
    "c++": 4,
    "javascript": 5,
    "typescript": 3,
};

export const SkillList = (): ReactElement => {
    return (
        <>
            <table>
                <tbody>
                    {Object.keys(skills).map((skillName) => {
                        return <SkillElement key={skillName} skill={skillName} rating={skills[skillName]}/>
                    })}
                </tbody>
            </table>
        </>
    );
};