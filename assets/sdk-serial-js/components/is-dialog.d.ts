import { DialogBase } from "@material/mwc-dialog/mwc-dialog-base";
declare global {
    interface HTMLElementTagNameMap {
        "is-dialog": IsDialog;
    }
}
export declare class IsDialog extends DialogBase {
    static styles: import("lit").CSSResult[];
}
