"use client";
import {useActiveSkill} from "del/hooks/useActiveSkill";
import dynamic from "next/dynamic";
import CircularProgress from '@mui/material/CircularProgress';
import {ComponentType, ReactElement} from "react";

const SkillDetailLoader = () => <CircularProgress />;

const components: Record<string, ComponentType> = {
    "CSS": dynamic(() => import("./skillDetails/Css"), {ssr: false, loading: SkillDetailLoader}),
    "gdScript": dynamic(() => import("./skillDetails/GdScript"), {ssr: false,  loading: SkillDetailLoader}),
    "Javascript": dynamic(() => import("./skillDetails/JavaScript"), {ssr: false,  loading: SkillDetailLoader}),
    "Less": dynamic(() => import("./skillDetails/Less"), {ssr: false,  loading: SkillDetailLoader}),
    "PHP": dynamic(() => import("./skillDetails/Php"), {ssr: false,  loading: SkillDetailLoader}),
    "Scss": dynamic(() => import("./skillDetails/Scss"), {ssr: false,  loading: SkillDetailLoader}),
    "Typescript": dynamic(() => import("./skillDetails/TypeScript"), {ssr: false,  loading: SkillDetailLoader}),
    "C++": dynamic(() => import("./skillDetails/Cplusplus"), {ssr: false,  loading: SkillDetailLoader}),
    "Python": dynamic(() => import("./skillDetails/Python"), {ssr: false,  loading: SkillDetailLoader}),
};


export const SkillDetail = (): ReactElement => {
    const activeSkill = useActiveSkill((state) => state.activeSkill);
    const SkillDetailComponent = components[activeSkill];
    return (
        <>
            {activeSkill && components.hasOwnProperty(activeSkill) && <SkillDetailComponent/>}
            {!activeSkill &&
                <p>Hover über einen Skill um mehr Informationen zu erhalten</p>
            }
        </>
    );
};