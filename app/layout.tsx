"use client";

import "./globals.css";
import {ReactElement} from "react";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeSwitcher} from "del/components/ThemeSwitcher";
import {MobileMenu} from "del/components/MobileMenu";
import {TopMenu} from "del/components/TopMenu";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>): ReactElement {
    const primaryColor = '#189ad3';
    const theme = createTheme({
        cssVariables: {
            colorSchemeSelector: 'class'
        },
        colorSchemes: {
            dark: {
                palette: {
                    primary: {
                        main: primaryColor,
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    }
                }
            },
            light: {
                palette: {
                    primary: {
                        main: primaryColor,
                    }
                }
            },
        },
    });

    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <html lang="en" suppressHydrationWarning>
                <CssBaseline/>
                <body className={`antialiased`}>
                <InitColorSchemeScript attribute="class"/>
                <TopMenu/>
                <ThemeSwitcher/>
                <main className="lg:max-w-[1280px] mx-auto px-4 py-10 md:pb-20">
                    {children}
                </main>
                <MobileMenu/>
                </body>
                </html>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
