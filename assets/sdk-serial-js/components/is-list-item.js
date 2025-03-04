import { ListItemBase } from "@material/mwc-list/mwc-list-item-base";
import { styles } from "@material/mwc-list/mwc-list-item.css";
export class IsListItem extends ListItemBase {
}
IsListItem.styles = [styles];
customElements.define("is-list-item", IsListItem);
