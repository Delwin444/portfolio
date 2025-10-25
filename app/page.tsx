import {SkillList} from "del/components/skills/SkillList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>
            <SkillList/>
        </div>
    </div>
  );
}
