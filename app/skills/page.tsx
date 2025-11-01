import {SkillSection} from "del/components/skills/SkillSection";
import {SkillDetail, SkillDetailModal} from "del/components/skills/SkillDetail";

export default function Page() {
    return (
        <>
            <div className="flex gap-8">
                <div className="hidden lg:block flex-1">
                    <SkillDetail/>
                </div>
                <div className="flex-2">
                    <SkillSection/>
                </div>
            </div>
            <SkillDetailModal/>
        </>
    );
}