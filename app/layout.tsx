"use client";


import "./globals.css";

import {ReactElement} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeSwitcher} from "del/components/ThemeSwitcher";
import {MobileMenu} from "del/components/MobileMenu";


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>): ReactElement {

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
            <MobileMenu/>
            </body>
            </html>
        </ThemeProvider>
    );
}
