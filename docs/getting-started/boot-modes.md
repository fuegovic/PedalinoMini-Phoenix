## Boot Modes

PedalinoMini offers 8 different boot modes that determine available connections and functionality.

### Available Boot Modes

Mode|Name|Description
----|----|-----------
1|Normal|BLE and WiFi enabled. Connects to WiFi (last AP → Provisioning → SmartConfig → WPS → Access Point) and awaits BLE-MIDI connections.
2|Bluetooth Only|Enables only BLE-MIDI connections. WiFi and Web UI disabled for lower power consumption.
3|WiFi Only|Enables WiFi connections (same connection sequence as Mode 1) but disables BLE for compatibility or power saving.
4|Access Point with BT|Creates a WiFi Access Point immediately without attempting to connect to previous networks. BLE-MIDI available.
5|Access Point without BT|Creates a WiFi Access Point immediately without BLE functionality.
6|Reset WiFi credentials|Clears saved WiFi settings to allow connection to a different network on next boot.
7|Ladder Config|Calibration mode for resistor ladder pedals (up to 6 buttons). Press and hold each footswitch until the timer completes. Footswitches are numbered by analog value (lower value = lower number).
8|Factory Default|Resets all settings to factory defaults.

If no buttons are pressed during startup, the device boots in the last used mode from options **1-5**.  
The default boot mode is **Normal (1)**.

### Selecting a Boot Mode

1. Press and release the EN button
2. Immediately press and hold the BOOT button
3. Follow the on-screen instructions:
   - Release the button when the desired mode appears

### Feature Availability by Mode

Feature|Normal<br>(Mode 1)|Bluetooth Only<br>(Mode 2)|WiFi Only<br>(Mode 3)|AP with BT<br>(Mode 4)|AP without BT<br>(Mode 5)
-------|-----------------|------------------------|-------------------|------------------|---------------------
**Connection Types**|||||
USB-MIDI|✅|✅|✅|✅|✅
Legacy MIDI|✅|✅|✅|✅|✅
BLE MIDI|✅|✅|❌|✅|❌
RTP-MIDI|✅|❌|✅|✅|✅
ipMIDI|✅|❌|✅|✅|✅
**Interfaces**|||||
OSC|✅|❌|✅|✅|✅
Web UI|✅|❌|✅|✅|✅
**Updates**|||||
OTA Firmware|✅|✅|✅|✅|✅
HTTP Firmware|✅|❌|✅|✅|✅

**Notes:**

- ✅ = Available
- ❌ = Not available
- USB-MIDI and DIN-MIDI are always available when hardware is properly connected