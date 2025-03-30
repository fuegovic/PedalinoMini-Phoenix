import { CircularProgressBase } from "@material/mwc-circular-progress/mwc-circular-progress-base";
declare global {
    interface HTMLElementTagNameMap {
        "is-circular-progress": IsCircularProgress;
    }
}
export declare class IsCircularProgress extends CircularProgressBase {
    static styles: import("lit").CSSResult[];
}
