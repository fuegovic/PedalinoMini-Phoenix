# Actions

## 🎛️ Overview

Actions are the heart of PedalinoMini - they define what happens when you interact with your pedals and switches. Each action maps a specific event (like pressing a button or moving a pedal) to a MIDI command or special function.

## ⚙️ Setting Up Actions

After configuring your Controls, follow these steps to create Actions:

1. **Select a Bank** 📚
   - Choose a bank from the dropdown menu in the top left corner
   - Bank 0 is the "global bank" - actions defined here are always active across all banks
   - Banks 1-20 contain bank-specific actions

2. **Select a Control** 🎮
   - From the top right dropdown, choose which control to configure
   - Select "All" to view all actions in the current bank

3. **Name Your Bank** ✏️ *(Optional)*
   - Enter a descriptive name for the current bank to help identify its purpose

4. **Add New Actions** ➕
   - Click "New Action" button
   - Select the control from the dropdown menu that will trigger this action

![WEBUI ACTIONS](../assets/webui-actions.jpeg "Actions")

## 🔄 Event Types

Each control can trigger different events based on how you interact with it:

| Control Type | Supported Events |
|:-------------|:----------------|
| **Momentary/Latch/Ladder switches** | PRESS, RELEASE, CLICK, DOUBLE CLICK, LONG PRESS, REPEAT PRESSED, LONG RELEASE |
| **Analog expression pedals** | MOVE |

> **Note:** Events must be enabled in the Pedals configuration for actions to trigger properly

## 📋 Action Configuration Fields

| Field | Description |
|:------|:------------|
| **On** | Specifies which event triggers the action |
| **Control** | The specific control that will trigger this action |
| **Send** | Defines what happens when the action is triggered (MIDI message or special function) |
| **From Value/To Value** | Defines the value range for the action |
| **Tags When Off** | Custom label shown when the action is in "off" state |
| **Tags When On** | Custom label shown when the action is in "on" state |
| **Led** | Configure visual feedback with LED number and colors |

### 💡 Special Note for Analog Pedals
Leave the "Send" field blank to enable universal mode, which allows the pedal to modify the last sent MIDI message (particularly useful for adjusting the value of the last CONTROL CHANGE).

## 🎯 Action Types & Parameters

| Action | Emoji | MIDI Channel | MIDI Code | From | To |
|:-------|:-----:|:------------:|:---------:|:----:|:---:|
| Program Change | 🎹 | Channel | PC# | - | - |
| Control Change | 🎛️ | Channel | CC# | From Value | To Value |
| Control Change Snap | 📸 | Channel | CC# | From Value | To Value |
| Note On | 🎵 | Channel | Note | Velocity | - |
| Note Off | 🔇 | Channel | Note | Velocity (+) | - |
| Bank Select+ | 📚 | Channel | MSB | From MSB | To LSB |
| Bank Select- | 📚 | Channel | MSB | From MSB | To LSB |
| Program Change+ | 🎹 | Channel | - | From PC# | To PC# |
| Program Change- | 🎹 | Channel | - | From PC# | To PC# |
| Pitch Bend | ↕️ | Channel | - | - | - |
| Channel Pressure | 👆 | Channel | - | - | - |
| MIDI Clock Master | ⏱️ | - | - | - | - |
| MIDI Clock Slave | ⏱️ | - | - | - | - |
| MIDI Clock Off | ⏱️ | - | - | - | - |
| Start | ▶️ | - | - | - | - |
| Stop | ⏹️ | - | - | - | - |
| Continue | ⏯️ | - | - | - | - |
| Sequence | 📋 | - | Sequence # | - | - |
| Step By Step+ | 👣 | - | - | - | - |
| Step By Step- | 👣 | - | - | - | - |
| Bank+ | 🔄 | - | - | From Bank | To Bank |
| Bank- | 🔄 | - | - | From Bank | To Bank |
| MTC Master | 🎬 | - | - | - | - |
| MTC Slave | 🎬 | - | - | - | - |
| MTC Off | 🎬 | - | - | - | - |
| MTC Start | 🎬 | - | - | - | - |
| MTC Stop | 🎬 | - | - | - | - |
| MTC Continue | 🎬 | - | - | - | - |
| Tap | 👇 | - | - | - | - |
| BPM+ | 🥁 | - | - | - | - |
| BPM- | 🥁 | - | - | - | - |
| OSC Message | 📡 | - | - | - | - |
| Profile+ | 👤 | - | - | From Profile# | To Profile# |
| Profile- | 👤 | - | - | From Profile# | To Profile# |
| Set Led Color | 💡 | - | - | - | - |
| Repeat | 🔁 | - | - | - | - |
| Repeat Overwrite | 🔁 | Channel | - | From Value | To Value |
| Device Info | ℹ️ | - | - | - | - |
| Power On/Off | 🔌 | - | - | - | - |

### Legend
- (-) Not used
- (+) If velocity is not zero it is equivalent to NOTE ON
- MSB is the Most Significant Byte, a fixed value from 0 to 127
- LSB is the Less Significant Byte, the variable value from 0 to 127

## 🔍 Tips
- Use "Bank 0" for actions you want available in all banks (like bank switching controls)
- Organize your banks by musical parts, songs, or gear configurations
- Use meaningful tags to help identify what each action does during performance
- Consider color-coding LEDs based on function type (e.g., blue for bank switching, red for looper controls)