"use client";

import {ReactElement, ReactNode} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const primaryColor = "#189ad3";
const theme = createTheme({
    cssVariables: { colorSchemeSelector: "class" },
    colorSchemes: {
        dark: { palette: { primary: { main: primaryColor, contrastText: "rgba(0,0,0,0.87)" } } },
        light: { palette: { primary: { main: primaryColor } } },
    },
});

export function Providers({ children }: { children: ReactNode }): ReactElement {
    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <InitColorSchemeScript attribute="class" />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}