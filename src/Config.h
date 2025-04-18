/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/

#include <ArduinoJson.h>
#include <SPIFFS.h>

#ifdef NVS
#include <Preferences.h>
#include <nvs_flash.h>
Preferences preferences;
#endif

extern String httpUsername;
extern String httpPassword;

#ifdef BOARD_HAS_PSRAM
struct SpiRamAllocator : ArduinoJson::Allocator {
  void* allocate(size_t size) override {
    return heap_caps_malloc(size, MALLOC_CAP_SPIRAM);
  }

  void deallocate(void* pointer) override {
    heap_caps_free(pointer);
  }

  void* reallocate(void* ptr, size_t new_size) override {
    return heap_caps_realloc(ptr, new_size, MALLOC_CAP_SPIRAM);
  }
};

SpiRamAllocator allocator;
#endif

bool control_not_defined(unsigned int c) {
  return (controls[c].pedal1 == PEDALS && controls[c].button1 == LADDER_STEPS &&
          controls[c].pedal2 == PEDALS && controls[c].button2 == LADDER_STEPS);
  // Remove LED check since a control without input devices isn't usable anyway
}

// bool control_not_defined (unsigned int c) {
//   return (controls[c].pedal1 == PEDALS && controls[c].button1 == LADDER_STEPS &&
//           controls[c].pedal2 == PEDALS && controls[c].button2 == LADDER_STEPS &&
//           controls[c].led    == LEDS);
// }

byte ActionStringToEnum (String msg)
{
  if      (msg.equals("None"))                return PED_EMPTY;

  else if (msg.equals("Program Change"))      return PED_PROGRAM_CHANGE;
  else if (msg.equals("Control Change"))      return PED_CONTROL_CHANGE;
  else if (msg.equals("Control Change Snap")) return PED_CONTROL_CHANGE_SNAP;
  else if (msg.equals("Note On"))             return PED_NOTE_ON;
  else if (msg.equals("Note Off"))            return PED_NOTE_OFF;
  else if (msg.equals("Bank Select+"))        return PED_BANK_SELECT_INC;
  else if (msg.equals("Bank Select-"))        return PED_BANK_SELECT_DEC;
  else if (msg.equals("Program Change+"))     return PED_PROGRAM_CHANGE_INC;
  else if (msg.equals("Program Change-"))     return PED_PROGRAM_CHANGE_DEC;
  else if (msg.equals("Pitch Bend"))          return PED_PITCH_BEND;
  else if (msg.equals("Channel Pressure"))    return PED_CHANNEL_PRESSURE;
  else if (msg.equals("Start"))               return PED_MIDI_START;
  else if (msg.equals("Stop"))                return PED_MIDI_STOP;
  else if (msg.equals("Continue"))            return PED_MIDI_CONTINUE;

  else if (msg.equals("Sequence"))            return PED_SEQUENCE;
  else if (msg.equals("Step by Step+"))       return PED_SEQUENCE_STEP_BY_STEP_FWD;
  else if (msg.equals("Step by Step-"))       return PED_SEQUENCE_STEP_BY_STEP_REV;

  else if (msg.equals("MIDI Clock Master"))   return PED_ACTION_MIDI_CLOCK_MASTER;
  else if (msg.equals("MIDI Clock Slave"))    return PED_ACTION_MIDI_CLOCK_SLAVE;
  else if (msg.equals("MIDI Clock Off"))      return PED_ACTION_MIDI_CLOCK_OFF;
  else if (msg.equals("MTC Master"))          return PED_ACTION_MTC_MASTER;
  else if (msg.equals("MTC Slave"))           return PED_ACTION_MTC_SLAVE;
  else if (msg.equals("MTC Off"))             return PED_ACTION_MTC_OFF;
  else if (msg.equals("MTC Time Signature"))  return PED_ACTION_MTC_TIME_SIGNATURE;
  else if (msg.equals("MTC Start"))           return PED_ACTION_START;
  else if (msg.equals("MTC Stop"))            return PED_ACTION_STOP;
  else if (msg.equals("MTC Continue"))        return PED_ACTION_CONTINUE;
  else if (msg.equals("Tap"))                 return PED_ACTION_TAP;
  else if (msg.equals("BPM+"))                return PED_ACTION_BPM_PLUS;
  else if (msg.equals("BPM-"))                return PED_ACTION_BPM_MINUS;

  else if (msg.equals("OSC Message"))         return PED_OSC_MESSAGE;

  else if (msg.equals("Set Bank"))            return PED_ACTION_BANK;
  else if (msg.equals("Bank+"))               return PED_ACTION_BANK_PLUS;
  else if (msg.equals("Bank-"))               return PED_ACTION_BANK_MINUS;
  else if (msg.equals("Profile+"))            return PED_ACTION_PROFILE_PLUS;
  else if (msg.equals("Profile-"))            return PED_ACTION_PROFILE_MINUS;

  else if (msg.equals("Set Led Color"))       return PED_ACTION_LED_COLOR;

  else if (msg.equals("Repeat"))              return PED_ACTION_REPEAT;
  else if (msg.equals("Repeat Overwrite"))    return PED_ACTION_REPEAT_OVERWRITE;

  else if (msg.equals("Device Info"))         return PED_ACTION_DEVICE_INFO;
  else if (msg.equals("Power On/Off"))        return PED_ACTION_POWER_ON_OFF;
  else                                        return PED_EMPTY;

}

String ActionEnumToString (byte msg)
{
  switch (msg) {
          case PED_EMPTY:
            return "None";
            break;
          case PED_PROGRAM_CHANGE:
            return "Program Change";
            break;
          case PED_CONTROL_CHANGE:
            return "Control Change";
            break;
          case PED_CONTROL_CHANGE_SNAP:
            return "Control Change Snap";
            break;
          case PED_NOTE_ON:
            return "Note On";
            break;
          case PED_NOTE_OFF:
            return "Note Off";
            break;
          case PED_BANK_SELECT_INC:
            return "Bank Select+";
            break;
          case PED_BANK_SELECT_DEC:
            return "Bank Select-";
            break;
          case PED_PROGRAM_CHANGE_INC:
            return "Program Change+";
            break;
          case PED_PROGRAM_CHANGE_DEC:
            return "Program Change-";
            break;
          case PED_PITCH_BEND:
            return "Pitch Bend";
            break;
          case PED_CHANNEL_PRESSURE:
            return "Channel Pressure";
            break;
          case PED_MIDI_START:
            return "Start";
            break;
          case PED_MIDI_STOP:
            return "Stop";
            break;
          case PED_MIDI_CONTINUE:
            return "Continue";
            break;
          case PED_SEQUENCE:
            return "Sequence";
            break;
          case PED_SEQUENCE_STEP_BY_STEP_FWD:
            return "Step by Step+";
            break;
          case PED_SEQUENCE_STEP_BY_STEP_REV:
            return "Step by Step-";
            break;
          case PED_ACTION_MIDI_CLOCK_MASTER:
            return "MIDI Clock Master";
            break;
          case PED_ACTION_MIDI_CLOCK_SLAVE:
            return "MIDI Clock Slave";
            break;
          case PED_ACTION_MIDI_CLOCK_OFF:
            return "MIDI Clock Off";
            break;
          case PED_ACTION_MTC_MASTER:
            return "MTC Master";
            break;
          case PED_ACTION_MTC_SLAVE:
            return "MTC Slave";
            break;
          case PED_ACTION_MTC_OFF:
            return "MTC Off";
            break;
          case PED_ACTION_MTC_TIME_SIGNATURE:
            return "MTC Time Signature";
            break;
          case PED_ACTION_START:
            return "MTC Start";
            break;
          case PED_ACTION_STOP:
            return "MTC Stop";
            break;
          case PED_ACTION_CONTINUE:
            return "MTC Continue";
            break;
          case PED_ACTION_TAP:
            return "Tap";
            break;
          case PED_ACTION_BPM_PLUS:
            return "BPM+";
            break;
          case PED_ACTION_BPM_MINUS:
            return "BPM-";
            break;
          case PED_OSC_MESSAGE:
            return "OSC Message";
            break;
          case PED_ACTION_BANK:
            return "Set Bank";
            break;
          case PED_ACTION_BANK_PLUS:
            return "Bank+";
            break;
          case PED_ACTION_BANK_MINUS:
            return "Bank-";
            break;
          case PED_ACTION_PROFILE_PLUS:
            return "Profile+";
            break;
          case PED_ACTION_PROFILE_MINUS:
            return "Profile-";
            break;
          case PED_ACTION_LED_COLOR:
            return "Set Led Color";
            break;
          case PED_ACTION_REPEAT:
            return "Repeat";
            break;
          case PED_ACTION_REPEAT_OVERWRITE:
            return "Repeat Overwrite";
            break;
          case PED_ACTION_DEVICE_INFO:
            return "Device Info";
            break;
          case PED_ACTION_POWER_ON_OFF:
            return "Power On/Off";
            break;
          default:
            return "None";
            break;
  }
}

//
//  Delete a file from SPIFFS
//

void spiffs_remove_file (const String& filename) {

  if (SPIFFS.exists(filename) && !SPIFFS.remove(filename)) {
    DPRINTLN("SPIFFS: can't remove file %s\n", filename.c_str());
    return;
  }
}


//
//  Remove /globals.json configuration files from SPIFFS
//

void spiffs_remove_globals() {

  spiffs_remove_file("/globals.json");

}

//
//  Remove profile configuration files from SPIFFS
//

void spiffs_remove_profile(byte profile) {

  profile = constrain(profile, 0, PROFILES - 1);

  spiffs_remove_file("/" + String(profile) + "/pedals.json");
  spiffs_remove_file("/" + String(profile) + "/interfaces.json");
  spiffs_remove_file("/" + String(profile) + "/actions.json");
  spiffs_remove_file("/" + String(profile) + "/sequences.json");

}


//
//  Save configuration to SPIFFS file
//

void spiffs_save_config(const String& filename, bool saveActions = true, bool savePedals = true, bool saveControls = true, bool saveInterfaces = true, bool saveSequences = true, bool saveOptions  = true) {

#ifdef BOARD_HAS_PSRAM
  JsonDocument jdoc(&allocator);
#else
  JsonDocument jdoc;
#endif

  if (saveOptions) {
    JsonArray jglobals = jdoc["Globals"].to<JsonArray>();
    JsonObject jo = jglobals.add<JsonObject>();
    jo["Hostname"]            = host;
    jo["BootMode"]            = bootMode;
    jo["BLEServer"]           = bleServer;
    jo["Profile"]             = currentProfile;
    jo["SSID"]                = wifiSSID;
    jo["WiFiPassword"]        = wifiPassword;
    jo["SSIDsoftAP"]          = ssidSoftAP;
    jo["PasswordSoftAP"]      = passwordSoftAP;
    jo["HTTPUsername"]        = httpUsername;
    jo["HTTPPassword"]        = httpPassword;
    jo["Theme"]               = theme;
    jo["DebounceInterval"]    = debounceInterval;
    jo["SimultaneousGapTime"] = simultaneousGapTime;
    jo["PressTime"]           = pressTime;
    jo["DoublePressTime"]     = doublePressTime;
    jo["LongPressTime"]       = longPressTime;
    jo["RepeatPressTime"]     = repeatPressTime;
    jo["EncoderSensitivity"]  = encoderSensitivity;
    jo["FlipScreen"]          = flipScreen;
    jo["ScreenSaverTimeout"]  = screenSaverTimeout / 60000;
    jo["TapDanceMode"]        = tapDanceMode;
    jo["RepeatOnBankSwitch"]  = repeatOnBankSwitch;
    jo["TapDanceBank"]        = tapDanceBank;
    jo["Leds"]                = leds;
    switch (rgbOrder) {
      case RGB:
        jo["RGBOrder"]        = "RGB";
        break;
      case RBG:
        jo["RGBOrder"]        = "RBG";
       break;
      case GRB:
        jo["RGBOrder"]        = "GRB";
        break;
      case GBR:
        jo["RGBOrder"]        = "GBR";
        break;
      case BRG:
        jo["RGBOrder"]        = "BRG";
        break;
      case BGR:
        jo["RGBOrder"]        = "BGR";
        break;
    }
    jo["LedsOnBrightness"]    = ledsOnBrightness;
    jo["LedsOffBrightness"]   = ledsOffBrightness;
    jo["OSCLocalPort"]        = oscLocalPort;
    jo["OSCRemoteHost"]       = oscRemoteHost;
    jo["OSCRemotePort"]       = oscRemotePort;
    JsonArray jladder = jdoc["Ladder"].to<JsonArray>();
    for (byte s = 0; s < LADDER_STEPS + 1; s++) {
      JsonObject jo = jladder.add<JsonObject>();
      jo["Step"]            = s + 1;
      jo["Level"]           = ladderLevels[s];
    }
  }

  if (savePedals) {
    JsonArray jpedals = jdoc["Pedals"].to<JsonArray>();
    for (byte p = 0; p < PEDALS; p++) {
      JsonObject jo = jpedals.add<JsonObject>();
      jo["Pedal"]             = p + 1;
      jo["Mode"]              = pedalModeName[pedals[p].mode];
      jo["InvertPolarity"]    = (pedals[p].invertPolarity == PED_ENABLE);
      jo["PressMode"]         = pedalPressModeName[pedals[p].pressMode];
      jo["LatchEmulation"]    = (pedals[p].latchEmulation == PED_ENABLE);
      jo["AnalogResponse"]    = pedalAnalogResponse[pedals[p].analogResponse];
      jo["Min"]               = pedals[p].expZero;
      jo["Max"]               = pedals[p].expMax;
      jo["Easing"]            = pedals[p].snapMultiplier;
      jo["ActivityThreshold"] = lround(pedals[p].activityThreshold);
      jo["AutoSensing"]       = (pedals[p].autoSensing == PED_ENABLE);
    }
  }

  if (saveControls) {
    JsonArray jpedals = jdoc["Controls"].to<JsonArray>();
    for (byte c = 0; c < CONTROLS; c++) {
      if (control_not_defined(c)) continue;
      JsonObject jo = jpedals.add<JsonObject>();
      jo["Control"]            = c + 1;
      jo["Pedal1"]             = (controls[c].pedal1  == PEDALS        ? 0 : controls[c].pedal1  + 1);
      jo["Button1"]            = (controls[c].button1 == LADDER_STEPS  ? 0 : controls[c].button1 + 1);
      jo["Pedal2"]             = (controls[c].pedal2  == PEDALS        ? 0 : controls[c].pedal2  + 1);
      jo["Button2"]            = (controls[c].button2 == LADDER_STEPS  ? 0 : controls[c].button2 + 1);
      jo["Led"]                = (controls[c].led     == LEDS          ? 0 : controls[c].led     + 1);
    }
  }

  if (saveActions) {
    JsonArray jbnames = jdoc["BankNames"].to<JsonArray>();
    for (byte b = 0; b < BANKS; b++) {
      JsonObject jo = jbnames.add<JsonObject>();
      jo["Bank"]              = b;
      jo["Name"]              = banknames[b];
    }


    JsonArray jactions = jdoc["Actions"].to<JsonArray>();
    for (byte b = 0; b < BANKS; b++) {
      action *act = actions[b];
      while (act != nullptr) {
        char color[8];
        JsonObject jo = jactions.add<JsonObject>();
        jo["Bank"]            = b;
        jo["Control"]         = act->control + 1;
        jo["Led"]             = (act->led == LEDS ? 0 : (act->led == 255 ? 255 : act->led + 1));
        snprintf(color, 8, "#%06x", act->color0);
        jo["Color0"]          = color;
        snprintf(color, 8, "#%06x", act->color1);
        jo["Color1"]          = color;
        jo["NameOff"]         = act->tag0;
        jo["NameOn"]          = act->tag1;
        jo["Slot"]            = act->slot;
        jo["Event"]           = eventName[act->event];
        jo["Message"]         = ActionEnumToString(act->midiMessage);
        jo["Channel"]         = act->midiChannel;
        jo["Code"]            = act->midiCode;
        jo["Value1"]          = act->midiValue1;
        jo["Value2"]          = act->midiValue2;
        jo["OSCAddress"]      = act->oscAddress;
        act = act->next;
      }
    }
  }

  if (saveInterfaces) {
    JsonArray jinterfaces = jdoc["Interfaces"].to<JsonArray>();
    for (byte i = 0; i < INTERFACES; i++) {
      JsonObject jo = jinterfaces.add<JsonObject>();
      jo["Interface"]       = i + 1;
      jo["Name"]            = interfaces[i].name;
      jo["In"]              = (IS_INTERFACE_ENABLED(interfaces[i].midiIn));
      jo["Out"]             = (IS_INTERFACE_ENABLED(interfaces[i].midiOut));
      jo["Thru"]            = (interfaces[i].midiThru  == PED_ENABLE);
      jo["Clock"]           = (interfaces[i].midiClock == PED_ENABLE);
      jo["ShowIncoming"]    = (IS_SHOW_ENABLED(interfaces[i].midiIn));
      jo["ShowOutcoming"]   = (IS_SHOW_ENABLED(interfaces[i].midiOut));
    }
  }

  if (saveSequences) {
    JsonArray jsequences = jdoc["Sequences"].to<JsonArray>();
    for (byte s = 0; s < SEQUENCES; s++) {
      for (byte t = 0; t < STEPS; t++) {
        JsonObject jo = jsequences.add<JsonObject>();
        jo["Sequence"]    = s + 1;
        jo["Step"]        = t + 1;
        jo["Message"]     = ActionEnumToString(sequences[s][t].midiMessage);
        switch (sequences[s][t].midiMessage) {
            case PED_SEQUENCE:
              jo["Channel"] = sequences[s][t].midiChannel + 1;
              break;
            default:
              jo["Channel"] = sequences[s][t].midiChannel;
              break;
          }
        jo["Code"]        = sequences[s][t].midiCode;
        jo["Value"]       = sequences[s][t].midiValue;
        jo["Led"]         = (sequences[s][t].led == LEDS ? 0 : (sequences[s][t].led == 255 ? 255 : sequences[s][t].led + 1));
        char color[8];
        snprintf(color, 8, "#%06x", sequences[s][t].color);
        jo["Color"]       = color;
      }
    }
  }

#ifndef BOARD_HAS_PSRAM
  jdoc.shrinkToFit();
  DPRINT("Memory used by JSON document: %d bytes\n", measureJson(jdoc));
#endif

  if (SPIFFS.exists(filename) && !SPIFFS.remove(filename)) {
    DPRINTLN("SPIFFS: can't remove file %s\n", filename.c_str());
    return;
  }

  if ((SPIFFS.totalBytes() - SPIFFS.usedBytes()) < (measureJson(jdoc) + 1)) {
    DPRINTLN("SPIFFS: not enough space to write file %s\n", filename.c_str());
    return;
  }

  DPRINT("Writing %s to SPIFFS ... ", filename.c_str());
  File file = SPIFFS.open(filename, FILE_WRITE);
  if (!file) {
    DPRINT("can't open file\n");
    return;
  }

  // Serialize JSON to file
  if (serializeJson(jdoc, file) == 0) {
    DPRINT("serializeJson() failed to write %d bytes\n", measureJson(jdoc));
    file.close();
    return;
  }

  file.close();
  DPRINT("done (%d bytes written)\n", measureJson(jdoc));
}


//
//  Save /globals.json configuration files to SPIFFS
//

void spiffs_save_globals() {

  spiffs_save_config("/globals.json", false, false, false, false, true);

}

//
//  Save profile configuration files to SPIFFS
//

void spiffs_save_profile(byte profile) {

  profile = constrain(profile, 0, PROFILES - 1);

  spiffs_save_config("/" + String(profile) + "/pedals.json",     false, true,  false, false, false);
  spiffs_save_config("/" + String(profile) + "/interfaces.json", false, false, true,  false, false);
  spiffs_save_config("/" + String(profile) + "/actions.json",    true,  false, false, false, false);
  spiffs_save_config("/" + String(profile) + "/sequences.json",  false, false, false, true,  false);

}


//
//  Load configuration from SPIFFS file
//

void spiffs_load_config(const String& filename, bool loadActions = true, bool loadPedals = true, bool loadControls = true, bool loadInterfaces = true, bool loadSequences = true, bool loadOptions  = true, bool append = false) {

#ifdef BOARD_HAS_PSRAM
  JsonDocument jdoc(&allocator);
#else
  JsonDocument jdoc;
#endif

  DPRINT("Reading %s from SPIFFS ... ", filename.c_str());
  File file = SPIFFS.open(filename, FILE_READ);
  if (!file) {
    DPRINT("can't open file\n");
    return;
  }

  DeserializationError err = deserializeJson(jdoc, file);
  if (err) {
    DPRINT("deserializeJson() failed with code %s\n", err.c_str());
    return;
  }

  file.close();
  DPRINT("done\n");

#ifdef DEBUG_ESP_PORT
  serializeJson(jdoc, SERIALDEBUG);
#endif
  DPRINT("\n");

  // Get a reference to the root object
  JsonObject jro = jdoc.as<JsonObject>();
  // Loop through all the key-value pairs in obj
  for (JsonPair jp : jro) {
    if (loadOptions && String(jp.key().c_str()) == String("Globals")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          host                = String((const char *)(jo["Hostname"]              | host.c_str()));
          bootMode            = jo["BootMode"]                                    | bootMode;
          bleServer           = String((const char *)(jo["BLEServer"]             | bleServer.c_str()));
          currentProfile      = jo["Profile"]                                     | currentProfile;
          wifiSSID            = String((const char *)(jo["SSID"]                  | wifiSSID.c_str()));
          wifiPassword        = String((const char *)(jo["WiFiPassword"]          | wifiPassword.c_str()));
          ssidSoftAP          = String((const char *)(jo["SSIDsoftAP"]            | ssidSoftAP.c_str()));
          passwordSoftAP      = String((const char *)(jo["PasswordSoftAP"]        | passwordSoftAP.c_str()));
          httpUsername        = String((const char *)(jo["HTTPUsername"]          | httpUsername.c_str()));
          httpPassword        = String((const char *)(jo["HTTPPassword"]          | httpPassword.c_str()));
          theme               = String((const char *)(jo["Theme"]                 | theme.c_str()));
          debounceInterval    = jo["DebounceInterval"]                            | debounceInterval;
          simultaneousGapTime = jo["SimultaneousGapTime"]                         | simultaneousGapTime;
          pressTime           = jo["PressTime"]                                   | pressTime;
          doublePressTime     = jo["DoublePressTime"]                             | doublePressTime;
          longPressTime       = jo["LongPressTime"]                               | longPressTime;
          repeatPressTime     = jo["RepeatPressTime"]                             | repeatPressTime;
          encoderSensitivity  = jo["EncoderSensitivity"]                          | encoderSensitivity;
          screenSaverTimeout  = (unsigned long)jo["ScreenSaverTimeout"] * 60000   | screenSaverTimeout;
          flipScreen          = jo["FlipScreen"]                                  | flipScreen;
          tapDanceMode        = jo["TapDanceMode"]                                | tapDanceMode;
          repeatOnBankSwitch  = jo["RepeatOnBankSwitch"]                          | repeatOnBankSwitch;
          tapDanceBank        = jo["TapDanceBank"]                                | tapDanceBank;
          leds                = jo["Leds"]                                        | leds;
          String order = jo["RGBOrder"];
          if      (order.equals("RGB")) rgbOrder = RGB;
          else if (order.equals("RBG")) rgbOrder = RBG;
          else if (order.equals("GRB")) rgbOrder = GRB;
          else if (order.equals("GBR")) rgbOrder = GBR;
          else if (order.equals("BRG")) rgbOrder = BRG;
          else if (order.equals("BGR")) rgbOrder = BGR;
          else                          rgbOrder = RGB;
          ledsOnBrightness    = jo["LedsOnBrightness"]                            | ledsOnBrightness;
          ledsOffBrightness   = jo["LedsOffBrightness"]                           | ledsOffBrightness;
          oscLocalPort        = jo["OSCLocalPort"]                                | oscLocalPort;
          oscRemoteHost       = jo["OSCRemoteHost"]                               | oscRemoteHost;
          oscRemotePort       = jo["OSCRemotePort"]                               | oscRemotePort;
        }
      }
    }
    else if (loadOptions && String(jp.key().c_str()) == String("Ladder")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          int s = jo["Step"];
          s--;
          s = constrain(s, 0, LADDER_STEPS - 1);
          ladderLevels[s]             = jo["Level"];
        }
      }
    }
    else if (loadPedals && String(jp.key().c_str()) == String("Pedals")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          int p = jo["Pedal"];
          p--;
          p = constrain(p, 0, PEDALS - 1);

          pedals[p].mode = PED_NONE;
          for (byte m = 1; m <= PED_ANALOG_LATCH; m++)
            if (pedalModeName[m] == jo["Mode"]) {
              pedals[p].mode = m;
              break;
            }

          pedals[p].invertPolarity  = (jo["InvertPolarity"] ? PED_ENABLE : PED_DISABLE);

          pedals[p].pressMode = 0;
          for (byte m = 0; m <= PED_PRESS_1_2_L; m++)
            if (pedalPressModeName[m] == jo["PressMode"]) {
              pedals[p].pressMode = m;
              break;
            }

          pedals[p].latchEmulation  = (jo["LatchEmulation"] ? PED_ENABLE : PED_DISABLE);

          pedals[p].analogResponse = PED_LINEAR;
          for (byte m = 0; m <= PED_ANTILOG; m++)
            if (pedalAnalogResponse[m] == jo["AnalogResponse"]) {
              pedals[p].analogResponse = m;
              break;
            }

          pedals[p].expZero           = jo["Min"];
          pedals[p].expMax            = jo["Max"];
          pedals[p].snapMultiplier    = jo["Easing"];
          pedals[p].activityThreshold = jo["ActivityThreshold"];
          pedals[p].autoSensing       = (jo["AutoSensing"] ? PED_ENABLE : PED_DISABLE);
        }
      }
    }
    else if (loadControls && String(jp.key().c_str()) == String("Controls")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          int c = jo["Control"];
          c = constrain(c - 1, 0, CONTROLS - 1);
          controls[c].pedal1  = jo["Pedal1"];
          controls[c].pedal1  = (controls[c].pedal1  == 0 ? PEDALS : constrain(controls[c].pedal1 - 1, 0, PEDALS - 1));
          controls[c].button1 = jo["Button1"];
          controls[c].button1 = (controls[c].button1 == 0 ? LADDER_STEPS : constrain(controls[c].button1 - 1, 0, LADDER_STEPS - 1));
          controls[c].pedal2  = jo["Pedal2"];
          controls[c].pedal2  = (controls[c].pedal2  == 0 ? PEDALS : constrain(controls[c].pedal2 - 1, 0, PEDALS - 1));
          controls[c].button2 = jo["Button2"];
          controls[c].button2 = (controls[c].button2 == 0 ? LADDER_STEPS : constrain(controls[c].button2 - 1, 0, LADDER_STEPS - 1));
          controls[c].led     = jo["Led"];
          controls[c].led     = (controls[c].led     == 0 ? LEDS : constrain(controls[c].led - 1, 0, LEDS - 1));
        }
      }
    }
    else if (loadActions && String(jp.key().c_str()) == String("BankNames")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          int b = jo["Bank"];
          b = constrain(b, 0, BANKS - 1);
          strlcpy(banknames[b], jo["Name"] | "", sizeof(banknames[b]));
        }
      }
    }
    else if (loadActions && String(jp.key().c_str()) == String("Actions")) {
      if (jp.value().is<JsonArray>()) {
        if (!append) delete_actions();
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          unsigned int red, green, blue;
          int b = jo["Bank"];
          b = constrain(b, 0, BANKS - 1);
          action *act = actions[b];
          if (act == nullptr) {
            actions[b] = (action*)malloc(sizeof(action));
            assert(actions[b] != nullptr);
            actions[b]->control        = jo["Control"];
            actions[b]->control--;
            actions[b]->control        = constrain(actions[b]->control, 0, CONTROLS - 1);
            actions[b]->led            = jo["Led"];
            actions[b]->led            = (actions[b]->led == 0 ? LEDS : (actions[b]->led == 255 ? 255 : actions[b]->led - 1));
            sscanf(jo["Color0"] | "#000000", "#%02x%02x%02x", &red, &green, &blue);
            actions[b]->color0         = ((red & 0xff) << 16) | ((green & 0xff) << 8) | (blue & 0xff);
            sscanf(jo["Color1"] | "#000000", "#%02x%02x%02x", &red, &green, &blue);
            actions[b]->color1         = ((red & 0xff) << 16) | ((green & 0xff) << 8) | (blue & 0xff);
            strlcpy(actions[b]->tag0,    jo["NameOff"] | "", sizeof(actions[b]->tag0));
            strlcpy(actions[b]->tag1,    jo["NameOn"]  | "", sizeof(actions[b]->tag1));
            actions[b]->slot           = jo["Slot"];
            actions[b]->event = PED_EVENT_NONE;
            for (byte m = 0; m < PED_EVENT_LAST; m++)
              if (eventName[m] == jo["Event"]) {
                actions[b]->event = m;
                break;
              }
            actions[b]->midiMessage    = ActionStringToEnum(jo["Message"]);
            actions[b]->midiChannel    = jo["Channel"];
            actions[b]->midiCode       = jo["Code"];
            actions[b]->midiValue1     = jo["Value1"];
            actions[b]->midiValue2     = jo["Value2"];
            strlcpy(actions[b]->oscAddress, jo["OSCAddress"] | "", sizeof(actions[b]->oscAddress));
            actions[b]->next           = nullptr;
          }
          else while (act != nullptr) {
                if (act->next == nullptr) {
                  act->next = (action*)malloc(sizeof(action));
                  assert(act->next != nullptr);
                  //if (!act->next) return;
                  act = act->next;
                  act->control        = jo["Control"];
                  act->control--;
                  act->control        = constrain(act->control, 0, CONTROLS - 1);
                  act->led            = jo["Led"];
                  act->led            = (act->led == 0 ? LEDS : (act->led == 255 ? 255 : act->led - 1));
                  sscanf(jo["Color0"] | "#000000", "#%02x%02x%02x", &red, &green, &blue);
                  act->color0         = ((red & 0xff) << 16) | ((green & 0xff) << 8) | (blue & 0xff);
                  sscanf(jo["Color1"] | "#000000", "#%02x%02x%02x", &red, &green, &blue);
                  act->color1         = ((red & 0xff) << 16) | ((green & 0xff) << 8) | (blue & 0xff);
                  strlcpy(act->tag0,    jo["NameOff"] | "", sizeof(act->tag0));
                  strlcpy(act->tag1,    jo["NameOn"]  | "", sizeof(act->tag1));
                  act->slot           = jo["Slot"];
                  act->event = PED_EVENT_NONE;
                  for (byte m = 0; m < PED_EVENT_LAST; m++)
                    if (eventName[m] == jo["Event"]) {
                      act->event = m;
                      break;
                    }
                  act->midiMessage    = ActionStringToEnum(jo["Message"]);
                  act->midiChannel    = jo["Channel"];
                  act->midiCode       = jo["Code"];
                  act->midiValue1     = jo["Value1"];
                  act->midiValue2     = jo["Value2"];
                  strlcpy(act->oscAddress, jo["OSCAddress"] | "", sizeof(act->oscAddress));
                  act->next           = nullptr;
                }
                act = act->next;
              }
        }
      }
    }
    else if (loadInterfaces && String(jp.key().c_str()) == String("Interfaces")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          int i = jo["Interface"];
          i--;
          i = constrain(i, 0, INTERFACES - 1);
          strlcpy(interfaces[i].name, jo["Name"] | "", sizeof(interfaces[i].name));
          interfaces[i].midiIn        = (jo["In"]    ? PED_ENABLE : PED_DISABLE);
          interfaces[i].midiOut       = (jo["Out"]   ? PED_ENABLE : PED_DISABLE);
          interfaces[i].midiThru      = (jo["Thru"]  ? PED_ENABLE : PED_DISABLE);
          interfaces[i].midiClock     = (jo["Clock"] ? PED_ENABLE : PED_DISABLE);
          interfaces[i].midiIn        += (jo["ShowIncoming"]  ? PED_SHOW : 0);
          interfaces[i].midiOut       += (jo["ShowOutcoming"] ? PED_SHOW : 0);
        }
      }
    }
    else if (loadSequences && String(jp.key().c_str()) == String("Sequences")) {
      if (jp.value().is<JsonArray>()) {
        JsonArray ja = jp.value();
        for (JsonObject jo : ja) {
          unsigned int red, green, blue;
          int s = jo["Sequence"];
          s--;
          s = constrain(s, 0, SEQUENCES - 1);
          int t = jo["Step"];
          t--;
          t = constrain(t, 0, STEPS - 1);
          sequences[s][t].midiMessage = ActionStringToEnum(jo["Message"]);
          sequences[s][t].midiChannel = jo["Channel"];
          switch (sequences[s][t].midiMessage) {
            case PED_SEQUENCE:
              sequences[s][t].midiChannel  = constrain(sequences[s][t].midiChannel - 1, 0, SEQUENCES - 1);
              break;
            default:
              sequences[s][t].midiChannel = constrain(sequences[s][t].midiChannel, 0, 17);
              break;
          }
          sequences[s][t].midiCode    = jo["Code"];
          sequences[s][t].midiCode    = constrain(sequences[s][t].midiCode,    0, MIDI_RESOLUTION - 1);
          sequences[s][t].midiValue   = jo["Value"];
          sequences[s][t].midiValue   = constrain(sequences[s][t].midiValue,  0, MIDI_RESOLUTION - 1);
          sequences[s][t].led         = jo["Led"];
          sequences[s][t].led         = (sequences[s][t].led == 0 ? LEDS : (sequences[s][t].led == 255 ? 255 : sequences[s][t].led - 1));
          sscanf(jo["Color"] | "#000000", "#%02x%02x%02x", &red, &green, &blue);
          sequences[s][t].color       = ((red & 0xff) << 16) | ((green & 0xff) << 8) | (blue & 0xff);
        }
      }
    }
  }
}


//
//  Load /globals.json configuration files from SPIFFS
//

void spiffs_load_globals() {

  spiffs_load_config("/globals.json", false, false, false, false, true);

}

//
//  Load profile configuration files from SPIFFS
//

void spiffs_load_profile(byte profile) {

  profile = constrain(profile, 0, PROFILES - 1);

  spiffs_load_config("/" + String(profile) + "/pedals.json",     false, true,  false, false, false);
  spiffs_load_config("/" + String(profile) + "/interfaces.json", false, false, true,  false, false);
  spiffs_load_config("/" + String(profile) + "/actions.json",    true,  false, false, false, false);
  spiffs_load_config("/" + String(profile) + "/sequences.json",  false, false, false, true,  false);

}


//
//  Load factory deafult value for banks, pedals and interfaces
//
void load_factory_default()
{
  // host               = getChipId();
  host               = "pedalino";
  bootMode           = PED_BOOT_NORMAL;
  bleServer          = "PedalinoBLE";
  wifiSSID           = "";
  wifiPassword       = "";
  // ssidSoftAP         = String("Pedalino-") + getChipId();
  ssidSoftAP         = String("Pedalino");
  // passwordSoftAP     = getChipId();
  passwordSoftAP     = "pedalino";
  httpUsername       = "";
  httpPassword       = "";
  theme              = "phoenix";
  currentBank        = 1;
  currentProfile     = 0;
  pressTime          = PED_PRESS_TIME;
  doublePressTime    = PED_DOUBLE_PRESS_TIME;
  longPressTime      = PED_LONG_PRESS_TIME;
  repeatPressTime    = PED_REPEAT_PRESS_TIME;
  encoderSensitivity = 5;
  leds               = LEDS;
  rgbOrder           = GRB;
  ledsOnBrightness   = 5;
  ledsOffBrightness  = 1;
  tapDanceMode       = false;
  repeatOnBankSwitch = false;
  tapDanceBank       = true;

  for (byte b = 0; b < BANKS; b++) {
    memset(banknames[b], 0, MAXBANKNAME+1);
    actions[b] = nullptr;
  }
  strlcpy(banknames[0], "Global", MAXBANKNAME+1);

  for (byte p = 0; p < PEDALS; p++)
    pedals[p] = {PED_DISABLE,    // autosensing
                 PED_MOMENTARY1, // mode
                 PED_PRESS_1,    // press mode
                 PED_DISABLE,    // invert polarity
                 PED_DISABLE,    // latch emulation
                 0,              // map function
                 ADC_RESOLUTION * 10 / 100,  // expression pedal zero
                 ADC_RESOLUTION * 90 / 100,  // expression pedal max
                 0.01,           // snap multiplier
                 8.0,            // activity threshold
                 1.0,
                 0.8,
                 20,
                 10,
                 12,
                 3.2,
                 0,              // last state of switch 1
                 0,              // last state of switch 2
                 millis(),       // last time switch 1 status changed
                 millis(),       // last time switch 2 status changed
                 0, 0, 0, 0, 0, 0,   // latch emulation status
                 nullptr, nullptr, nullptr, nullptr, nullptr, nullptr,
                 nullptr,
                 nullptr,
                 nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr, nullptr,
                 nullptr, nullptr, nullptr, nullptr,
                 nullptr
                };
  action *act;
  act = actions[0] = (action*)malloc(sizeof(action));
  act->tag0[0]      = 0;
  act->tag1[0]      = 0;
  act->control      = 14;
  act->led          = LEDS;
  act->color0       = CRGB::Black;
  act->color1       = CRGB::Black;
  act->event        = PED_EVENT_CLICK;
  act->midiMessage  = PED_ACTION_PROFILE_PLUS;
  act->midiChannel  = 1;
  act->midiCode     = 0;
  act->midiValue1   = 1;
  act->midiValue2   = PROFILES;
  act->oscAddress[0] = 0;
  act->slot         = SLOTS;
  act->next         = (action*)malloc(sizeof(action));
  act = act->next;
  act->tag0[0]      = 0;
  act->tag1[0]      = 0;
  act->control      = 14;
  act->led          = LEDS;
  act->color0       = CRGB::Black;
  act->color1       = CRGB::Black;
  act->event        = PED_EVENT_LONG_PRESS;
  act->midiMessage  = PED_ACTION_DEVICE_INFO;
  act->midiChannel  = 1;
  act->midiCode     = 0;
  act->midiValue1   = 0;
  act->midiValue2   = 127;
  act->oscAddress[0] = 0;
  act->slot         = SLOTS;
  act->next         = nullptr;
  create_banks();

  for (byte i = 0; i < CONTROLS; i++) {
    controls[i].pedal1  = PEDALS;
    controls[i].button1 = LADDER_STEPS;
    controls[i].pedal2  = PEDALS;
    controls[i].button2 = LADDER_STEPS;
    controls[i].led     = LEDS;
  }

  byte c = 0;
  for (byte p = 0; p < PEDALS; p++) {
    byte b = 0;
    switch (pedals[p].mode) {
      case PED_NONE:                b = 0; break;
      case PED_MOMENTARY1:
      case PED_LATCH1:              b = 1; break;
      case PED_MOMENTARY2:
      case PED_LATCH2:
      case PED_ANALOG_MOMENTARY:
      case PED_ANALOG_LATCH:        b = 2; break;
      case PED_MOMENTARY3:          b = 3; break;
      case PED_LADDER:              b = 6; break;
      default:                      b = 1; break;
    }
    for (byte i = 0; i < b; i++) {
      controls[c].pedal1  = p;
      controls[c].button1 = i;
      controls[c].pedal2  = PEDALS;
      controls[c].button2 = LADDER_STEPS;
      controls[c].led     = LEDS;
      c++;
    }
  }
  c = 6 * LADDER_STEPS;
  for (byte p = 6; p < PEDALS; p++) {
    controls[c].pedal1  = p;
    controls[c].button1 = 0;
    controls[c].pedal2  = PEDALS;
    controls[c].button2 = LADDER_STEPS;
    controls[c].led     = LEDS;
    c++;
  }
  for (byte i = 0; i < INTERFACES; i++) {
    interfaces[i].midiIn      = PED_ENABLE;
    interfaces[i].midiOut     = PED_ENABLE;
    interfaces[i].midiThru    = PED_DISABLE;
    interfaces[i].midiClock   = PED_DISABLE;
  }
  interfaces[PED_USBMIDI].midiIn = PED_DISABLE;
  interfaces[PED_DINMIDI].midiIn = PED_DISABLE;

  for (byte s = 0; s < SEQUENCES; s++) {
    for (byte t = 0; t < STEPS; t++) {
      sequences[s][t].midiMessage  = PED_EMPTY;
      sequences[s][t].midiChannel  = 1;
      sequences[s][t].midiCode     = 0;
      sequences[s][t].midiValue    = 0;
    }
  }

  // TC-Helicon Switch 6
  ladderLevels[0] = 352/2;
  ladderLevels[1] = 533/2;
  ladderLevels[2] = 640/2;
  ladderLevels[3] = 723/2;
  ladderLevels[4] = 806/2;
  ladderLevels[5] = 908/2;
  ladderLevels[6] = ADC_RESOLUTION - 1;
}

//void eeprom_update_device_name(const String& name = getChipId())
void eeprom_update_device_name(const String& name = "pedalino")
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putString("Device Name", name);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][Device Name]: %s\n", name.c_str());
#else
  host = name;
  spiffs_save_globals();
#endif
}

void eeprom_update_boot_mode(byte mode = bootMode)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUChar("Boot Mode", mode);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][Boot Mode]: %d\n", mode);
#else
  spiffs_save_globals();
#endif
}

void eeprom_update_ble_server(const String& server = bleServer)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putString("BLE Server", server);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][BLE Server]:   %s\n", server.c_str());
#else
  bleServer = server;
  spiffs_save_globals();
#endif
}

void eeprom_update_sta_wifi_credentials(const String& ssid = wifiSSID, const String& pass = wifiPassword)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putString("STA SSID", ssid);
  preferences.putString("STA Password", pass);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][STA SSID]:     %s\n", ssid.c_str());
  DPRINT("[NVS][Global][STA Password]: %s\n", pass.c_str());
#else
  wifiSSID     = ssid;
  wifiPassword = pass;
  spiffs_save_globals();
#endif
}

void eeprom_update_ap_wifi_credentials(const String& ssid = "Pedalino", const String& pass = "pedalino")
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putString("AP SSID", ssid);
  preferences.putString("AP Password", pass);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][AP SSID]:     %s\n", ssid.c_str());
  DPRINT("[NVS][Global][AP Password]: %s\n", pass.c_str());
#else
  ssidSoftAP     = ssid;
  passwordSoftAP = pass;
  spiffs_save_globals();
#endif
}

void eeprom_update_login_credentials(const String& username = "", const String& password = "")
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putString("HTTP Username", username);
  preferences.putString("HTTP Password", password);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][HTTP Username]: %s\n", username.c_str());
  DPRINT("[NVS][Global][HTTP Password]: %s\n", password.c_str());
#else
  httpUsername = username;
  httpPassword = password;
  spiffs_save_globals();
#endif
}

void eeprom_update_current_profile(byte profile = 0)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUChar("Current Profile", profile);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][Current Profile]: %d\n", profile);
#else
  currentProfile = profile;
  spiffs_save_globals();
#endif
}

void eeprom_update_flip_screen(bool enable = false)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putBool("Flip Screen", enable);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[Flip Screen]: %d\n", enable);
#else
  flipScreen = enable;
  spiffs_save_globals();
#endif
}

void eeprom_update_screen_saver(unsigned long timeout = screenSaverTimeout)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putULong("Screen Timeout", timeout);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[Screen Timeout]: %d\n", timeout);
#else
  screenSaverTimeout = timeout;
  spiffs_save_globals();
#endif
}

void eeprom_update_tap_dance(bool enable = false)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putBool("Tap Dance Mode", enable);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[Tap Dance Mode]: %d\n", enable);
#else
  tapDanceMode = enable;
  spiffs_save_globals();
#endif
}

void eeprom_update_repeat_on_bank_switch(bool enable = false)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putBool("Bank Switch", enable);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[Bank Switch]: %d\n", enable);
#else
  repeatOnBankSwitch = enable;
  spiffs_save_globals();
#endif
}

void eeprom_update_press_time(long p1 = DEBOUNCE_INTERVAL,
                              long p2 = PED_SIMULTANEOUS_GAP,
                              long p3 = PED_PRESS_TIME,
                              long p4 = PED_DOUBLE_PRESS_TIME,
                              long p5 = PED_LONG_PRESS_TIME,
                              long p6 = PED_REPEAT_PRESS_TIME)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putLong("Debounce Time",   p1);
  preferences.putLong("SimultaneousGap", p2);
  preferences.putLong("Single Time",     p3);
  preferences.putLong("Double Time",     p4);
  preferences.putLong("Long   Time",     p5);
  preferences.putLong("Repeat Time",     p6);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][Debounce Time]   : %ld\n", p1);
  DPRINT("[NVS][Global][SimultaneousGap] : %ld\n", p2);
  DPRINT("[NVS][Global][Single Time]     : %ld\n", p3);
  DPRINT("[NVS][Global][Double Time]     : %ld\n", p4);
  DPRINT("[NVS][Global][Long   Time]     : %ld\n", p5);
  DPRINT("[NVS][Global][Repeat Time]     : %ld\n", p6);
#else
  pressTime       = p1;
  doublePressTime = p2;
  longPressTime   = p3;
  repeatPressTime = p4;
  spiffs_save_globals();
#endif
}

void eeprom_update_theme(const String& t = "phoenix")
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putString("Bootstrap Theme", t);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][Bootstrap Theme]: %s\n", t.c_str());
#else
  theme = t;
  spiffs_save_globals();
#endif
}

void eeprom_update_ladder()
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putBytes("Ladder", ladderLevels, sizeof(ladderLevels));
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global][Ladder]:\n");
  for (byte i = 0; i < LADDER_STEPS + 1; i++) {
    DPRINT("Level %d: %d\n", i + 1, ladderLevels[i]);
  }
#else
  spiffs_save_globals();
#endif
}

void eeprom_update_encoder_sensitivity(byte sensitivity = 5)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUChar("Encoder Sensit", sensitivity);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[Encoder Sensit]: %d\n", sensitivity);
#else
  encoderSensitivity = sensitivity;
  spiffs_save_globals();
#endif
}

void eeprom_update_leds(byte manyleds = 20)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUChar("Leds", manyleds);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[Leds]:  %d\n", manyleds);
#else
  leds  = manyleds,
  spiffs_save_globals();
#endif
}

void eeprom_update_rgb_order(EOrder order = RGB)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUChar("RGB Order", order);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[RGB Order]:  %d\n", order);
#else
  rgbOrder = order;
  spiffs_save_globals();
#endif
}

void eeprom_update_leds_brightness(byte on = 5, byte off = 1)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUChar("LedsOnBright", on);
  preferences.putUChar("LedsOffBright", off);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[LedsOnBright]:  %d\n", on);
  DPRINT("[NVS][Global[LedsOffBright]: %d\n", off);
#else
  ledsOnBrightness  = on,
  ledsOffBrightness = off;
  spiffs_save_globals();
#endif
}

void eeprom_update_osc_parameters(unsigned int localport = 8000, String remotehost = "255.255.255.255", unsigned int remoteport = 9000)
{
#ifdef NVS
  DPRINT("Updating NVS ... ");
  preferences.begin("Global", false);
  preferences.putUInt("OSCLocalPort", localport);
  preferences.putString("OSCRemoteHost", remotehost);
  preferences.putUInt("OSCRemotePort", remoteport);
  preferences.end();
  DPRINT("done\n");
  DPRINT("[NVS][Global[OSCLocalPort]:  %d\n", localport);
  DPRINT("[NVS][Global[OSCRemoteHost]: %s\n", remotehost.c_str());
  DPRINT("[NVS][Global[OSCRemotePort]: %d\n", remoteport);
#else
  oscLocalPort = localport;
  oscRemoteHost = remotehost;
  oscRemotePort = remoteport;
  spiffs_save_globals();
#endif
}

void eeprom_update_profile(byte profile = currentProfile)
{
#ifdef NVS
  DPRINT("Updating NVS Profile ");

  switch (profile) {
    case 0:
      preferences.begin("A", false);
      DPRINT("A");
      break;
    case 1:
      preferences.begin("B", false);
      DPRINT("B");
      break;
    case 2:
      preferences.begin("C", false);
      DPRINT("C");
      break;
  }

  pedal pedals_copy[PEDALS];
  memcpy(pedals_copy, pedals, sizeof(pedals));
  for (byte i = 0; i < PEDALS; i++) {
    pedals_copy[i].pedalValue[0] = 0;
    pedals_copy[i].pedalValue[1] = 0;
    pedals_copy[i].lastUpdate[0] = 0;
    pedals_copy[i].lastUpdate[1] = 0;
    for (byte j = 0; j < ADC_INPUTS; j++)
      pedals_copy[i].analogPedal[j] = nullptr;
    pedals_copy[i].jogwheel      = nullptr;
    pedals_copy[i].buttonConfig  = nullptr;
    for (byte a = 0; a < 4; a++)
      pedals_copy[i].ads[a]      = nullptr;
    for (byte s = 0; s < LADDER_STEPS; s++) {
      pedals_copy[i].latchStatus[s] = 0;
      pedals_copy[i].button[s]      = nullptr;
    }
    if (pedals_copy[i].autoSensing) {
      pedals_copy[i].expZero     = ADC_RESOLUTION - 1;
      pedals_copy[i].expMax      = 0;
    }
  };
  preferences.putBytes("Pedals",      &pedals_copy, sizeof(pedals));
  preferences.putBytes("Controls",    &controls,    sizeof(controls));
  preferences.putBytes("BankNames",   &banknames,   sizeof(banknames));
  preferences.putBytes("Interfaces",  &interfaces,  sizeof(interfaces));
  preferences.putBytes("Sequences",   &sequences,   sizeof(sequences));
  preferences.putUChar("Current Bank", currentBank);
  preferences.putUChar("Current MTC", currentMidiTimeCode);

  for (byte b = 0; b < BANKS; b++) {
    char    label[10];
    byte    i = 0;
    action *act = actions[b];
    while (act != nullptr) {
      memset(label, 0, 10);
      sprintf(label, "%d.%d", b, i);
      preferences.putBytes(label, act, sizeof(action));
      act = act->next;
      i++;
    }
    memset(label, 0, 10);
    sprintf(label, "Size%d", b);
    preferences.putUChar(label, i);
  }
  preferences.end();
  DPRINT(" ... done\n");
#else
  spiffs_save_profile(profile);
#endif
}

void eeprom_update_current_bank(byte profile = currentProfile, byte bank = currentBank)
{
#ifdef NVS
  DPRINT("Updating NVS Profile ");

  switch (profile) {
    case 0:
      preferences.begin("A", false);
      DPRINT("A");
      break;
    case 1:
      preferences.begin("B", false);
      DPRINT("B");
      break;
    case 2:
      preferences.begin("C", false);
      DPRINT("C");
      break;
  }
  DPRINT(" ...\n");
  preferences.putUChar("Current Bank", bank);
  preferences.end();
  DPRINT("[NVS][Current Bank]:  %d\n", bank);
  DPRINT("done\n");
#else
  currentProfile = profile;
  currentBank    = bank;
  spiffs_save_globals();
#endif
}

void eeprom_read_global()
{
#ifdef NVS
  DPRINT("Reading NVS Global ... ");
  if (preferences.begin("Global", true)) {
    host                = preferences.getString("Device Name");
    bootMode            = preferences.getUChar("Boot Mode");
    bleServer           = preferences.getString("BLE Server");
    wifiSSID            = preferences.getString("STA SSID");
    wifiPassword        = preferences.getString("STA Password");
    ssidSoftAP          = preferences.getString("AP SSID");
    passwordSoftAP      = preferences.getString("AP Password");
    httpUsername        = preferences.getString("HTTP Username");
    httpPassword        = preferences.getString("HTTP Password");
    theme               = preferences.getString("Bootstrap Theme");
    currentProfile      = preferences.getUChar("Current Profile");
    flipScreen          = preferences.getBool("Flip Screen");
    screenSaverTimeout  = preferences.getULong("Screen Timeout");
    tapDanceMode        = preferences.getBool("Tap Dance Mode");
    repeatOnBankSwitch  = preferences.getBool("Bank Switch");
    debounceInterval    = preferences.getLong("Debounce Time");
    simultaneousGapTime = preferences.getLong("SimultaneousGap");
    pressTime           = preferences.getLong("Single Time");
    doublePressTime     = preferences.getLong("Double Time");
    longPressTime       = preferences.getLong("Long   Time");
    repeatPressTime     = preferences.getLong("Repeat Time");
    encoderSensitivity  = preferences.getUChar("Encoder Sensit");
    leds                = preferences.getUChar("Leds");
      if (leds < 1) leds = 1;
    rgbOrder            = (EOrder)preferences.getUChar("RGB Order");
    ledsOnBrightness    = preferences.getUChar("LedsOnBright");
    ledsOffBrightness   = preferences.getUChar("LedsOffBright");
    oscLocalPort        = preferences.getUInt("OSCLocalPort");
    oscRemoteHost       = preferences.getString("OSCRemoteHost");
    oscRemotePort       = preferences.getUInt("OSCRemotePort");
    preferences.getBytes("Ladder", ladderLevels, sizeof(ladderLevels));
    preferences.end();
    DPRINT("done\n");
    DPRINT("[NVS][Global][Device Name]:      %s\n", host.c_str());
    DPRINT("[NVS][Global][Boot Mode]:        %d\n", bootMode);
    DPRINT("[NVS][Global][BLE Server]:       %s\n", bleServer.c_str());
    DPRINT("[NVS][Global][STA SSID]:         %s\n", wifiSSID.c_str());
    DPRINT("[NVS][Global][STA Password]:     %s\n", wifiPassword.c_str());
    DPRINT("[NVS][Global][AP SSID]:          %s\n", ssidSoftAP.c_str());
    DPRINT("[NVS][Global][AP Password]:      %s\n", passwordSoftAP.c_str());
    DPRINT("[NVS][Global][HTTP Username]:    %s\n", httpUsername.c_str());
    DPRINT("[NVS][Global][HTTP Password]:    %s\n", httpPassword.c_str());
    DPRINT("[NVS][Global][Bootstrap Theme]:  %s\n", theme.c_str());
    DPRINT("[NVS][Global][Current Profile]:  %d\n", currentProfile);
    DPRINT("[NVS][Global][Flip Screen]:      %d\n", flipScreen);
    DPRINT("[NVS][Global][Screen Timeout]:   %d\n", screenSaverTimeout);
    DPRINT("[NVS][Global][Tap Dance Mode]:   %d\n", tapDanceMode);
    DPRINT("[NVS][Global][Bank Switch]:      %d\n", repeatOnBankSwitch);
    DPRINT("[NVS][Global][Debounce Time]:    %ld\n", debounceInterval);
    DPRINT("[NVS][Global][SimultaneousGap]:  %ld\n", simultaneousGapTime);
    DPRINT("[NVS][Global][Single Time]:      %ld\n", pressTime);
    DPRINT("[NVS][Global][Double Time]:      %ld\n", doublePressTime);
    DPRINT("[NVS][Global][Long   Time]:      %ld\n", longPressTime);
    DPRINT("[NVS][Global][Repeat Time]:      %ld\n", repeatPressTime);
    DPRINT("[NVS][Global][Encoder Sensit]:   %d\n", encoderSensitivity);
    DPRINT("[NVS][Global][Leds]:             %d\n", leds);
    DPRINT("[NVS][Global][RGB Order]:        %d\n", rgbOrder);
    DPRINT("[NVS][Global][LedsOnBright]:     %d\n", ledsOnBrightness);
    DPRINT("[NVS][Global][LedsOffBright]:    %d\n", ledsOffBrightness);
    DPRINT("[NVS][Global][OSCLocalPort]:     %d\n", oscLocalPort);
    DPRINT("[NVS][Global][OSCRemoteHost]:    %s\n", oscRemoteHost.c_str());
    DPRINT("[NVS][Global][OSCRemotePort]:    %d\n", oscRemotePort);
    for (byte i = 0; i < LADDER_STEPS; i++) {
      DPRINT("[NVS][Global][Ladder]:           Ladder %d Level %d\n", i + 1, ladderLevels[i]);
    }
  }
  else {
    DPRINT("NVS open error ... using default values\n");
  }
#else
  spiffs_load_globals();
  if (leds < 1) leds = 1; 
#endif
}

void eeprom_read_profile(byte profile = currentProfile)
{
#ifdef NVS
  delete_actions();
  controller_delete();
  DPRINT("Reading NVS Profile ");
  switch (profile) {
    case 0:
      preferences.begin("A", true);
      DPRINT("A");
      break;
    case 1:
      preferences.begin("B", true);
      DPRINT("B");
      break;
    case 2:
      preferences.begin("C", true);
      DPRINT("C");
      break;
  }
  DPRINT(" ... ");

  preferences.getBytes("Pedals",      &pedals,      sizeof(pedals));
  for (byte i = 0; i < PEDALS; i++) {
    pedals[i].pedalValue[0] = 0;
    pedals[i].pedalValue[1] = 0;
    pedals[i].lastUpdate[0] = 0;
    pedals[i].lastUpdate[1] = 0;
    for (byte j = 0; j < ADC_INPUTS; j++)
      pedals[i].analogPedal[j] = nullptr;
    pedals[i].analogPad     = nullptr;
    pedals[i].jogwheel      = nullptr;
    pedals[i].buttonConfig  = nullptr;
    for (byte s = 0; s < LADDER_STEPS; s++) {
      pedals[i].latchStatus[s] = 0;
      pedals[i].button[s]      = nullptr;
    }
    if (pedals[i].autoSensing) {
      pedals[i].expZero     = ADC_RESOLUTION - 1;
      pedals[i].expMax      = 0;
    }
  }
  preferences.getBytes("Controls",    &controls,    sizeof(controls));
  preferences.getBytes("BankNames",   &banknames,   sizeof(banknames));
  preferences.getBytes("Interfaces",  &interfaces,  sizeof(interfaces));
  preferences.getBytes("Sequences",   &sequences,   sizeof(sequences));
  currentBank         = preferences.getUChar("Current Bank");
  currentMidiTimeCode = preferences.getUChar("Current MTC");

  for (byte b = 0; b < BANKS; b++) {
    char label[10];
    memset(label, 0, 10);
    sprintf(label, "Size%d", b);
    byte action_size = preferences.getUChar(label);
    action *act = nullptr;
    for (byte i = 0; i < action_size; i++) {
      memset(label, 0, 10);
      sprintf(label, "%d.%d", b, i);
      action *a = (action*)malloc(sizeof(action));
      assert(a != nullptr);
      int n = preferences.getBytes(label, a, sizeof(action));
      assert(n == sizeof(action));
      a->next = nullptr;
      if (act == nullptr)
        act = actions[b] = a;
      else {
        act->next = a;
        act = act->next;
      }
    }
  }

  create_banks();
  preferences.end();
  DPRINT("done\n");
#else
  delete_actions();
  delete_controller();
  spiffs_load_profile(profile);
  create_banks();
#endif
}

void eeprom_update_globals()
{
#ifdef NVS
  eeprom_update_device_name(host);
  eeprom_update_boot_mode(bootMode);
  eeprom_update_ble_server(bleServer);
  eeprom_update_sta_wifi_credentials(wifiSSID, wifiPassword);
  eeprom_update_ap_wifi_credentials(ssidSoftAP, passwordSoftAP);
  eeprom_update_login_credentials(httpUsername, httpPassword);
  eeprom_update_theme(theme);
  eeprom_update_current_profile(currentProfile);
  eeprom_update_screen_saver(screenSaverTimeout);
  eeprom_update_flip_screen(flipScreen);
  eeprom_update_tap_dance(tapDanceMode);
  eeprom_update_repeat_on_bank_switch(repeatOnBankSwitch);
  eeprom_update_press_time(debounceInterval, simultaneousGapTime, pressTime, doublePressTime, longPressTime, repeatPressTime);
  eeprom_update_ladder();
  eeprom_update_leds(leds);
  eeprom_update_rgb_order(rgbOrder);
  // eeprom_update_encoder_sensitivity(encoderSensitivity);
  eeprom_update_leds_brightness(ledsOnBrightness, ledsOffBrightness);
  eeprom_update_osc_parameters(oscLocalPort, oscRemoteHost, oscRemotePort);
#else
  spiffs_save_globals();
#endif
}

void eeprom_update_all()
{
  eeprom_update_globals();
  for (byte p = 0; p < PROFILES; p++)
    eeprom_update_profile(p);
}

void eeprom_initialize()
{
#ifdef NVS
  // Remove all preferences under the opened namespace
  preferences.begin("Global", false);
  preferences.clear();
  preferences.end();
  preferences.begin("A", false);
  preferences.clear();
  preferences.end();
  preferences.begin("B", false);
  preferences.clear();
  preferences.end();
  preferences.begin("C", false);
  preferences.clear();
  preferences.end();
  load_factory_default();
  eeprom_update_device_name();
  eeprom_update_boot_mode();
  eeprom_update_ble_server();
  eeprom_update_sta_wifi_credentials();
  eeprom_update_ap_wifi_credentials();
  eeprom_update_login_credentials();
  eeprom_update_theme();
  eeprom_update_current_profile();
  eeprom_update_screen_saver();
  eeprom_update_flip_screen();
  eeprom_update_tap_dance();
  eeprom_update_repeat_on_bank_switch();
  eeprom_update_press_time();
  eeprom_update_ladder();
  eeprom_update_encoder_sensitivity();
  eeprom_update_rgb_order();
  eeprom_update_leds_brightness();
  eeprom_update_osc_parameters();
  for (byte p = 0; p < PROFILES; p++)
    eeprom_update_profile(p);
#else
  load_factory_default();
  spiffs_remove_globals();
  for (byte p = 0; p < PROFILES; p++)
    spiffs_remove_profile(p);
  spiffs_save_globals();
  for (byte p = 0; p < PROFILES; p++)
    spiffs_save_profile(p);
#endif
}

void eeprom_init_or_erase()
{
  load_factory_default();
#ifdef NVS
  esp_err_t err = nvs_flash_init_partition("nvs");
  switch (err) {
    case ESP_OK:
      DPRINT("'nvs' partition was successfully initialized\n");
      if (preferences.begin("Global", true)) {
        preferences.end();
        break;
      }
      DPRINT("[NVS][Global] not found\n");
    case ESP_ERR_NVS_NO_FREE_PAGES:
    case ESP_ERR_NVS_NEW_VERSION_FOUND:
      // NVS partition was truncated and needs to be erased
      ESP_ERROR_CHECK(nvs_flash_erase());
      DPRINT("'nvs' partition formatted\n");
      ESP_ERROR_CHECK(nvs_flash_init());
      eeprom_initialize();
      break;
    case ESP_ERR_NOT_FOUND:
      DPRINT("'nvs' partition not found\n");
      break;
  }
#endif
}


void send_configuration_sysex()
{
#ifdef NVS
  esp_partition_iterator_t pi = esp_partition_find(ESP_PARTITION_TYPE_DATA, ESP_PARTITION_SUBTYPE_DATA_NVS, "nvs");
  if (pi != NULL) {
    const esp_partition_t* nvs = esp_partition_get(pi);

    DPRINT("Sending configuration via MIDI SysEx (payload %d bytes) ... ", nvs->size);

    const byte payload = 62;
    byte buf[payload];

    for (unsigned i = 0; i < nvs->size / (payload - 4) + 1; i++) {
      memset(buf, 0, payload);
      buf[0] = 0x7D;              // Manufacturer ID for educational use only
      buf[1] = i / (128*128);     // MSB of packet number
      buf[2] = (i / 128) % 128;   //     of packet number
      buf[3] = i % 128;           // LSB of packet number
      if (esp_partition_read(nvs, (payload-4)*i, &buf[4], payload-4) == ESP_OK) {
        for (unsigned j = 0; j < payload; j++) {
          buf[j] &= 0x7F;
        }
        DPRINT("%d %d %d\n", buf[1], buf[2], buf[3]);
        BLESendSystemExclusive(buf, payload);
        ipMIDISendSystemExclusive(buf, payload);
        AppleMidiSendSystemExclusive(buf, payload);
        delay(100);
      } else {
        DPRINT("Cannot read 'nvs' partition\n");
      }
    }
    DPRINT("done\n");

    esp_partition_iterator_release(pi);
  } else {
    DPRINT("'nvs' partition not found\n");
  }
#else

#endif
}