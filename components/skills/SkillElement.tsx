import {ReactElement} from "react";

const maxSkillRating = 5;
export const SkillElement = ({skill, rating}: {skill: string, rating: number}): ReactElement => {
    return (
        <tr>
            <td className="pr-4">
                {skill}
            </td>
            <td className="min-w-24">
                <div className="flex w-full items-stretch bg-white gap-0.5 rounded-xs overflow-hidden">
                    {[...Array(maxSkillRating).keys().map((index) => {
                        return <div className={`${index < rating ? 'bg-green-600' : 'bg-gray-400'} flex-1 h-2`} key={index}></div>
                    })]}
                </div>
            </td>
        </tr>
    );
};