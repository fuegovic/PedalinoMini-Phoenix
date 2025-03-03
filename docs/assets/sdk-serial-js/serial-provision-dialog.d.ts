/// <reference types="w3c-web-serial" />
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "./components/is-dialog";
import "./components/is-icon-button";
import "./components/is-textfield";
import "./components/is-button";
import "./components/is-circular-progress";
import "./components/is-select";
import "./components/is-list-item";
import { Logger } from "./const.js";
declare class SerialProvisionDialog extends LitElement {
    port?: SerialPort;
    logger: Logger;
    learnMoreUrl?: TemplateResult;
    private _state;
    private _client?;
    private _busy;
    private _error?;
    private _hasProvisioned;
    private _showProvisionForm;
    private _selectedSsid;
    private _ssids?;
    private _selectSSID;
    private _inputSSID;
    private _inputPassword?;
    protected render(): TemplateResult<1>;
    _renderProgress(label: string): TemplateResult<1>;
    _renderMessage(icon: string, label: string, showClose: boolean): TemplateResult<1>;
    _renderImprovReady(): TemplateResult<1>;
    _renderImprovDashboard(): [TemplateResult, boolean];
    private _toggleShowProvisionForm;
    private _updateSsids;
    private _provision;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _connect;
    private _handleClose;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "improv-wifi-serial-provision-dialog": SerialProvisionDialog;
    }
}
export {};
