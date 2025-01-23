import { CssBaseline } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { palette } from "./palatte";
import { useMemo } from "react";


const AppThemeConfig = ({ children }) => {
    const themeOptions = useMemo(() => (
        {
            palette
        },
        []
    ))

    const theme = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

AppThemeConfig.prototype = {
    children: PropTypes.node
}

export default AppThemeConfig;