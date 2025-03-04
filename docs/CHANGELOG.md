# Changelog

## ✨ New Features & Updates
- 🐦‍🔥 Renamed project "PedalioMini Phoenix"
- 🌙 Dark Mode by default
- 🎨 Added new Bootswatch themes
- 🎨 New "Phoenix" theme as factory default:
  - Dark background with light text
  - Vibrant orange accents
  - Local storage
- 🏠 Redesigned homepage with card-based layout:
  - Product Information card: Version, model details and GitHub link
  - Hardware card: Board specs, CPU info and memory stats
  - Network card: WiFi/Hotspot status and MIDI connectivity
  - System card: Uptime, firmware details and build info
- 📊 15 controls per page
- 🎛️ Pre-assigned pedals to all available controls
- 🔄 Profile+ & Profile- now cycle through profiles
- ⚙️ Default 15-Pedal Configuration
- 📈 ADC Resolution increased to 10 bits (0-1024)
- 🔌 Analog pins can now handle digital functions
- 🏠 Replaced logo with home icon in navbar
- 🔄 Added update menu item to navbar
- 🔧 Updated JSON schema to support 15 pedals
- 💾 Updated factory default
- 🔐 Simplified default credentials:
  - Hostname/mDNS: "pedalino.local"
  - Access Point SSID: "Pedalino"
  - Access Point Password: "pedalino"
- 💡 Added new Fire Ocean LED effect
- 💡 Profile LED Indicator (LED 20):
  - Profile A: Orange
  - Profile B: Cyan
  - Profile C: Magenta
  - Updates automatically on profile changes
- 🔄 Changed default LED effects in device info mode:
  - Profile A: Fire Ocean (lava waves)
  - Profile B: Pacifica (ocean waves)
  - Profile C: Pride (rainbow waves)
- 📐 Updated supported input modes: 
  - Momentary
  - Latch
  - Analog
  - Analog Pads
  - **Note:** Other modes requiring 2 GPIOs have been disabled
- 🔄 Looping boot menu: does not factory reset anymore when holding past the last option
- ⚡ Improved boot menu:
  - 2.5 seconds per option
  - Safe looping past last option
  - Factory Default triggers only on release during its time window
- 📚 Updated FastLED library to latest version for better ESP32 compatibility
- ⚡ Re-enabled Switch Ladder feature for advanced switch configurations
- 🌐 Updated Web Installer
- 📝 New Docs -> mkdocs
- LED animation during BBoot Menu
- Changed Options menu to Settings menu
- ✨ Implement configurable LED quantity via WebUI 
  - Replace hardcoded LEDS constant with dynamic leds variable throughout codebase
  - Update LED effects and animations to respect user-configured LED count
  - Ensure LED settings persist across reboots via NVS/SPIFFS storage
  - Fix issue where some functions referenced hardcoded constant instead of variable
  - Add proper WebUI form validation for LED quantity (1-254 range)"
- 🚫 Removed "Slots" menu entry from the "actions" page (wasn't used afaik)


## 🔄 Profile System
- Cycles through profiles A → B → C
- Profile+ : Forward cycling (A→B→C→A)
- Profile- : Backward cycling (A→C→B→A)
- Auto-saves settings when switching
- Shows current profile on screen
- LED 20 indicates active profile:
  - Orange: Profile A
  - Cyan: Profile B
  - Magenta: Profile C

## 📌 Pin Configuration Guide

### 🎛️ Pedal Assignments
| Pedal | GPIO | Digital | Analog | Type |
|-------|------|---------|---------|------|
| 1     | 36   | ✅      | ✅      | Expression (ADC1_CH0) |
| 2     | 39   | ✅      | ✅      | Expression (ADC1_CH3) |
| 3     | 34   | ✅      | ✅      | Expression (ADC1_CH6) |
| 4     | 35   | ✅      | ✅      | Expression (ADC1_CH7) |
| 5     | 32   | ✅      | ✅      | Expression (ADC1_CH4) |
| 6     | 33   | ✅      | ✅      | Expression (ADC1_CH5) |
| 7     | 25   | ✅      | ❌      | Digital Switch |
| 8     | 26   | ✅      | ❌      | Digital Switch |
| 9     | 27   | ✅      | ❌      | Digital Switch |
| 10    | 14   | ✅      | ❌      | Digital Switch |
| 11    | 13   | ✅      | ❌      | Digital Switch |
| 12    | 17   | ✅      | ❌      | Digital Switch |
| 13    | 16   | ✅      | ❌      | Digital Switch |
| 14    | 23   | ✅      | ❌      | Digital Switch |
| 15    | 0    | ✅      | ❌      | Digital Switch (BOOT) |

### 🔌 System Pins
- MIDI IN: GPIO 15
- MIDI OUT: GPIO 4
- USB MIDI: GPIO 18,19
- LED Strip: GPIO 5

### 📐 Supported Input Modes: 
  - Momentary
  - Latch
  - Analog
  - Analog Pads
> **Note:** Other modes requiring 2 GPIOs have been disabled

### ⚡ Hardware Wiring

#### 🎛️ Modular Design
- Total of 15 inputs that can be configured as needed:
  - Any combination of footswitches and expression pedals (max 6)
  - Common setups:
    - 15 footswitches
    - 9 footswitches + 6 expression pedals
    - 12 footswitches + 3 expression pedals
    - etc.

#### 🎚️ Expression Pedal Wiring
```
3.3V --- [POT HIGH]
         [POT WIPER] --- GPIO
GND  --- [POT LOW]
```

#### 🦶 Footswitches (7-15)
```
GPIO --- [SWITCH] --- GND
```

### ⚠️ Important Notes
1. 📡 ADC1 pins (Pedals 1-6) work with WiFi
2. 🔒 Input-only pins: GPIO 34,35,36,39
3. ⬆️ Use internal pull-up for switches
4. ⚡ Expression pedals: 0-3.3V range
5. 🔧 External pull-up resistors required for analog pins (Pedals 1-6, 10kΩ recommended)