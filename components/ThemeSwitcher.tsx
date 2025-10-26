import {SpeedDial, SpeedDialAction, Box} from "@mui/material";
import {useColorScheme} from "@mui/material";
import {LightMode, DarkMode, SettingsBrightness} from '@mui/icons-material';
import {ReactElement} from "react";

enum Mode {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system'
}

const actions: Array<{ icon: ReactElement, name: Mode }> = [
    {icon: <LightMode/>, name: Mode.LIGHT},
    {icon: <DarkMode/>, name: Mode.DARK},
    {icon: <SettingsBrightness/>, name: Mode.SYSTEM},
];

const tooltipLabel: Record<Mode, string> = {
    [Mode.LIGHT]: 'Heller Modus',
    [Mode.DARK]: 'Dunkler Modus',
    [Mode.SYSTEM]: 'System Einstellung',
};

export const ThemeSwitcher = () => {
    const {mode, setMode} = useColorScheme();

    const getDefaultIcon = () => actions.find((action) => {
        return action.name === mode
    })?.icon;

    return (
        <Box sx={{position: 'fixed', top: '20px', right: '20px', zIndex: 1000}}>
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