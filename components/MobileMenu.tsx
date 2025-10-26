import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import {Home, Psychology, Assignment} from '@mui/icons-material';
import {ReactElement, useState, useMemo} from "react";
import {useRouter, usePathname} from "next/navigation";

type MenuItem = {label: string, path: string, icon: ReactElement};
const MenuElements: Array<MenuItem> = [
    {
        label: 'Home',
        path: '/',
        icon: <Home/>
    },
    {
        label: 'Skills',
        path: '/skills',
        icon: <Psychology/>
    },
    {
        label: 'Referenzen',
        path: '/references',
        icon: <Assignment/>
    },
]

export const MobileMenu = (): ReactElement => {
    const pathName = usePathname();
    const activeIndex = useMemo(() => {
        const index = MenuElements.findIndex(menuElement => menuElement.path === pathName);
        return index !== -1 ? index : 0;
    }, [pathName]);
    const [value, setValue] = useState(activeIndex);
    const router = useRouter();
    const navigate = (path: string) => {router.push(path)};

    return (
        <Paper className="lg:hidden" sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation value={value}
                              onChange={(_e, newValue) => {
                                  setValue(newValue);
                              }}>
                {MenuElements.map(menuElement => {
                    return <BottomNavigationAction key={menuElement.label}
                                                   label={menuElement.label}
                                                   showLabel={true}
                                                   onClick={() => navigate(menuElement.path)}
                                                   icon={menuElement.icon}
                    />;
                })}
            </BottomNavigation>
        </Paper>
    );
};