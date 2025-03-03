# First Steps with PedalinoMini

After [installing PedalinoMini](installation.md) and [connecting it to WiFi](wifi-setup.md), follow these steps to get your device configured and working with your MIDI equipment.

## Initial Setup

### 1. Access the Web Interface

Once connected to WiFi, access the PedalinoMini web interface:

1. Open a web browser on any device connected to the same network
2. Navigate to `http://pedalino.local` (case insensitive)
   - If this doesn't work, press the BOOT button for at least one second and check the display for the IP address
   - Alternatively, use `http://192.168.4.1` if you're connected directly to PedalinoMini's access point

### 2. Home Screen Overview

The home screen provides an overview of your device's status:

![WEBUI HOME](../assets/webui-home.jpeg "Home")

From here, you can navigate to different configuration sections:

- **Pedals**: Configure which pedal types are connected to each port
- **Controls**: Set up buttons and their default LED indicators
- **Actions**: Define what happens when buttons are pressed
- **Interfaces**: Configure MIDI connectivity options
- **Options**: Access system settings and preferences

## Basic Configuration

### 3. Configure Pedals

1. Go to the Pedals section
2. For each connected pedal, select the appropriate mode:
   - **MOMENTARY**: For standard momentary footswitches
   - **LATCH**: For latching footswitches
   - **ANALOG**: For expression pedals
   - **LADDER**: For resistor ladder setups (multiple switches on one port)
   - **TRIGGER**: For drum triggers or similar inputs
3. Configure additional parameters like polarity and press behavior

### 4. Set Up Controls

1. Go to the Controls section
2. Define the controls (switches) for each pedal
3. Assign default LEDs to each control for visual feedback

### 5. Create Actions

1. Go to the Actions section
2. Select Bank 0 (global bank) or another bank from the dropdown
3. Click "New Action"
4. Choose a control and define what happens when it's activated:
   - MIDI messages (Program Change, Control Change, Note On/Off, etc.)
   - Bank/Program navigation
   - Special functions

## Testing Your Setup

### 6. MIDI Connectivity Test

1. Connect PedalinoMini to your MIDI equipment using your preferred interface:
   - USB-MIDI
   - BLE-MIDI
   - RTP-MIDI (Network MIDI)
   - Traditional 5-pin DIN MIDI

2. Press a configured footswitch and check if your MIDI device responds as expected
   - The OLED display will show triggered actions
   - LEDs should respond according to your configuration

3. Verify expression pedals are sending continuous controller data across their range

## Next Steps

Now that you have the basics set up, explore these advanced features:

- [Sequences](../advanced-features/sequences.md): Create multi-step MIDI message sequences
- [Profiles](../advanced-features/profiles.md): Set up different configurations for various situations
- [Banks](../advanced-features/banks.md): Organize your actions into logical groups
- [Display Customization](../advanced-features/display.md): Customize how information appears on the OLED screen

Remember, you can always save your configuration from the "Configurations" section to back up your setup.