[![](./data/logo.webp)](https://github.com/fuegovic/PedalinoMini)

# PedalinoMini 🐦‍🔥

> This project is a customized fork of [alf45tar's PedalinoMini™](https://github.com/alf45tar/PedalinoMini/) with significant enhancements and modifications. See the [Changelog](./docs/CHANGELOG.md) for details about changes.

A full-featured MIDI controller supporting up to 15 analog and digital pedals, with 3 user profiles and 20 banks each.

## 📚 Documentation

**Full documentation available at: [PedalinoMini 🐦‍🔥 Documentation](https://fuegovic.github.io/PedalinoMini-Phoenix/)**

## Key Features

### Connectivity
- Bluetooth LE MIDI 4.0 (server or client)
- WiFi with Network MIDI (AppleMIDI/RTP-MIDI) and ipMIDI
- USB MIDI interface
- Legacy DIN MIDI IN/OUT connectors

### Hardware Support
- 15 controller ports supporting digital switches, analog expression pedals
- Up to 45 foot switches when using resistor ladders
- RGB NeoPixel/WS2812B status LEDs with effects

### MIDI Implementation
- Comprehensive routing between all interfaces
- Clock and MIDI Time Code (MTC) master/slave capabilities
- Support for Program Change, Control Code, Note On/Off, Pitch Bend, and more

### Configuration
- 3 profiles with 20 banks each
- Mobile-friendly web interface (http://pedalino.local)
- OTA firmware updates
- Browser-based firmware installation

## Quick Start

### Software Installation
- [Web Installer](https://fuegovic.github.io/PedalinoMini-Phoenix/installer)

## Bill of materials

- Any ESP32 board supported by Arduino core for ESP32
- OLED I2C 0.96"/1.3" display 128x64 pixels SSD1306/SH1106 based
- USB MIDI and DIN MIDI connection requires additional hardware

## Schematic

![Schematic](./docs/assets/Schematic_PedalinoMini.webp "Schematic")

## Pin Configuration Guide

### Pedal Assignments
| Pedal | GPIO | Digital | Analog | Type |
|-------|------|---------|---------|------|
| 1-6   | 36,39,34,35,32,33 | ✅ | ✅ | Expression (ADC) |
| 7-15  | Various | ✅ | ❌ | Digital Switch |

### System Pins
- MIDI IN: GPIO 15
- MIDI OUT: GPIO 4
- USB MIDI: GPIO 18,19
- LED Strip: GPIO 5

See documentation for complete pin assignments and wiring details.
