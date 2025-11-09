"use client";
import {useActiveSkill} from "del/hooks/useActiveSkill";
import dynamic from "next/dynamic";
import CircularProgress from '@mui/material/CircularProgress';
import {ComponentType, ReactElement, useLayoutEffect} from "react";
import {Paper, Modal, Fade, Backdrop, Box, IconButton, useMediaQuery} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const SkillDetailLoader = () => <div className="absolute left-0 top-0 bottom-0 right-0 bg-black/20">
    <div className="flex h-full w-full items-center justify-center">
        <CircularProgress className="self-center"/>
    </div>
</div>;

const components: Record<string, ComponentType> = {
    "CSS": dynamic(() => import("./skillDetails/programmingLanguages/Css"), {ssr: false, loading: SkillDetailLoader}),
    "gdScript": dynamic(() => import("./skillDetails/programmingLanguages/GdScript"), {ssr: false, loading: SkillDetailLoader}),
    "Javascript": dynamic(() => import("./skillDetails/programmingLanguages/JavaScript"), {ssr: false, loading: SkillDetailLoader}),
    "Less": dynamic(() => import("./skillDetails/programmingLanguages/Less"), {ssr: false, loading: SkillDetailLoader}),
    "PHP": dynamic(() => import("./skillDetails/programmingLanguages/Php"), {ssr: false, loading: SkillDetailLoader}),
    "Scss": dynamic(() => import("./skillDetails/programmingLanguages/Scss"), {ssr: false, loading: SkillDetailLoader}),
    "Typescript": dynamic(() => import("./skillDetails/programmingLanguages/TypeScript"), {ssr: false, loading: SkillDetailLoader}),
    "C++": dynamic(() => import("./skillDetails/programmingLanguages/Cplusplus"), {ssr: false, loading: SkillDetailLoader}),
    "React": dynamic(() => import("./skillDetails/frontendFrameworks/React"), {ssr: false, loading: SkillDetailLoader}),
    "KnockoutJS": dynamic(() => import("./skillDetails/frontendFrameworks/KnockoutJS"), {ssr: false, loading: SkillDetailLoader}),
    "TailwindCSS": dynamic(() => import("./skillDetails/frontendFrameworks/TailwindCSS"), {ssr: false, loading: SkillDetailLoader}),
    "jQuery": dynamic(() => import("./skillDetails/frontendFrameworks/JQuery"), {ssr: false, loading: SkillDetailLoader}),
    "jQuery UI": dynamic(() => import("./skillDetails/frontendFrameworks/JQueryUi"), {ssr: false, loading: SkillDetailLoader}),
    "VueJS": dynamic(() => import("./skillDetails/frontendFrameworks/Vue"), {ssr: false, loading: SkillDetailLoader}),
    "Magento 2": dynamic(() => import("./skillDetails/backendFrameworks/Magento"), {ssr: false, loading: SkillDetailLoader}),
    "Next.js": dynamic(() => import("./skillDetails/backendFrameworks/Nextjs"), {ssr: false, loading: SkillDetailLoader}),
    "Symfony": dynamic(() => import("./skillDetails/backendFrameworks/Symfony"), {ssr: false, loading: SkillDetailLoader}),
    "Doctrine": dynamic(() => import("./skillDetails/backendFrameworks/Doctrine"), {ssr: false, loading: SkillDetailLoader}),
    "Typo 3": dynamic(() => import("./skillDetails/backendFrameworks/Typo3"), {ssr: false, loading: SkillDetailLoader}),
    "Odoo": dynamic(() => import("./skillDetails/backendFrameworks/Odoo"), {ssr: false, loading: SkillDetailLoader}),
    "Wordpress": dynamic(() => import("./skillDetails/backendFrameworks/Wordpress"), {ssr: false, loading: SkillDetailLoader}),
    "Docker": dynamic(() => import("./skillDetails/ciCd/Docker"), {ssr: false, loading: SkillDetailLoader}),
    "Argo CD": dynamic(() => import("./skillDetails/ciCd/ArgoCD"), {ssr: false, loading: SkillDetailLoader}),
    "Jenkins": dynamic(() => import("./skillDetails/ciCd/Jenkins"), {ssr: false, loading: SkillDetailLoader}),
    "Tekton": dynamic(() => import("./skillDetails/ciCd/Tekton"), {ssr: false, loading: SkillDetailLoader}),
    "Kubernetes": dynamic(() => import("./skillDetails/ciCd/Kubernetes"), {ssr: false, loading: SkillDetailLoader}),
    "n8n": dynamic(() => import("./skillDetails/ciCd/N8n"), {ssr: false, loading: SkillDetailLoader}),
    "Bitbucket": dynamic(() => import("./skillDetails/tools/Bitbucket"), {ssr: false, loading: SkillDetailLoader}),
    "Jira": dynamic(() => import("./skillDetails/tools/Jira"), {ssr: false, loading: SkillDetailLoader}),
    "Git": dynamic(() => import("./skillDetails/tools/Git"), {ssr: false, loading: SkillDetailLoader}),
    "Github": dynamic(() => import("./skillDetails/tools/Github"), {ssr: false, loading: SkillDetailLoader}),
    "PhpStorm": dynamic(() => import("./skillDetails/tools/PhpStorm"), {ssr: false, loading: SkillDetailLoader}),
    "GitLab": dynamic(() => import("./skillDetails/tools/GitLab"), {ssr: false, loading: SkillDetailLoader}),
};


export const SkillDetail = (): ReactElement => {
    const activeSkill = useActiveSkill((state) => state.activeSkill);
    const SkillDetailComponent = components[activeSkill];
    const isMobile = useMediaQuery('(max-width: 1024px)');
    return (
        <Paper className="p-4 h-full relative" elevation={1}>
            {activeSkill && components.hasOwnProperty(activeSkill) && !isMobile && <SkillDetailComponent/>}
            {!activeSkill &&
                <p>Hover über einen Skill um mehr Informationen zu erhalten. Mit einem Klick kannst du eine Auswahl sichern.</p>
            }
        </Paper>
    );
};

export const SkillDetailModal = (): ReactElement => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        minWidth: '70%',
        minHeight: '250px',
        outline: 'none',
    };
    const activeSkill = useActiveSkill((state) => state.activeSkill);
    const isModalOpen = useActiveSkill((state) => state.isMobileModalOpen);
    const closeModal = useActiveSkill((state) => state.closeMobileModal);
    const setClickedActiveSkill = useActiveSkill((state) => state.setClickedActiveSkill);
    const SkillDetailComponent = components[activeSkill];
    const isMobile = useMediaQuery('(max-width: 1024px)');
    useLayoutEffect(() => {
        if (!isMobile && isModalOpen) {
            closeModal();
            setClickedActiveSkill('');
        }
    });

    return <Modal
        closeAfterTransition
        open={isModalOpen}
        slots={{backdrop: Backdrop}}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
        className="overflow-auto"
        onClose={() => {
            closeModal();
            setClickedActiveSkill('');
        }}>
        <Fade in={isModalOpen}>
            <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={() => {
                        closeModal();
                        setClickedActiveSkill('');
                    }}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon/>
                </IconButton>
                {activeSkill && components.hasOwnProperty(activeSkill) && <SkillDetailComponent/>}
            </Box>
        </Fade>
    </Modal>

}