# MIDI Interfaces

PedalinoMini supports multiple MIDI interfaces, allowing you to connect to a wide variety of hardware and software.

## Available MIDI Interfaces

| Interface | Description | Configuration |
|-----------|-------------|---------------|
| MIDI DIN | Traditional 5-pin MIDI connections | Requires hardware components (6N137 optocoupler or equivalent) |
| USB MIDI | Connect directly to computers and USB MIDI devices | Enabled by default when connected via USB |
| BLE MIDI | Wireless MIDI over Bluetooth Low Energy | Can be enabled in the Configuration menu |
| RTP-MIDI | Network MIDI over WiFi | Requires WiFi connection and configuration |
| ipMIDI | Multicast UDP MIDI over WiFi | Requires WiFi connection and configuration |
| AppleMIDI (rtpMIDI) | Apple's network MIDI protocol | Requires WiFi connection and configuration |


## Hardware Setup

### USB MIDI using Arduino Pro Micro

See [Schematic](../hardware/schematic.md)

PedalinoMini supports USB MIDI connectivity through an Arduino Pro Micro, offering a cost-effective and compact implementation. Follow these steps:

1. **Software Setup**:
   - Install the [BlokasLabs/USBMIDI](https://github.com/BlokasLabs/USBMIDI) library in your Arduino IDE
   - Upload the [UsbMidiConverter](https://github.com/BlokasLabs/USBMIDI/blob/master/examples/UsbMidiConverter/UsbMidiConverter.ino) example sketch to your Arduino Pro Micro

2. **Hardware Connections**:
   ```
   ESP32                Arduino Pro Micro
   -----                ---------------
   GPIO18 (RX)    →     Pin 1 (TX0)
   GPIO19 (TX)    →     Pin 2 (RX1)
   GND            →     GND (required)
   ```

3. **Hardware Notes**:
   - A 3.3V Pro Micro board is recommended
   - 5V Pro Micro boards can also work as the ESP32 is typically 5V tolerant
   - The Arduino Pro Micro draws power directly from the USB MIDI connection

**IMPORTANT**: Ensure the ESP32 board and Arduino Pro Micro share a common ground connection.

### MIDI DIN

See [Schematic](../hardware/schematic.md)

The standard 5-pin DIN MIDI interface requires the following connections:

```
ESP32         MIDI
------        ----
TX2 (GPIO2)  MIDI OUT
RX2 (GPIO4)  MIDI IN (through optocoupler circuit)
```



