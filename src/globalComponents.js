import FgInput from "./components/Inputs/FormGroupInput.vue";
import DropDown from "./components/Dropdown.vue";
import Card from "./components/Cards/Card.vue";
import Button from "./components/Button.vue";
import {
  ElInput,
  ElInputNumber,
  ElTooltip,
  ElPopover,
  ElLoading,
} from "element-plus";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(app) {
    app.component("drop-down", DropDown);
    app.component("card", Card);
    app.component("n-button", Button);
    app.component(ElInput.name, ElInput);
    app.component(ElInputNumber.name, ElInputNumber);
    app.component("fg-input", FgInput);
    app.use(ElTooltip);
    app.use(ElPopover);
    app.use(ElLoading);
  },
};

export default GlobalComponents;
