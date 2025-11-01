"use client";
import {useActiveSkill} from "del/hooks/useActiveSkill";
import dynamic from "next/dynamic";
import CircularProgress from '@mui/material/CircularProgress';
import {ComponentType, ReactElement} from "react";
import {Paper, Modal, Fade, Backdrop, Box, IconButton, useMediaQuery} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const SkillDetailLoader = () => <CircularProgress/>;

const components: Record<string, ComponentType> = {
    "CSS": dynamic(() => import("./skillDetails/Css"), {ssr: false, loading: SkillDetailLoader}),
    "gdScript": dynamic(() => import("./skillDetails/GdScript"), {ssr: false, loading: SkillDetailLoader}),
    "Javascript": dynamic(() => import("./skillDetails/JavaScript"), {ssr: false, loading: SkillDetailLoader}),
    "Less": dynamic(() => import("./skillDetails/Less"), {ssr: false, loading: SkillDetailLoader}),
    "PHP": dynamic(() => import("./skillDetails/Php"), {ssr: false, loading: SkillDetailLoader}),
    "Scss": dynamic(() => import("./skillDetails/Scss"), {ssr: false, loading: SkillDetailLoader}),
    "Typescript": dynamic(() => import("./skillDetails/TypeScript"), {ssr: false, loading: SkillDetailLoader}),
    "C++": dynamic(() => import("./skillDetails/Cplusplus"), {ssr: false, loading: SkillDetailLoader}),
    "Python": dynamic(() => import("./skillDetails/Python"), {ssr: false, loading: SkillDetailLoader}),
};


export const SkillDetail = (): ReactElement => {
    const activeSkill = useActiveSkill((state) => state.activeSkill);
    const SkillDetailComponent = components[activeSkill];
    const isMobile = useMediaQuery('(max-width: 1024px)');
    return (
        <Paper className="p-4 h-full" elevation={1}>
            {activeSkill && components.hasOwnProperty(activeSkill) && !isMobile && <SkillDetailComponent/>}
            {!activeSkill &&
                <p>Hover über einen Skill um mehr Informationen zu erhalten</p>
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
        outline: 'none',
    };
    const activeSkill = useActiveSkill((state) => state.activeSkill);
    const isModalOpen = useActiveSkill((state) => state.isMobileModalOpen);
    const closeModal = useActiveSkill((state) => state.closeMobileModal);
    const SkillDetailComponent = components[activeSkill];
    return <Modal
        closeAfterTransition
        open={isModalOpen}
        slots={{backdrop: Backdrop}}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}
        onClose={closeModal}>
        <Fade in={isModalOpen}>
            <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={closeModal}
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