# Settings

PedalinoMini has a lot of configurable options in the Settings page.

![WEBUI OPTIONS 1](../assets/webui-settings.jpeg "Settings")

## Overview

### Device
- **Name**: The hostname of the device, used for network identification. The device will be accessible via `http://device_name.local`.
- **Check for Updates**: Checks if a new firmware version is available for update.

### WiFi Network
- **SSID & Password**: Connects the device to a WiFi network using these credentials. The network settings take effect only after a reboot.

### Boot Mode
- **WiFi**: Enables network-based functionalities such as RTP-MIDI, web UI, and OSC.
- **Access Point**: Creates an AP mode for direct connection. Requires WiFi to be enabled.
- **BLE Server**: Enables Bluetooth MIDI functionality.

### AP Mode
- **SSID & Password**: Sets up the access point credentials if AP mode is enabled.

### Web UI Theme
- **Theme**: Allows selecting different UI themes. The "Phoenix (Local)" theme is stored in flash memory, while others require an internet connection.

### Web UI Login
- **Username & Password**: Sets administrator credentials for the web interface. Leaving the username blank allows login without credentials.

### Momentary Switches
- **Debounce Interval (ms)**: Prevents false triggers due to switch bounce.
- **Simultaneous Gap Time (ms)**: Maximum delay allowed between two button presses to be considered simultaneous.
- **Press Time (ms)**: Minimum duration for a press to be registered.
- **Long Press Time (ms)**: Minimum duration required to trigger a long press.
- **Double Press Time (ms)**: Maximum duration between two presses for them to be considered a double press.
- **Repeat Press Time (ms)**: Duration of a continuous press before triggering an autorepeat.

### Resistor Ladder Network
- **Level 1-4**: Defines the resistor values for different levels in the network used for multiple switch detection on a single analog input.

### LEDs
- **Leds Count**: Number of LEDs connected.
- **RGB Order**: Defines the RGB color order.
- **LED Brightness (On/Off)**: Adjusts brightness levels for LEDs when active and inactive.

### Screen Saver
- **Timeout (min)**: Defines the duration of inactivity before the display and LEDs turn off. Values range from 0 (never) to 1440 minutes (24 hours).

### Additional Features
- **Flip Screen**: Rotates the screen output.
- **Tap Dance Mode**: The first press of a pedal switch changes to the next bank, and the second press sends a MIDI event.
- **Bank Switch Repeat**: Repeats the last MIDI message sent for the selected bank.

### OSC Local
- **Local Host IP**: Displays the device's local network IP.
- **Port**: The port on which OSC messages are received.

### OSC Remote
- **Remote Host/IP**: Defines the target OSC message destination. Use `255.255.255.255` for broadcast.
- **Port**: Specifies the port for sending OSC messages.

### System Controls
- **Apply**: Saves the settings.
- **Save**: Saves the settings permanently.
- **Reset to Factory Default**: Restores factory settings.
- **Reboot**: Restarts the device.
- **Power Off**: Shuts down the device safely.
