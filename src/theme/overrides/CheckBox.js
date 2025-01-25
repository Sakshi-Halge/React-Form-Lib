const CheckBox = (theme) =>{
    return {
        MuiCheckbox: {
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

export default CheckBox;