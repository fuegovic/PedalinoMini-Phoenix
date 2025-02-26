/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/


void OnSerialMidiNoteOn(byte channel, byte note, byte velocity)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendNoteOn(note, velocity, channel);
  BLESendNoteOn(note, velocity, channel);
  ipMIDISendNoteOn(note, velocity, channel);
  AppleMidiSendNoteOn(note, velocity, channel);
  OSCSendNoteOn(note, velocity, channel);
  leds_update(midi::NoteOn, channel, note, velocity);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::NoteOn, note, velocity, channel);
}

void OnSerialMidiNoteOff(byte channel, byte note, byte velocity)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendNoteOff(note, velocity, channel);
  BLESendNoteOff(note, velocity, channel);
  ipMIDISendNoteOff(note, velocity, channel);
  AppleMidiSendNoteOff(note, velocity, channel);
  OSCSendNoteOff(note, velocity, channel);
  leds_update(midi::NoteOff, channel, note, velocity);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::NoteOff, note, velocity, channel);
}

void OnSerialMidiAfterTouchPoly(byte channel, byte note, byte pressure)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendAfterTouch(note, pressure, channel);
  BLESendAfterTouchPoly(note, pressure, channel);
  ipMIDISendAfterTouchPoly(note, pressure, channel);
  AppleMidiSendAfterTouchPoly(note, pressure, channel);
  OSCSendAfterTouchPoly(note, pressure, channel);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::AfterTouchPoly, note, pressure, channel);
}

void OnSerialMidiControlChange(byte channel, byte number, byte value)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendControlChange(number, value, channel);
  BLESendControlChange(number, value, channel);
  ipMIDISendControlChange(number, value, channel);
  AppleMidiSendControlChange(number, value, channel);
  OSCSendControlChange(number, value, channel);
  leds_update(midi::ControlChange, channel, number, value);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::ControlChange, number, value, channel);
}

void OnSerialMidiProgramChange(byte channel, byte number)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendProgramChange(number, channel);
  BLESendProgramChange(number, channel);
  ipMIDISendProgramChange(number, channel);
  AppleMidiSendProgramChange(number, channel);
  OSCSendProgramChange(number, channel);
  leds_update(midi::ProgramChange, channel, number, 0);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::ProgramChange, number, 0, channel);
}

void OnSerialMidiAfterTouchChannel(byte channel, byte pressure)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendAfterTouch(pressure, channel);
  BLESendAfterTouch(pressure, channel);
  ipMIDISendAfterTouch(pressure, channel);
  AppleMidiSendAfterTouch(pressure, channel);
  OSCSendAfterTouch(pressure, channel);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::AfterTouchChannel, pressure, 0, channel);
}

void OnSerialMidiPitchBend(byte channel, int bend)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendPitchBend(bend, channel);
  BLESendPitchBend(bend, channel);
  ipMIDISendPitchBend(bend, channel);
  AppleMidiSendPitchBend(bend, channel);
  OSCSendPitchBend(bend, channel);
  if (IS_SHOW_ENABLED(interfaces[PED_DINMIDI].midiIn)) screen_info(midi::PitchBend, bend, 0, channel);
}

void OnSerialMidiSystemExclusive(byte* array, unsigned size)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendSysEx(size, array);
  BLESendSystemExclusive(array, size);
  ipMIDISendSystemExclusive(array, size);
  AppleMidiSendSystemExclusive(array, size);
  OSCSendSystemExclusive(array, size);
  MTC.decodeMTCFullFrame(size, array);
}

void OnSerialMidiTimeCodeQuarterFrame(byte data)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendTimeCodeQuarterFrame(data);
  BLESendTimeCodeQuarterFrame(data);
  ipMIDISendTimeCodeQuarterFrame(data);
  AppleMidiSendTimeCodeQuarterFrame(data);
  OSCSendTimeCodeQuarterFrame(data);
  MTC.decodMTCQuarterFrame(data);
}

void OnSerialMidiSongPosition(unsigned int beats)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendSongPosition(beats);
  BLESendSongPosition(beats);
  ipMIDISendSongPosition(beats);
  AppleMidiSendSongPosition(beats);
  OSCSendSongPosition(beats);
}

void OnSerialMidiSongSelect(byte songnumber)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendSongSelect(songnumber);
  BLESendSongSelect(songnumber);
  ipMIDISendSongSelect(songnumber);
  AppleMidiSendSongSelect(songnumber);
  OSCSendSongSelect(songnumber);
}

void OnSerialMidiTuneRequest(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendTuneRequest();
  BLESendTuneRequest();
  ipMIDISendTuneRequest();
  AppleMidiSendTuneRequest();
  OSCSendTuneRequest();
}

void OnSerialMidiClock(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendRealTime(midi::Clock);
  BLESendClock();
  ipMIDISendClock();
  AppleMidiSendClock();
  OSCSendClock();
  if (MTC.getMode() == MidiTimeCode::SynchroClockSlave) bpm = MTC.tapTempo();
}

void OnSerialMidiStart(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendRealTime(midi::Start);
  BLESendStart();
  ipMIDISendStart();
  AppleMidiSendStart();
  OSCSendStart();
  if (MTC.getMode() == MidiTimeCode::SynchroClockSlave) MTC.sendPlay();
}

void OnSerialMidiContinue(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendRealTime(midi::Continue);
  BLESendContinue();
  ipMIDISendContinue();
  AppleMidiSendContinue();
  OSCSendContinue();
  if (MTC.getMode() == MidiTimeCode::SynchroClockSlave) MTC.sendContinue();
}

void OnSerialMidiStop(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendRealTime(midi::Stop);
  BLESendStop();
  ipMIDISendStop();
  AppleMidiSendStop();
  OSCSendStop();
  if (MTC.getMode() == MidiTimeCode::SynchroClockSlave) MTC.sendStop();
}

void OnSerialMidiActiveSensing(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendRealTime(midi::ActiveSensing);
  BLESendActiveSensing();
  ipMIDISendActiveSensing();
  AppleMidiSendActiveSensing();
  OSCSendActiveSensing();
}

void OnSerialMidiSystemReset(void)
{
  if (!interfaces[PED_DINMIDI].midiIn) return;

  if (interfaces[PED_USBMIDI].midiOut) USB_MIDI.sendRealTime(midi::SystemReset);
  BLESendSystemReset();
  ipMIDISendSystemReset();
  AppleMidiSendSystemReset();
  OSCSendSystemReset();
}

void serial_midi_connect()
{
  // Connect the handle function called upon reception of a MIDI message from serial MIDI interface
  DIN_MIDI.setHandleNoteOn(OnSerialMidiNoteOn);
  DIN_MIDI.setHandleNoteOff(OnSerialMidiNoteOff);
  DIN_MIDI.setHandleAfterTouchPoly(OnSerialMidiAfterTouchPoly);
  DIN_MIDI.setHandleControlChange(OnSerialMidiControlChange);
  DIN_MIDI.setHandleProgramChange(OnSerialMidiProgramChange);
  DIN_MIDI.setHandleAfterTouchChannel(OnSerialMidiAfterTouchChannel);
  DIN_MIDI.setHandlePitchBend(OnSerialMidiPitchBend);
  DIN_MIDI.setHandleSystemExclusive(OnSerialMidiSystemExclusive);
  DIN_MIDI.setHandleTimeCodeQuarterFrame(OnSerialMidiTimeCodeQuarterFrame);
  DIN_MIDI.setHandleSongPosition(OnSerialMidiSongPosition);
  DIN_MIDI.setHandleSongSelect(OnSerialMidiSongSelect);
  DIN_MIDI.setHandleTuneRequest(OnSerialMidiTuneRequest);
  DIN_MIDI.setHandleClock(OnSerialMidiClock);
  DIN_MIDI.setHandleStart(OnSerialMidiStart);
  DIN_MIDI.setHandleContinue(OnSerialMidiContinue);
  DIN_MIDI.setHandleStop(OnSerialMidiStop);
  DIN_MIDI.setHandleActiveSensing(OnSerialMidiActiveSensing);
  DIN_MIDI.setHandleSystemReset(OnSerialMidiSystemReset);

  // Initiate serial MIDI communications, listen to all channels
  DIN_MIDI.begin(MIDI_CHANNEL_OMNI);
  // Enable/disable MIDI Thru
  interfaces[PED_DINMIDI].midiThru ? DIN_MIDI.turnThruOn() : DIN_MIDI.turnThruOff();
}