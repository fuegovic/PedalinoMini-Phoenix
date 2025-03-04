import { __decorate } from "tslib";
import { LitElement, html, css, svg, } from "lit";
import { customElement, query, property, state } from "lit/decorators.js";
import "./components/is-dialog";
import "./components/is-icon-button";
import "./components/is-textfield";
import "./components/is-button";
import "./components/is-circular-progress";
import "./components/is-select";
import "./components/is-list-item";
import { ImprovSerialCurrentState, } from "./const.js";
import { ImprovSerial } from "./serial.js";
import { fireEvent } from "./util/fire-event";
const ERROR_ICON = "⚠️";
const OK_ICON = "🎉";
const refreshIcon = svg `
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
    />
  </svg>
`;
let SerialProvisionDialog = class SerialProvisionDialog extends LitElement {
    constructor() {
        super(...arguments);
        this.logger = console;
        this._state = "CONNECTING";
        this._busy = false;
        this._hasProvisioned = false;
        this._showProvisionForm = false;
        this._selectedSsid = null;
    }
    render() {
        var _a, _b;
        if (!this.port) {
            return html ``;
        }
        let content;
        let hideActions = false;
        if (this._state === "ERROR") {
            content = this._renderMessage(ERROR_ICON, `An error occurred. ${this._error}`, true);
        }
        else if (!this._client || this._state === "CONNECTING") {
            content = this._renderProgress("Connecting");
            hideActions = true;
        }
        else if (this._showProvisionForm) {
            if (this._busy) {
                content = this._renderProgress("Provisioning");
                hideActions = true;
            }
            else if (this._ssids === undefined) {
                content = this._renderProgress("Scanning for networks");
                hideActions = true;
            }
            else {
                content = this._renderImprovReady();
            }
        }
        else if (this._client.state === ImprovSerialCurrentState.PROVISIONING) {
            content = this._renderProgress("Provisioning");
            hideActions = true;
        }
        else if (this._client.state === ImprovSerialCurrentState.PROVISIONED ||
            this._client.state === ImprovSerialCurrentState.READY) {
            [content, hideActions] = this._renderImprovDashboard();
        }
        else {
            content = this._renderMessage(ERROR_ICON, `Unexpected state: ${this._state} - ${this._client.state}`, true);
        }
        return html `
      <is-dialog
        open
        .heading=${(_b = (_a = this._client) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.name}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${hideActions}
        >${content}</is-dialog
      >
    `;
    }
    _renderProgress(label) {
        return html `
      <div class="center">
        <div>
          <is-circular-progress
            active
            indeterminate
            density="8"
          ></is-circular-progress>
        </div>
        ${label}
      </div>
    `;
    }
    _renderMessage(icon, label, showClose) {
        return html `
      <div class="center">
        <div class="icon">${icon}</div>
        ${label}
      </div>
      ${showClose &&
            html `
        <is-button
          slot="primaryAction"
          dialogAction="ok"
          label="Close"
        ></is-button>
      `}
    `;
    }
    _renderImprovReady() {
        var _a;
        let error;
        switch (this._client.error) {
            case 3 /* ImprovSerialErrorState.UNABLE_TO_CONNECT */:
                error = "Unable to connect";
                break;
            case 0 /* ImprovSerialErrorState.NO_ERROR */:
                break;
            // Happens after scanning for networks if device
            // doesn't support the command.
            case 2 /* ImprovSerialErrorState.UNKNOWN_RPC_COMMAND */:
                if (this._ssids !== null) {
                    error = `Unknown RPC command`;
                }
                break;
            case 254 /* ImprovSerialErrorState.TIMEOUT */:
                error = `Timeout`;
                break;
            default:
                error = `Unknown error (${this._client.error})`;
        }
        const selectedSsid = (_a = this._ssids) === null || _a === void 0 ? void 0 : _a.find((info) => info.name === this._selectedSsid);
        return html `
      <div>
        Enter the credentials of the Wi-Fi network that you want your device to
        connect to.
      </div>
      ${error ? html `<p class="error">${error}</p>` : ""}
      ${this._ssids !== null
            ? html `
            <is-select
              fixedMenuPosition
              label="Network"
              @selected=${(ev) => {
                const index = ev.detail.index;
                // The "Join Other" item is always the last item.
                this._selectedSsid =
                    index === this._ssids.length
                        ? null
                        : this._ssids[index].name;
            }}
              @closed=${(ev) => ev.stopPropagation()}
            >
              ${this._ssids.map((info, idx) => html `
                  <is-list-item .selected=${selectedSsid === info} value=${idx}>
                    ${info.name}
                  </is-list-item>
                `)}
              <is-list-item .selected=${!selectedSsid} value="-1">
                Join other…
              </is-list-item>
            </is-select>
            <ewt-icon-button @click=${this._updateSsids}>
              ${refreshIcon}
            </ewt-icon-button>
          `
            : ""}
      ${
        // Show input box if command not supported or "Join Other" selected
        !selectedSsid
            ? html `
              <is-textfield label="Network Name" name="ssid"></is-textfield>
            `
            : ""}
      ${
        // Show password if custom SSID or needs password
        !selectedSsid || selectedSsid.secured
            ? html `
              <is-textfield
                label="Password"
                name="password"
                type="password"
              ></is-textfield>
            `
            : ""}
      <is-button
        slot="primaryAction"
        label="Connect"
        @click=${this._provision}
      ></is-button>
      ${this._client.state === ImprovSerialCurrentState.PROVISIONED
            ? html `
            <is-button
              slot="secondaryAction"
              label="Back"
              @click=${this._toggleShowProvisionForm}
            ></is-button>
          `
            : html `
            <is-button
              slot="secondaryAction"
              dialogAction="close"
              label="Cancel"
            ></is-button>
          `}
    `;
    }
    _renderImprovDashboard() {
        var _a, _b;
        const hideActions = true;
        const content = html `
      <div class="device-info">
        Software: ${(_a = this._client.info) === null || _a === void 0 ? void 0 : _a.firmware}/${(_b = this._client.info) === null || _b === void 0 ? void 0 : _b.version}
      </div>
      ${this._hasProvisioned
            ? html `
            <div class="center">
              <div class="icon">${OK_ICON}</div>
              Provisioned!
            </div>
          `
            : ""}
      <div class="dashboard-buttons">
        ${this._client.nextUrl === undefined
            ? ""
            : html `
              <div>
                <a
                  target="_blank"
                  href=${this._client.nextUrl}
                  class="has-button"
                >
                  <is-button label="Visit Device"></is-button>
                </a>
              </div>
            `}
        <div>
          <is-button
            .label=${this._client.state === ImprovSerialCurrentState.READY
            ? "Connect to Wi-Fi"
            : "Change Wi-Fi"}
            @click=${this._toggleShowProvisionForm}
          ></is-button>
        </div>
        <div>
          <is-button label="Close" dialogAction="close"></is-button>
        </div>
      </div>
    `;
        return [content, hideActions];
    }
    async _toggleShowProvisionForm() {
        this._showProvisionForm = !this._showProvisionForm;
        this._hasProvisioned = false;
    }
    async _updateSsids() {
        const oldSsids = this._ssids;
        this._ssids = undefined;
        this._busy = true;
        let ssids;
        try {
            ssids = await this._client.scan();
        }
        catch (err) {
            // When we fail on first load, pick "Join other"
            if (this._ssids === undefined) {
                this._ssids = null;
                this._selectedSsid = null;
            }
            this._busy = false;
            return;
        }
        if (oldSsids) {
            // If we had a previous list, ensure the selection is still valid
            if (this._selectedSsid &&
                !ssids.find((s) => s.name === this._selectedSsid)) {
                this._selectedSsid = ssids[0].name;
            }
        }
        else {
            this._selectedSsid = ssids.length ? ssids[0].name : null;
        }
        this._ssids = ssids;
        this._busy = false;
    }
    async _provision() {
        var _a;
        this._busy = true;
        try {
            await this._client.provision(this._selectedSsid === null
                ? this._inputSSID.value
                : this._selectedSsid, ((_a = this._inputPassword) === null || _a === void 0 ? void 0 : _a.value) || "", 30000 // Timeout in 30 seconds
            );
            this._hasProvisioned = true;
            this._showProvisionForm = false;
        }
        catch (err) {
            // No need to do error handling because we listen for `error-changed` events
            console.log(err);
        }
        finally {
            this._busy = false;
        }
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has("_showProvisionForm") && this._showProvisionForm) {
            this._updateSsids();
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("port") && this.port) {
            this._connect();
        }
        let toFocus;
        if (changedProps.has("_ssids") && this._ssids !== undefined) {
            toFocus = this._selectSSID;
        }
        else if (changedProps.has("_selectedSsid") &&
            this._selectedSsid === null) {
            toFocus = this._inputSSID;
        }
        if (toFocus) {
            toFocus.updateComplete.then(() => toFocus.focus());
        }
    }
    async _connect() {
        let client;
        try {
            client = new ImprovSerial(this.port, this.logger);
        }
        catch (err) {
            this._state = "ERROR";
            this._error = err.message || err || "Unknown error";
            return;
        }
        client.addEventListener("state-changed", () => {
            this._state = "IMPROV-STATE";
            this.requestUpdate();
        });
        client.addEventListener("error-changed", () => this.requestUpdate());
        try {
            await client.initialize();
        }
        catch (err) {
            this._state = "ERROR";
            this._error = this.learnMoreUrl
                ? html `
            Unable to detect Improv service on connected device.
            <a href=${this.learnMoreUrl} target="_blank"
              >Learn how to resolve this</a
            >
          `
                : err.message;
            return;
        }
        client.addEventListener("disconnect", () => {
            this._state = "ERROR";
            this._error = "Disconnected";
        });
        if (client.nextUrl) {
            this.requestUpdate();
        }
        this._client = client;
    }
    async _handleClose() {
        var _a;
        const eventData = {
            improv: false,
            provisioned: false,
        };
        if (this._client) {
            eventData.improv = true;
            eventData.provisioned =
                this._client.state === ImprovSerialCurrentState.PROVISIONED;
            await ((_a = this._client) === null || _a === void 0 ? void 0 : _a.close());
            this._client = undefined;
        }
        fireEvent(this, "closed", eventData);
        this.parentNode.removeChild(this);
    }
};
SerialProvisionDialog.styles = css `
    :host {
      --mdc-dialog-max-width: 390px;
      --mdc-theme-primary: var(--improv-primary-color, #03a9f4);
      --mdc-theme-on-primary: var(--improv-on-primary-color, #fff);
    }
    ewt-icon-button {
      position: absolute;
      right: 4px;
      top: 10px;
    }
    is-textfield,
    is-select {
      display: block;
      margin-top: 16px;
    }
    .center {
      text-align: center;
    }
    is-circular-progress {
      margin-bottom: 16px;
    }
    a.has-button {
      text-decoration: none;
    }
    .icon {
      font-size: 50px;
      line-height: 80px;
      color: black;
    }
    .error {
      color: #db4437;
    }
    button.link {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      text-align: left;
      text-decoration: underline;
      cursor: pointer;
    }
    is-list-item[value="-1"] {
      border-top: 1px solid #ccc;
    }
    .dashboard-buttons {
      margin: 16px 0 -16px -8px;
    }
    .dashboard-buttons div {
      display: block;
      margin: 4px 0;
    }
  `;
__decorate([
    property()
], SerialProvisionDialog.prototype, "port", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_state", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_client", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_busy", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_error", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_hasProvisioned", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_showProvisionForm", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_selectedSsid", void 0);
__decorate([
    state()
], SerialProvisionDialog.prototype, "_ssids", void 0);
__decorate([
    query("is-select")
], SerialProvisionDialog.prototype, "_selectSSID", void 0);
__decorate([
    query("is-textfield[name=ssid]")
], SerialProvisionDialog.prototype, "_inputSSID", void 0);
__decorate([
    query("is-textfield[name=password]")
], SerialProvisionDialog.prototype, "_inputPassword", void 0);
SerialProvisionDialog = __decorate([
    customElement("improv-wifi-serial-provision-dialog")
], SerialProvisionDialog);
