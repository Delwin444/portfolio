import {AppBar, Container, Toolbar, Button} from "@mui/material";
import {ReactElement} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

type MenuItemType = {label: string, path: string};
const menuElements: Array<MenuItemType> = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Skills',
        path: '/skills',
    },
    {
        label: 'Werdegang',
        path: '/career',
    },
];

export const TopMenu = (): ReactElement => {
    const router = useRouter();
    const navigate = (path: string) => {router.push(path)};

    return (
        <AppBar position="static" className="hidden! lg:flex! py-4">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image className="logo-colored" src="./logo.svg" alt="logo" width="60" height="85"/>
                    <Image className="logo-white" src="./logo_w.svg" alt="logo white" width="60" height="85"/>
                    <div className="ml-3">
                        {menuElements.map((menuElement:MenuItemType) => {
                            return <Button key={menuElement.label}
                                           sx={{ my: 2, color: 'white', paddingY: "20px", paddingX: "30px", marginY: 0}}
                                           onClick={() => navigate(menuElement.path)}
                            >{menuElement.label}</Button>
                        })}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};