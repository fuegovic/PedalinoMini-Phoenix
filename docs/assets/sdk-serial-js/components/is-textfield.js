import { TextFieldBase } from "@material/mwc-textfield/mwc-textfield-base";
import { styles } from "@material/mwc-textfield/mwc-textfield.css";
export class IsTextfield extends TextFieldBase {
}
IsTextfield.styles = [styles];
customElements.define("is-textfield", IsTextfield);
