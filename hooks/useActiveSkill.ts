import {create} from 'zustand'

interface ActiveSkillState {
    activeSkill: string,
    hoveredActiveSkill: string,
    clickedActiveSkill: string,
    setActiveSkill: (skill: string) => void,
    setClickedActiveSkill: (skill: string) => void,
    isMobileModalOpen: boolean,
    openMobileModal: () => void,
    closeMobileModal: () => void,
}

export const useActiveSkill = create<ActiveSkillState>((set) => ({
    activeSkill: '',
    hoveredActiveSkill: '',
    clickedActiveSkill: '',
    // Treat setActiveSkill as the hover setter. Empty string clears hover.
    setActiveSkill: (skill: string) => set((state) => ({
        hoveredActiveSkill: skill,
        activeSkill: skill || state.clickedActiveSkill || '',
    })),
    setClickedActiveSkill: (skill: string) => set((state) => ({
        clickedActiveSkill: skill,
        activeSkill: state.hoveredActiveSkill || skill || '',
    })),
    isMobileModalOpen: false,
    openMobileModal: () => set({isMobileModalOpen: true}),
    closeMobileModal: () => set({isMobileModalOpen: false}),
}));