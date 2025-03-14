# MIDI Features

PedalinoMini offers extensive MIDI capabilities including flexible routing, profile/bank switching, LED control, clock synchronization, and specialized transport functions.

## Table of Contents
1. [Profile and Bank Switching](#profile-and-bank-switching)
2. [LED Control via MIDI](#led-control-via-midi)
3. [MIDI Clock and Transport Control](#midi-clock-and-transport-control)
4. [MIDI Interfaces](#midi-interfaces)
5. [MIDI Routing](#midi-routing)
6. [Special MIDI Features](#special-midi-features)

## Profile and Bank Switching

PedalinoMini supports remote switching of profiles and banks via standard MIDI Control Change messages.

### Profile Switching
```
Channel: 16
Control: CC#0 (Bank Select MSB)
Value: 1-3 (for Profiles A-C)
```

**Example:** To switch to Profile B, send:
```
MIDI CC#0, value 2, channel 16
```

### Bank Switching
```
Channel: 16
Control: CC#32 (Bank Select LSB)
Value: 0-20 (for Banks 0-20)
```

**Example:** To switch to Bank 5, send:
```
MIDI CC#32, value 5, channel 16
```

## LED Control via MIDI

PedalinoMini's LEDs can respond to incoming MIDI messages, providing visual feedback.

### LED Configuration
When configuring actions in the web interface:
1. Associate LEDs with specific controls
2. Set the LED colors for "on" and "off" states
3. The LEDs will automatically respond to matching MIDI messages

### Supported MIDI Messages for LED Control
- Note On/Off: LEDs light up when notes are played
- Control Change: LEDs respond to CC values exceeding configured thresholds
- Program Change: LEDs indicate active programs

**Example:** If a pedal is configured to send CC#64 (Sustain), the associated LED will light up when sustain is active.

## MIDI Clock and Transport Control

PedalinoMini can function as a MIDI Clock master or slave and supports MTC (MIDI Time Code).

### MIDI Clock Modes
- **Master:** Generates MIDI Clock based on internal BPM
- **Slave:** Synchronizes to external MIDI Clock

### MTC (MIDI Time Code) Modes
- **None:** MTC disabled
- **Slave:** Syncs to external MTC
- **Master:** Generates MTC at various frame rates (24, 25, 30DF, 30)

### Transport Control Actions
PedalinoMini can send or respond to:
- Start
- Stop
- Continue
- Tap Tempo

**Example:** Configure a footswitch for the "PED_ACTION_TAP" message to tap tempo, which will be transmitted via MIDI Clock if in Master mode.

## MIDI Interfaces

PedalinoMini supports several MIDI interfaces simultaneously:

- **USB MIDI:** Connect to computers via USB
- **DIN MIDI:** Traditional 5-pin MIDI connections (Legacy MIDI)
- **BLE MIDI:** Wireless MIDI over Bluetooth LE
- **RTP-MIDI:** Network MIDI via Apple's RTP-MIDI protocol
- **ipMIDI:** Alternative network MIDI protocol 
- **OSC:** Open Sound Control messages over network

Each interface can be independently configured for input, output, and thru functionality.

## MIDI Routing

PedalinoMini implements a straightforward routing principle:

**Any message received on an enabled IN interface will be routed to all enabled OUT interfaces.**

This global routing is different from MIDI Thru functionality, which specifically forwards messages within the same interface (from IN to OUT of the same interface type).

### Interface Configuration Options

Each interface can be independently configured with these options:

| Option | Function |
|--------|----------|
| IN | Enable/disable receiving MIDI messages from this interface |
| OUT | Enable/disable sending MIDI messages to this interface |
| THRU | Enable/disable MIDI Thru functionality (automatically routes messages received at the IN port to the OUT port of the same interface) |
| CLOCK | Enable/disable receiving and sending MIDI Clock messages on this interface |

### Configuring MIDI Routing

Interface settings can be configured through the PedalinoMini web interface under the Interfaces section.

![WEBUI INTERFACES](../assets/webui-interfaces.jpeg "Interfaces")

By selectively enabling or disabling the IN and OUT options for different interfaces, you can create custom routing configurations to suit your specific MIDI setup requirements.

## Special MIDI Features

### Last Message Repeat
When `repeatOnBankSwitch` is enabled, PedalinoMini will resend the last MIDI message from a bank when you return to it.

### Tap Tempo Visual Feedback
Configure a LED for the tap tempo action to get visual pulses indicating the current tempo.

### Time Signature Support
PedalinoMini supports various time signatures for MIDI Clock:
- 2/4, 3/4, 4/4
- 3/8, 6/8, 9/8, 12/8

**Note:** These MIDI features can be combined to create powerful setups. For example, you could have one pedal send a Program Change message that's visualized on an LED, while another pedal controls transport via MIDI Clock, all while using different MIDI interfaces simultaneously.
