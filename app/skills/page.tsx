import {SkillSection} from "del/components/skills/SkillSection";
import {SkillDetail, SkillDetailModal} from "del/components/skills/SkillDetail";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Skills",
}

export default function Page() {
    return (
        <div className="max-w-[1280px] mx-auto px-4 py-10 pb-16 lg:pb-8">
            <h1 className="text-2xl font-semibold mb-6">Skills</h1>
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