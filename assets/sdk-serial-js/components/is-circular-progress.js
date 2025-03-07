import { CircularProgressBase } from "@material/mwc-circular-progress/mwc-circular-progress-base";
import { styles } from "@material/mwc-circular-progress/mwc-circular-progress.css";
export class IsCircularProgress extends CircularProgressBase {
}
IsCircularProgress.styles = [styles];
customElements.define("is-circular-progress", IsCircularProgress);
