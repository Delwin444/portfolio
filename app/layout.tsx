"use client";


import "./globals.css";
import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import {Home, Psychology, Assignment} from '@mui/icons-material';
import {ReactElement, useState} from "react";
import {useRouter} from "next/navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeSwitcher} from "del/components/ThemeSwitcher";


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>): ReactElement {
    const [value, setValue] = useState(0);
    const router = useRouter();
    const navigate = (path: string) => {router.push(path)};

    const theme = createTheme({
        colorSchemes: {
            dark: true,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <html lang="en">
            <body className={`antialiased lg:max-w-[1280px] mx-auto px-4 pb-20`}>
            <ThemeSwitcher/>
            {children}
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation value={value}
                                  onChange={(_e, newValue) => {
                                      setValue(newValue);
                                  }}>
                    <BottomNavigationAction label="Home" showLabel={true} onClick={() => navigate('/')} icon={<Home/>}/>
                    <BottomNavigationAction label="Skills" showLabel={true} onClick={() => navigate('skills')} icon={<Psychology/>}/>
                    <BottomNavigationAction label="Referenzen" showLabel={true} onClick={() => navigate('/references')} icon={<Assignment/>}/>
                </BottomNavigation>
            </Paper>
            </body>
            </html>
        </ThemeProvider>
    );
}
