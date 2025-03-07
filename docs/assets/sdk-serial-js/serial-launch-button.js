import { startProvisioning } from "./provision";
export class SerialLaunchButton extends HTMLElement {
    connectedCallback() {
        if (this.renderRoot) {
            return;
        }
        this.renderRoot = this.attachShadow({ mode: "open" });
        if (!SerialLaunchButton.isSupported || !SerialLaunchButton.isAllowed) {
            this.toggleAttribute("not-supported", true);
            this.renderRoot.innerHTML = !SerialLaunchButton.isAllowed
                ? "<slot name='not-allowed'>You can only use Improv on HTTPS sites or localhost.</slot>"
                : "<slot name='unsupported'>Your browser does not support serial provisioning. Use Google Chrome or Microsoft Edge.</slot>";
            return;
        }
        this.toggleAttribute("supported", true);
        const slot = document.createElement("slot");
        slot.name = "activate";
        const button = document.createElement("button");
        button.innerText = "Connect device to Wi-Fi";
        slot.append(button);
        slot.addEventListener("click", async (ev) => {
            ev.preventDefault();
            startProvisioning(this);
        });
        if ("adoptedStyleSheets" in Document.prototype &&
            "replaceSync" in CSSStyleSheet.prototype) {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(SerialLaunchButton.style);
            this.renderRoot.adoptedStyleSheets = [sheet];
        }
        else {
            const styleSheet = document.createElement("style");
            styleSheet.innerText = SerialLaunchButton.style;
            this.renderRoot.append(styleSheet);
        }
        this.renderRoot.append(slot);
    }
}
SerialLaunchButton.isSupported = "serial" in navigator;
SerialLaunchButton.isAllowed = window.isSecureContext;
SerialLaunchButton.style = `
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    padding: 8px 28px;
    color: var(--improv-on-primary-color, #fff);
    background-color: var(--improv-primary-color, #03a9f4);
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: 4px;
  }
  button:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.14), 0 1px 7px 0 rgba(0,0,0,.12), 0 3px 1px -1px rgba(0,0,0,.2);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
`;
customElements.define("improv-wifi-serial-launch-button", SerialLaunchButton);
