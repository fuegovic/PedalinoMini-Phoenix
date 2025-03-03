# Overview

![WEBUI INTERFACES](../assets/webui-interfaces.jpeg "Interfaces")

PedalinoMini supports multiple MIDI connectivity options:

Interface|Description
:--------|:----------
USB MIDI|Plug-and-play USB MIDI interface with native device detection. Requires additional hardware (see schematic).
Legacy MIDI|Traditional 5-pin DIN MIDI interface for connecting to hardware synths and devices. Requires additional hardware (see schematic).
RTP-MIDI|Also known as AppleMIDI or Network MIDI, this protocol operates over UDP and requires WiFi connectivity.
ipMIDI|Multicast UDP protocol requiring WiFi. Note: Both endpoints must connect to the same 2.4 GHz WiFi network for proper communication. Connection issues may occur if devices are on different networks (5 GHz vs 2.4 GHz) even from the same router.
BLE MIDI|Wireless MIDI over Bluetooth Low Energy for compatible devices.
OSC|Open Sound Control protocol operating over UDP, requires WiFi connectivity.

Each interface can be configured with these filtering options:

Option|Function
:-----|:----------
IN|Enable/disable receiving MIDI messages from this interface
OUT|Enable/disable sending MIDI messages to this interface
THRU|Enable/disable MIDI Thru functionality (automatically routes messages received at the IN port to the OUT port of the same interface)
CLOCK|Enable/disable receiving and sending MIDI Clock messages on this interface

PedalinoMini provides comprehensive routing between interfaces - any message received on an enabled IN interface will be routed to all enabled OUT interfaces. This routing functionality is distinct from MIDI Thru, which only forwards messages within the same interface.