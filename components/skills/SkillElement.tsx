"use client";
import {ReactElement} from "react";
import {useActiveSkill} from "del/hooks/useActiveSkill";
import {useMediaQuery} from "@mui/material";

const maxSkillRating = 5;
type SkillElementProps = {
    skill: string,
    rating: number
}

export const SkillElement = ({skill, rating}: SkillElementProps): ReactElement => {
    const activeColor: string = rating < 3 ? 'bg-yellow-400' : 'bg-green-600';
    const setHoveredActiveSkill = useActiveSkill((state) => state.setActiveSkill);
    const setClickedActiveSkill = useActiveSkill((state) => state.setClickedActiveSkill);
    const openMobileModal = useActiveSkill((state) => state.openMobileModal);
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const isActive = useActiveSkill((state) => state.activeSkill === skill);
    return (
        <>
            <div className="text-right">
                <span className={"cursor-pointer p-0.5 inline-block text-lg pr-6 " +
                        (isActive ? 'underline' : '')}
                      onMouseEnter={() => setHoveredActiveSkill(skill)}
                      onMouseOut={() => setHoveredActiveSkill('')}
                      onClick={() => {
                          setClickedActiveSkill(skill);
                          if (isMobile) openMobileModal();
                      }}
                >
                    {skill}
                </span>
            </div>
            <div className="flex items-center col-span-2 cursor-pointer"
                 onMouseEnter={() => setHoveredActiveSkill(skill)}
                 onMouseLeave={() => setHoveredActiveSkill('')}
                 onClick={() => {
                     setClickedActiveSkill(skill);
                     if (isMobile) openMobileModal();
                 }}
            >
                <div className="flex w-full items-stretch gap-1 h-2">
                    {[...Array(maxSkillRating).keys()].map((index: number): ReactElement => {
                        return <div
                            className={`${index < rating ? activeColor : 'bg-gray-400'} flex-1 h-full rounded-xs`}
                            key={index}></div>
                    })}
                </div>
            </div>
        </>
    );
};