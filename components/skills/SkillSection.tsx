"use client";
import {SkillList, SkillListType} from "del/components/skills/SkillList";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";


const skills: Record<string, SkillListType> = {
    "programmingLanguages": {
        "CSS": 5,
        "Less": 4,
        "Scss": 4,
        "PHP": 4,
        "gdScript": 4,
        "Javascript": 4,
        "Typescript": 3,
        "Python": 1,
        "C++": 1,
    },
    "frontend-frameworks": {
        "React": 4,
        "Next.js": 3,
        "Tailwind": 4,
        "jQuery": 4,
        "jQuery UI": 4,

    },
    "backend-frameworks": {
        "Symfony": 3,
        "Doctrine": 2,
        "Magento 2": 5,
        "Typo 3": 2,
        "Odoo": 1,
        "Wordpress": 1,
    },
    "ciCd": {
        "Jenkins": 3,
        "ArgoCD": 3,
        "Tekton": 3,
        "Kubernetes": 2,
        "Docker": 4,
        "n8n": 1,
    },
    "tools": {
        "Git": 4,
        "Github": 4,
        "Gitlab": 3,
        "Bitbucket": 5,
    }
}

const labels: Record<string, string> = {
    "programmingLanguages": "Programmiersprachen",
    "frontend-frameworks": "Frontend-Frameworks",
    "backend-frameworks": "Backend-Frameworks",
    "ciCd": "CI/CD",
    "tools": "Tools",
}

export const SkillSection = () => {
    const [filteredCategories, setFilteredCategories] = useState<Array<string>>(["programmingLanguages"]);

    const onCategorySelected = (category: string): void => {
        if (isCategoryFiltered(category)) {
            setFilteredCategories(filteredCategories.filter(c => c !== category));
        } else {
            setFilteredCategories([...filteredCategories, category]);
        }
    }

    const getCategoryIndex = (category: string): number => {
        return filteredCategories.indexOf(category);
    }

    const isCategoryFiltered = (category: string): boolean => {
        return getCategoryIndex(category) !== -1;
    }

    return (
        <>
            <h1>Skills</h1>
            <ButtonGroup className="pb-4">
                {Object.keys(skills).map(category => {
                    return <Button variant={!isCategoryFiltered(category) ? 'outlined' : 'contained'}
                                   key={category}
                                   onClick={() => onCategorySelected(category)}>
                        {labels[category]}
                    </Button>;
                })}
            </ButtonGroup>
            <div className="flex flex-col gap-2">
                {Object.keys(skills).map(category => {
                    return <Accordion key={category} expanded={isCategoryFiltered(category)} onChange={() => onCategorySelected(category)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <h3>{labels[category]}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <SkillList skills={skills[category]}/>
                        </AccordionDetails>
                    </Accordion>;
                })}
            </div>
        </>
    );
};