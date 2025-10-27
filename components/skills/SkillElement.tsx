import {ReactElement} from "react";

const maxSkillRating = 5;
type SkillElementProps = {
    skill: string,
    rating: number
}

export const SkillElement = ({skill, rating}: SkillElementProps): ReactElement => {
    const activeColor: string = rating < 3 ? 'bg-yellow-400' : 'bg-green-600';
    return (
        <>
            <div>
                {skill}
            </div>
            <div className="flex items-center">
                <div className="flex w-full items-stretch  gap-1 h-2">
                    {[...Array(maxSkillRating).keys()].map((index: number): ReactElement => {
                        return <div className={`${index < rating ? activeColor : 'bg-gray-400'} flex-1 h-full rounded-xs`}
                                    key={index}></div>
                    })}
                </div>
            </div>
        </>
    );
};