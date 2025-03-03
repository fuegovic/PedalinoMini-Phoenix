import { toHex } from "./to-hex";
export const hexFormatter = (bytes) => "[" + bytes.map((value) => toHex(value)).join(", ") + "]";
