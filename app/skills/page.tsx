import {SkillSection} from "del/components/skills/SkillSection";
import {SkillDetail} from "del/components/skills/SkillDetail";

export default function Page() {
    return (
        <div className="flex">
            <div className="hidden md:block flex-1">
                <SkillDetail/>
            </div>
            <div className="flex-2">
                <SkillSection/>
            </div>
        </div>
    );
}