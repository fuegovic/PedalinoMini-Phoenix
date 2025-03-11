[![](./data/logo.webp)](https://github.com/fuegovic/PedalinoMini-Phoenix)

# PedalinoMini™ 🐦‍🔥

This is a full-featured MIDI controller that supports up to 15 analog and digital pedals (with capacity for up to 45 foot switches total), featuring 3 user profiles with 20 banks each for extensive control configurations.

## Key Features

### Connectivity and Protocols
- **Plug-and-Play**: Works with MIDI-compatible apps and devices via:
  - Bluetooth LE MIDI 4.0 (server or client mode)
  - IEEE 802.11 b/g/n Wi-Fi 2.4 GHz with WPA/WPA2 security
  - Network MIDI (AppleMIDI/RTP-MIDI) and ipMIDI via WiFi
  - USB MIDI interface
  - Legacy DIN MIDI IN/OUT connectors

### Hardware Support
- 15 controller ports for ESP32 supporting:
  - Digital foot switches (momentary or latch)
  - Analog expression pedals and triggers
  - Up to 45 foot switches total (using resistor ladders)
  - RGB NeoPixel/WS2812B status LEDs with effects (Fire Ocean, Pacifica, Pride)

### MIDI Implementation
- Comprehensive routing between all interfaces
- Clock master and slave capabilities
- MIDI Time Code (MTC) master and slave
- Send almost any MIDI message: Program Change, Control Code, Note On/Off, Channel Pressure, Pitch Bend, Bank Select, Start, Stop, Continue or sequences

### Configuration
- 3 user profiles with automatic profile LED indicator
- 20 banks + 1 global bank per profile
- 20 sequences of 10 steps each
- Responsive mobile-first web interface (http://pedalino.local)
- Over-the-Air (OTA) firmware updates
- Browser-based firmware installation and WiFi provisioning

## Get Started

Browse the navigation menu to learn more about installation, configuration, and usage of your PedalinoMini device.