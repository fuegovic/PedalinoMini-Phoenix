import { ListItemBase } from "@material/mwc-list/mwc-list-item-base";
declare global {
    interface HTMLElementTagNameMap {
        "is-list-item": IsListItem;
    }
}
export declare class IsListItem extends ListItemBase {
    static styles: import("lit").CSSResult[];
}
