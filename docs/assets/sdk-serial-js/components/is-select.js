import { SelectBase } from "@material/mwc-select/mwc-select-base";
import { styles } from "@material/mwc-select/mwc-select.css";
export class IsSelect extends SelectBase {
}
IsSelect.styles = [styles];
customElements.define("is-select", IsSelect);
