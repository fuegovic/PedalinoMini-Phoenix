export interface Logger {
    log(msg: string, ...args: any[]): void;
    error(msg: string, ...args: any[]): void;
    debug(msg: string, ...args: any[]): void;
}
export declare const SERIAL_PACKET_HEADER: number[];
export type State = "CONNECTING" | "IMPROV-STATE" | "ERROR";
export declare enum ImprovSerialMessageType {
    CURRENT_STATE = 1,
    ERROR_STATE = 2,
    RPC = 3,
    RPC_RESULT = 4
}
export declare enum ImprovSerialCurrentState {
    READY = 2,
    PROVISIONING = 3,
    PROVISIONED = 4
}
export declare const enum ImprovSerialErrorState {
    NO_ERROR = 0,
    INVALID_RPC_PACKET = 1,
    UNKNOWN_RPC_COMMAND = 2,
    UNABLE_TO_CONNECT = 3,
    TIMEOUT = 254,
    UNKNOWN_ERROR = 255
}
export declare const ERROR_MSGS: {
    0: string;
    1: string;
    2: string;
    3: string;
    254: string;
    255: string;
};
export declare const enum ImprovSerialRPCCommand {
    SEND_WIFI_SETTINGS = 1,
    REQUEST_CURRENT_STATE = 2,
    REQUEST_INFO = 3,
    REQUEST_WIFI_NETWORKS = 4
}
export declare class PortNotReady extends Error {
    constructor();
}
