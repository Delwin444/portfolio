"use client";
import {SkillListType} from "del/components/skills/SkillList";
import {ButtonGroup, Button, Tooltip} from "@mui/material";
import {ReactElement, useCallback, useState} from "react";
import {Monitor, Terminal, Storage, Code, DesignServices} from "@mui/icons-material";
import {SkillAccordion} from "del/components/skills/SkillAccordion";

export enum SkillCategories {
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
        "C++": 1,
    },
    [SkillCategories.frontendFrameworks]: {
        "React": 4,
        "TailwindCSS": 4,
        "jQuery": 4,
        "jQuery UI": 4,
        "VueJS": 3,
        "KnockoutJS": 4,

    },
    [SkillCategories.backendFrameworks]: {
        "Symfony": 3,
        "Doctrine": 2,
        "Magento 2": 5,
        "Next.js": 3,
        "Typo 3": 2,
        "Odoo": 1,
        "Wordpress": 1,
    },
    [SkillCategories.ciCd]: {
        "Jenkins": 3,
        "Argo CD": 3,
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

    const onCategorySelected = useCallback((category: SkillCategories): void => {
        setFilteredCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    }, []);

    return (
        <>
            <h1>Skills</h1>
            <ButtonGroup className="pb-4">
                {(Object.keys(skills) as SkillCategories[]).map((category) => {
                    return <Tooltip key={category} title={labels[category]}>
                        <Button variant={filteredCategories.includes(category) ? 'contained' : 'outlined'}
                                onClick={() => onCategorySelected(category)}>
                            {categoryIcons[category] || labels[category]}
                        </Button>
                    </Tooltip>;
                })}
            </ButtonGroup>
            <div className="flex flex-col gap-2">
                {(Object.keys(skills) as SkillCategories[]).map(category => {
                    return <SkillAccordion
                        key={category}
                        category={category}
                        expanded={filteredCategories.includes(category)}
                        handleToggle={onCategorySelected}
                        skills={skills}
                        label={labels[category]}
                    />
                })}
            </div>
        </>
    );
};