
const Button = (theme) => {
  return {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
            disableRipple: true
        },
        styleOverrides: {
            root: {
                '&:focus': {
                    outline: 'none',
                    border: 'none'
                }
            }
        }
    }
  }
}

export default Button