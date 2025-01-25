const Radio = (theme) => {
    return {
        MuiRadio: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: theme.palette.secondary.main
                    }
                }
            }
        }
    }
}

export default Radio;