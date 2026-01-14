import { merge } from "lodash";
import Button from "./Button"
import CheckBox from "./CheckBox";
import Radio from "./Radio";

const AppComponentsOverrides = (theme) => {
    return merge(
        Button(theme),
        CheckBox(theme),
        Radio(theme),
    )
}

export default AppComponentsOverrides;