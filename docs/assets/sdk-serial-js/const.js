export const SERIAL_PACKET_HEADER = [
    "I".charCodeAt(0),
    "M".charCodeAt(0),
    "P".charCodeAt(0),
    "R".charCodeAt(0),
    "O".charCodeAt(0),
    "V".charCodeAt(0),
    1, // protocol version
];
export var ImprovSerialMessageType;
(function (ImprovSerialMessageType) {
    ImprovSerialMessageType[ImprovSerialMessageType["CURRENT_STATE"] = 1] = "CURRENT_STATE";
    ImprovSerialMessageType[ImprovSerialMessageType["ERROR_STATE"] = 2] = "ERROR_STATE";
    ImprovSerialMessageType[ImprovSerialMessageType["RPC"] = 3] = "RPC";
    ImprovSerialMessageType[ImprovSerialMessageType["RPC_RESULT"] = 4] = "RPC_RESULT";
})(ImprovSerialMessageType || (ImprovSerialMessageType = {}));
export var ImprovSerialCurrentState;
(function (ImprovSerialCurrentState) {
    ImprovSerialCurrentState[ImprovSerialCurrentState["READY"] = 2] = "READY";
    ImprovSerialCurrentState[ImprovSerialCurrentState["PROVISIONING"] = 3] = "PROVISIONING";
    ImprovSerialCurrentState[ImprovSerialCurrentState["PROVISIONED"] = 4] = "PROVISIONED";
})(ImprovSerialCurrentState || (ImprovSerialCurrentState = {}));
export const ERROR_MSGS = {
    0x00: "NO_ERROR",
    0x01: "INVALID_RPC_PACKET",
    0x02: "UNKNOWN_RPC_COMMAND",
    0x03: "UNABLE_TO_CONNECT",
    0xfe: "TIMEOUT",
    0xff: "UNKNOWN_ERROR",
};
export class PortNotReady extends Error {
    constructor() {
        super("Port is not ready");
    }
}
