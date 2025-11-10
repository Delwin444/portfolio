import {SkillSection} from "del/components/skills/SkillSection";
import {SkillDetail, SkillDetailModal} from "del/components/skills/SkillDetail";

export default function Page() {
    return (
        <div className="max-w-[1280px] mx-auto px-4 py-10 pb-16 lg:pb-8">
            <div className="flex gap-8">
                <div className="hidden lg:block flex-1">
                    <SkillDetail/>
                </div>
                <div className="flex-2">
                    <SkillSection/>
                </div>
            </div>
            <SkillDetailModal/>
        </div>
    );
}