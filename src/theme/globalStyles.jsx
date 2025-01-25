import { GlobalStyles } from "@mui/material";

const AppGlobalStyles = (
    <GlobalStyles
                styles={theme => ({
                    '*': {
                        boxSizing: "border-box",
                        margin: 0,
                        padding: 0,
                    },
                    html: {
                        height: "100%",
                        width: "100%",
                    },
                    body: {
                        minHeight: "100vh",
                        width: "100%",
                        lineHeight: 1.5,
                        fontFamily: "Roboto",
                    },
                    img: {
                        display: "block",
                        maxWidth: "100%",
                        height: "auto",
                    },
                    picture: {
                        display: "block",
                        maxWidth: "100%",
                        height: "auto",
                    },
                    input: {
                        font: "inherit",
                    },
                    select: {
                        font: "inherit",
                    },
                    textarea: {
                        font: "inherit",
                    },
                    button: {
                        font: "inherit",
                    },
                })}
            />
);

export default AppGlobalStyles;