import { ButtonBase } from "@material/mwc-button/mwc-button-base";
declare global {
    interface HTMLElementTagNameMap {
        "is-button": IsButton;
    }
}
export declare class IsButton extends ButtonBase {
    static styles: import("lit").CSSResult[];
}
