"use client";


import "./globals.css";

import {ReactElement} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeSwitcher} from "del/components/ThemeSwitcher";
import {MobileMenu} from "del/components/MobileMenu";
import {TopMenu} from "del/components/TopMenu";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>): ReactElement {

    const theme = createTheme({
        cssVariables: {
            colorSchemeSelector: 'class'
        },
        colorSchemes: {
            dark: true,
            light: true,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <html lang="en" suppressHydrationWarning>
            <body className={`antialiased`}>
            <InitColorSchemeScript attribute="class" />
            <TopMenu/>
            <ThemeSwitcher/>
            <main className="lg:max-w-[1280px] mx-auto px-4 py-10 md:pb-20">
                {children}
            </main>
            <MobileMenu/>
            </body>
            </html>
        </ThemeProvider>
    );
}
