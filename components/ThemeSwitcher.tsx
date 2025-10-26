import {SpeedDial, SpeedDialAction, Box} from "@mui/material";
import {useColorScheme} from "@mui/material";
import {LightMode, DarkMode, SettingsBrightness} from '@mui/icons-material';
import {ReactElement} from "react";
import {Mode} from "@mui/system/cssVars/useCurrentColorScheme";

const actions: Array<{ icon: ReactElement, name: Mode }> = [
    {icon: <LightMode/>, name: 'light'},
    {icon: <DarkMode/>, name: 'dark'},
    {icon: <SettingsBrightness/>, name: 'system'},
];

const tooltipLabel: Record<Mode, string> = {
    light: 'Heller Modus',
    dark: 'Dunkler Modus',
    system: 'System Einstellung',
}

export const ThemeSwitcher = () => {
    const {mode, setMode} = useColorScheme();
    const getDefaultIcon = () => actions.find((action) => {
        return action.name === mode
    })?.icon;
    return (
        <Box sx={{position: 'fixed', top: '20px', right: '20px'}}>
            <SpeedDial ariaLabel="Select Theme"
                       icon={getDefaultIcon()}
                       direction="down"
            >
                {actions.map(action => (
                    <SpeedDialAction onClick={() => setMode(action.name)} key={action.name} icon={action.icon}
                                     slotProps={{tooltip: {title: tooltipLabel[action.name]}}}/>
                ))}
            </SpeedDial>
        </Box>
    );
};