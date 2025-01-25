const Select = (theme) => {
    return {
        MuiSelect: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: theme.palette.secondary.main
                    }
                }
            }
        }
    }
}

export default Select;