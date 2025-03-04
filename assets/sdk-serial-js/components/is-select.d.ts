import { SelectBase } from "@material/mwc-select/mwc-select-base";
declare global {
    interface HTMLElementTagNameMap {
        "is-select": IsSelect;
    }
}
export declare class IsSelect extends SelectBase {
    static styles: import("lit").CSSResult[];
}
