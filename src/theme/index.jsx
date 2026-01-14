import { CssBaseline } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { palette } from "./palette";
import { useMemo } from "react";
import AppGlobalStyles from "./globalStyles";
import AppComponentsOverrides from "./overrides";


const AppThemeConfig = ({ children }) => {
    const themeOptions = useMemo(() => (
        {
            palette
        }
    ), [])

    const theme = useMemo(() => ( createTheme(themeOptions) ), [themeOptions]);
    theme.components = AppComponentsOverrides(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {AppGlobalStyles}
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

AppThemeConfig.prototype = {
    children: PropTypes.node
}

export default AppThemeConfig;