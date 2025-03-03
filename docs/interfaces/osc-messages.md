# OSC Messages

PedalinoMini supports the Open Sound Control (OSC) protocol, allowing communication with a wide range of software and hardware that supports this modern networking standard.

## OSC Overview

Open Sound Control (OSC) is a protocol for networking multimedia devices and software. It offers advantages over MIDI including:

- Higher resolution (32-bit instead of 7-bit for MIDI)
- Named parameter addressing
- Rich data typing
- Pattern matching for addressing

## Supported OSC Features

PedalinoMini implements the following OSC features:

- UDP transport protocol
- OSC message reception and transmission
- OSC address patterns
- Integer (int32) and floating point (float32) data types

## OSC Address Patterns

PedalinoMini uses the following address patterns:

| OSC Address Pattern | Parameters | Description |
|---------------------|------------|-------------|
| `/pedal/{pedal}/value` | float (0.0-1.0) | Set/get pedal value |
| `/control/{bank}/{control}/value` | float (0.0-1.0) | Set/get control value |
| `/bank/{bank}` | None | Change to specified bank |
| `/profile/{profile}` | None | Change to specified profile |
| `/action/{action}` | None | Trigger specified action |
| `/sequence/{sequence}` | None | Trigger specified sequence |

### MIDI-Specific OSC Messages

PedalinoMini also sends MIDI events as OSC messages:

| OSC Message Type | Parameters | Description |
|------------------|------------|-------------|
| Note On | note number, velocity, channel | Sent when a note on event occurs |
| Note Off | note number, velocity, channel | Sent when a note off event occurs |
| Control Change | controller number, value, channel | Sent when a CC event occurs |
| Program Change | program number, channel | Sent when a program change occurs |
| Bank Select | MSB, LSB, channel | Sent when a bank select occurs |
| Pitch Bend | bend value, channel | Sent when a pitch bend occurs |
| Aftertouch | pressure value, channel | Sent when aftertouch occurs |
| Start | None | Sent for MIDI start command |
| Stop | None | Sent for MIDI stop command |
| Continue | None | Sent for MIDI continue command |

### Custom OSC Messages

PedalinoMini can also send custom OSC messages with:
- A user-defined OSC address
- Optional integer value

## Configuration

To enable OSC:

1. Connect PedalinoMini to WiFi
2. Navigate to the Options page in the web interface
3. Enter the OSC host IP address and port
4. Enable OSC functionality in the Interfaces page

Default OSC configuration:
- Incoming port: 8000
- Outgoing port: 9000