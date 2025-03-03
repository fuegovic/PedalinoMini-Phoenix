# MIDI Routing

PedalinoMini offers flexible MIDI routing capabilities between its multiple interface options.

## Supported Interfaces

PedalinoMini supports the following MIDI interfaces:

- USB MIDI
- Legacy MIDI (5-pin DIN)
- RTP-MIDI (AppleMIDI)
- ipMIDI
- BLE MIDI
- OSC

## Routing Behavior

PedalinoMini implements a straightforward routing principle:

**Any message received on an enabled IN interface will be routed to all enabled OUT interfaces.**

This global routing is different from MIDI Thru functionality, which specifically forwards messages within the same interface (from IN to OUT of the same interface type).

## Interface Configuration Options

Each interface can be independently configured with these options:

| Option | Function |
|--------|----------|
| IN | Enable/disable receiving MIDI messages from this interface |
| OUT | Enable/disable sending MIDI messages to this interface |
| THRU | Enable/disable MIDI Thru functionality (automatically routes messages received at the IN port to the OUT port of the same interface) |
| CLOCK | Enable/disable receiving and sending MIDI Clock messages on this interface |

## Configuring MIDI Routing

Interface settings can be configured through the PedalinoMini web interface under the Interfaces section.

![WEBUI INTERFACES](../assets/webui-interfaces.jpeg "Interfaces")

By selectively enabling or disabling the IN and OUT options for different interfaces, you can create custom routing configurations to suit your specific MIDI setup requirements.