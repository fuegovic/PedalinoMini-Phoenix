# Advanced MIDI Features

PedalinoMini provides powerful MIDI capabilities that extend beyond basic operation. This page summarizes key advanced features - for complete details, see the [MIDI Features](../interfaces/midi-features.md) document.

## Remote Profile & Bank Switching

Control your PedalinoMini remotely via MIDI:
- Switch profiles using CC#0 (values 1-3) on channel 16
- Change banks using CC#32 (values 0-20) on channel 16

This capability allows you to integrate PedalinoMini with other MIDI controllers or DAW software for seamless performance transitions.

## Intelligent LED Control

LEDs can be mapped to MIDI messages for visual feedback:
- Automatic response to incoming MIDI messages
- Color-coded status indications
- Visual tempo feedback

## Clock & Time Code Features

Advanced synchronization options:
- MIDI Clock master/slave functionality
- MTC (MIDI Time Code) generation and following
- Transport control (Start/Stop/Continue)
- Tap tempo with visual feedback

## Cross-interface MIDI Routing

Create complex signal flows:
- Route messages between any combination of interfaces
- Configure independent filtering per interface
- Set up MIDI Thru paths

For full documentation and configuration instructions, see the [comprehensive MIDI Features guide](../interfaces/midi-features.md).
