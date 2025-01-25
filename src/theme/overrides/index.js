import Button from "./Button"
import CheckBox from "./CheckBox";
import Radio from "./Radio";

const AppComponentsOverrides = (theme) => {
    return {
        ...Button(theme),
        ...CheckBox(theme),
        ...Radio(theme),
    }
}

export default AppComponentsOverrides;