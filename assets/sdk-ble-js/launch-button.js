class ImprovWifiLaunchButton extends HTMLElement {
    connectedCallback() {
      if (this.renderRoot) return;
      
      this.renderRoot = this.attachShadow({ mode: "open" });
      
      if (!ImprovWifiLaunchButton.isSupported || !ImprovWifiLaunchButton.isAllowed) {
        this.toggleAttribute("not-supported", true);
        
        this.renderRoot.innerHTML = ImprovWifiLaunchButton.isAllowed 
          ? "<slot name='unsupported'>Your browser does not support bluetooth provisioning. Use Google Chrome or Microsoft Edge.</slot>"
          : "<slot name='not-allowed'>You can only use Improv on HTTPS sites or localhost.</slot>";
        
        return;
      }
      
      this.toggleAttribute("supported", true);
      
      this.addEventListener("mouseover", () => {
        import("./provision-095c1472.js").then(function(module) {
          return module.p;
        });
      });
      
      const slotElement = document.createElement("slot");
      slotElement.name = "activate";
      
      const buttonElement = document.createElement("button");
      buttonElement.innerText = "Connect device to Wi-Fi";
      slotElement.append(buttonElement);
      
      slotElement.addEventListener("click", async (event) => {
        event.preventDefault();
        
        (await import("./provision-095c1472.js").then(function(module) {
          return module.p;
        })).startProvisioning(this);
      });
      
      // Apply styles
      if ("adoptedStyleSheets" in Document.prototype && 
          "replaceSync" in CSSStyleSheet.prototype) {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(ImprovWifiLaunchButton.style);
        this.renderRoot.adoptedStyleSheets = [styleSheet];
      } else {
        const styleElement = document.createElement("style");
        styleElement.innerText = ImprovWifiLaunchButton.style;
        this.renderRoot.append(styleElement);
      }
      
      this.renderRoot.append(slotElement);
    }
  }
  
  // Static properties
  ImprovWifiLaunchButton.isSupported = "bluetooth" in navigator;
  ImprovWifiLaunchButton.isAllowed = window.isSecureContext;
  
  // Component styles
  ImprovWifiLaunchButton.style = `
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
  
  customElements.define("improv-wifi-launch-button", ImprovWifiLaunchButton);