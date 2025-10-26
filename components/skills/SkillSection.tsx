"use client";
import {SkillList, SkillListType} from "del/components/skills/SkillList";
import {ButtonGroup, Button, Accordion, AccordionDetails, AccordionSummary, Tooltip} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ReactElement, useState} from "react";
import {Monitor, Terminal, Storage, Code, DesignServices} from "@mui/icons-material";

enum SkillCategories {
    "programmingLanguages" = "programmingLanguages",
    "frontendFrameworks" = "frontendFrameworks",
    "backendFrameworks" = "backendFrameworks",
    "ciCd" = "ciCd",
    "tools" = "tools",
}

const skills: Record<SkillCategories, SkillListType> = {
    [SkillCategories.programmingLanguages]: {
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
    [SkillCategories.frontendFrameworks]: {
        "React": 4,
        "Next.js": 3,
        "Tailwind": 4,
        "jQuery": 4,
        "jQuery UI": 4,

    },
    [SkillCategories.backendFrameworks]: {
        "Symfony": 3,
        "Doctrine": 2,
        "Magento 2": 5,
        "Typo 3": 2,
        "Odoo": 1,
        "Wordpress": 1,
    },
    [SkillCategories.ciCd]: {
        "Jenkins": 3,
        "ArgoCD": 3,
        "Tekton": 3,
        "Kubernetes": 2,
        "Docker": 4,
        "n8n": 1,
    },
    [SkillCategories.tools]: {
        "Git": 4,
        "Github": 4,
        "Gitlab": 3,
        "Bitbucket": 5,
    },
};
const labels: Record<SkillCategories, string> = {
    [SkillCategories.programmingLanguages]: "Programmiersprachen",
    [SkillCategories.frontendFrameworks]: "Frontend-Frameworks",
    [SkillCategories.backendFrameworks]: "Backend-Frameworks",
    [SkillCategories.ciCd]: "CI/CD",
    [SkillCategories.tools]: "Tools",
};
const categoryIcons: Record<SkillCategories, ReactElement> = {
    [SkillCategories.programmingLanguages]: <Terminal/>,
    [SkillCategories.frontendFrameworks]: <Monitor/>,
    [SkillCategories.backendFrameworks]: <Storage/>,
    [SkillCategories.ciCd]: <Code/>,
    [SkillCategories.tools]: <DesignServices/>
};

export const SkillSection = () => {
    const [filteredCategories, setFilteredCategories] = useState<Array<string>>(["programmingLanguages"]);

    const onCategorySelected = (category: SkillCategories): void => {
        if (isCategoryFiltered(category)) {
            setFilteredCategories(filteredCategories.filter(c => c !== category));
        } else {
            setFilteredCategories([...filteredCategories, category]);
        }
    };

    const getCategoryIndex = (category: SkillCategories): number => {
        return filteredCategories.indexOf(category);
    };

    const isCategoryFiltered = (category: SkillCategories): boolean => {
        return getCategoryIndex(category) !== -1;
    };

    return (
        <>
            <h1>Skills</h1>
            <ButtonGroup className="pb-4">
                {(Object.keys(skills) as SkillCategories[]).map((category) => {
                    return <Tooltip key={category} title={labels[category]}>
                        <Button variant={!isCategoryFiltered(category) ? 'outlined' : 'contained'}
                                onClick={() => onCategorySelected(category)}>
                            {categoryIcons[category] || labels[category]}
                        </Button>
                    </Tooltip>;
                })}
            </ButtonGroup>
            <div className="flex flex-col gap-2">
                {(Object.keys(skills) as SkillCategories[]).map(category => {
                    return <Accordion key={category} expanded={isCategoryFiltered(category)}
                                      onChange={() => onCategorySelected(category)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
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