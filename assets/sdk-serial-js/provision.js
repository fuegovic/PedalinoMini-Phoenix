import { fireEvent } from "./util/fire-event.js";
export const startProvisioning = async (button) => {
    import("./serial-provision-dialog.js");
    let port;
    try {
        port = await navigator.serial.requestPort();
    }
    catch (err) {
        if (err.name === "NotFoundError") {
            return;
        }
        alert(`Error: ${err.message}`);
        return;
    }
    if (!port) {
        return;
    }
    await port.open({ baudRate: 115200 });
    const el = document.createElement("improv-wifi-serial-provision-dialog");
    el.port = port;
    el.addEventListener("closed", async (ev) => {
        await port.close();
        fireEvent(button, "closed", ev.detail);
    }, { once: true });
    document.body.appendChild(el);
};
