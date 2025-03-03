/// <reference types="w3c-web-serial" />
import { ImprovSerialCurrentState, ImprovSerialErrorState, Logger } from "./const.js";
export interface Ssid {
    name: string;
    rssi: number;
    secured: boolean;
}
export declare class ImprovSerial extends EventTarget {
    port: SerialPort;
    logger: Logger;
    info?: {
        name: string;
        firmware: string;
        version: string;
        chipFamily: string;
    };
    nextUrl: string | undefined;
    state?: ImprovSerialCurrentState | undefined;
    error: ImprovSerialErrorState;
    private _reader?;
    private _rpcFeedback?;
    constructor(port: SerialPort, logger: Logger);
    /**
     * Detect Improv Serial, fetch the state and return the next URL if provisioned.
     * @param timeout Timeout in ms to wait for the device to respond. Default to 1000ms.
     */
    initialize(timeout?: number): Promise<this["info"]>;
    close(): Promise<void>;
    /**
     * This command will trigger at least one packet,
     * the Current State and if already provisioned,
     * the same response you would get if device provisioning
     * was successful (see below).
     */
    requestCurrentState(): Promise<void>;
    requestInfo(timeout?: number): Promise<void>;
    provision(ssid: string, password: string, timeout?: number): Promise<void>;
    scan(): Promise<Ssid[]>;
    private _sendRPC;
    private _sendRPCWithResponse;
    private _sendRPCWithMultipleResponses;
    private _awaitRPCResultWithTimeout;
    private _processInput;
    private _handleIncomingPacket;
    /**
     * Add header + checksum and write packet to stream
     */
    writePacketToStream(type: number, data: number[]): Promise<void>;
    private _setError;
}
