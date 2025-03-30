import { TextFieldBase } from "@material/mwc-textfield/mwc-textfield-base";
declare global {
    interface HTMLElementTagNameMap {
        "is-textfield": IsTextfield;
    }
}
export declare class IsTextfield extends TextFieldBase {
    static styles: import("lit").CSSResult[];
}
