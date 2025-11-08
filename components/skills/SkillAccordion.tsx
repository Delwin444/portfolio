import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {SkillList, SkillListType} from "./SkillList";
import {SkillCategories} from "./SkillSection";
import React from "react";

type SkillAccordionProps = {
    category: SkillCategories,
    expanded: boolean,
    handleToggle: (c: SkillCategories) => void,
    skills: Record<SkillCategories, SkillListType>,
    label: string
};

export const SkillAccordion = React.memo(function SkillAccordion (SkillAccordionProps: SkillAccordionProps) {
    const {category, expanded, handleToggle, skills, label} = SkillAccordionProps;

    return (
        <Accordion expanded={expanded}
                   onChange={() => handleToggle(category)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <h3 className="text-xl p-1">{label}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <SkillList skills={skills[category]}/>
            </AccordionDetails>
        </Accordion>
    );
});