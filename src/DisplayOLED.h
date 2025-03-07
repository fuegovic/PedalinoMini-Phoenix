/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/

#include "Fonts.h"
#include "DisplayConstants.h"

// #if defined(HELTEC_WIFI_KIT_32)
// #include <oled/SSD1306Wire.h>
// #include <oled/OLEDDisplayUi.h>
// #define OLED_I2C_ADDRESS  0x3c
// #define OLED_I2C_SDA      SDA_OLED
// #define OLED_I2C_SCL      SCL_OLED
// SSD1306Wire               display(0x3c, SDA_OLED, SCL_OLED, RST_OLED, GEOMETRY_128_64);
// #endif
// #if defined(TTGO_T_EIGHT)
// #include <SH1106Wire.h>
// #include <OLEDDisplayUi.h>
// #define OLED_I2C_ADDRESS  0x3c
// #define OLED_I2C_SDA      21
// #define OLED_I2C_SCL      22
// SH1106Wire                display(OLED_I2C_ADDRESS, OLED_I2C_SDA, OLED_I2C_SCL);
// #endif
// #if defined(SSH1106WIRE)
// #include <SH1106Wire.h>
// #include <OLEDDisplayUi.h>
// #define OLED_I2C_ADDRESS  0x3c
// #define OLED_I2C_SDA      SDA
// #define OLED_I2C_SCL      SCL
// SH1106Wire                display(OLED_I2C_ADDRESS, OLED_I2C_SDA, OLED_I2C_SCL);
// #endif
#if defined(SSD1306WIRE)
#include <SSD1306Wire.h>
#include <OLEDDisplayUi.h>
#define OLED_I2C_ADDRESS  0x3c
#define OLED_I2C_SDA      SDA
#define OLED_I2C_SCL      SCL
SSD1306Wire               display(OLED_I2C_ADDRESS, OLED_I2C_SDA, OLED_I2C_SCL);
#endif

#define DISPLAY_WIDTH   display.getWidth()
#define DISPLAY_HEIGHT  display.getHeight()

#include <WiFi.h>

OLEDDisplayUi ui(&display);
bool          uiUpdate = true;

//------------------------------------------------------------------------------
// Display state variables and frame tracking
//------------------------------------------------------------------------------
int currentFrame = 0;          // Tracks currently displayed frame
bool manualTransition = true;  // Controls if transitions happen automatically or manually

//------------------------------------------------------------------------------
// Progress bar and display state variables
//------------------------------------------------------------------------------
String progressTitle1 = "";    // First title line for progress bar
String progressTitle2 = "";    // Second title line for progress bar
int progressBarValue = 0;      // Current progress value
int progressBarTotal = 100;    // Maximum progress value

//------------------------------------------------------------------------------
// Buffer Management for Double Buffering
//------------------------------------------------------------------------------

// Flag to indicate when a frame is ready
bool bufferReady = false;

// Begin a new frame drawing cycle
void begin_frame() {
  // Clear the internal buffer
  display.clear();
}

// Complete frame drawing and mark buffer as ready
void end_frame() {
  // Mark buffer as ready for display
  bufferReady = true;
}

// Update the physical display if buffer is ready
void update_display() {
  if (bufferReady) {
    // Send buffer to display hardware
    display.display();
    // Reset flag
    bufferReady = false;
  }
}

//------------------------------------------------------------------------------
// Modified Display Drawing Functions (Double Buffered)
//------------------------------------------------------------------------------

// Clear display with double buffering
void display_clear() {
  begin_frame();
  // Nothing to draw - buffer already cleared
  end_frame();
  update_display();
}

// Display progress bar with double buffering
void display_progress_bar_title(const String& title) {
  progressTitle1 = title;
  progressTitle2 = "";
  progressBarValue = 0;
  progressBarTotal = 100;
  
  begin_frame();
  display.setFont(ArialMT_Plain_10);
  display.setTextAlignment(TEXT_ALIGN_CENTER_BOTH);
  display.drawString(display.getWidth() / 2, display.getHeight() / 2 - 10, title.c_str());
  display.drawProgressBar(0, 32, 127, 8, 0);
  end_frame();
  update_display();
}

void display_progress_bar_title2(const String& title1, const String& title2) {
  progressTitle1 = title1;
  progressTitle2 = title2;
  progressBarValue = 0;
  progressBarTotal = 100;
  
  begin_frame();
  display.setTextAlignment(TEXT_ALIGN_CENTER);
  display.setFont(ArialMT_Plain_10);
  display.drawString(display.getWidth() / 2, 0, title1.c_str());
  if (display.getStringWidth(title2) <= display.width()) display.setFont(ArialMT_Plain_16);
  display.drawString(display.getWidth() / 2, 10, title2.c_str());
  end_frame();
  update_display();
}

void display_progress_bar_update(unsigned int progress, unsigned int total) {
  progressBarValue = progress;
  progressBarTotal = total;
  
  begin_frame();
  // Redraw titles to keep them visible
  display.setTextAlignment(TEXT_ALIGN_CENTER);
  display.setFont(ArialMT_Plain_10);
  display.drawString(display.getWidth() / 2, 0, progressTitle1.c_str());
  
  if (progressTitle2.length() > 0) {
    if (display.getStringWidth(progressTitle2) <= display.width()) {
      display.setFont(ArialMT_Plain_16);
    }
    display.drawString(display.getWidth() / 2, 10, progressTitle2.c_str());
  }
  
  // Draw progress bar
  display.drawProgressBar(0, 32, 127, 8, 100*progress/total);
  end_frame();
  update_display();
}

void display_progress_bar_2_update(unsigned int progress, unsigned int total) {
  begin_frame();
  // Redraw titles
  display.setTextAlignment(TEXT_ALIGN_CENTER);
  display.setFont(ArialMT_Plain_10);
  display.drawString(display.getWidth() / 2, 0, progressTitle1.c_str());
  
  if (progressTitle2.length() > 0) {
    if (display.getStringWidth(progressTitle2) <= display.width()) {
      display.setFont(ArialMT_Plain_16);
    }
    display.drawString(display.getWidth() / 2, 10, progressTitle2.c_str());
  }
  
  // Draw both progress bars
  display.drawProgressBar(0, 32, 127, 8, 100*progress/total);
  display.drawProgressBar(0, 54, 127, 8, 100*progress/total);
  end_frame();
  update_display();
}

void display_progress_bar_2_label(unsigned int label, unsigned int x) {
  const String l(label);

  begin_frame();
  // Redraw titles
  display.setTextAlignment(TEXT_ALIGN_CENTER);
  display.setFont(ArialMT_Plain_10);
  display.drawString(display.getWidth() / 2, 0, progressTitle1.c_str());
  
  if (progressTitle2.length() > 0) {
    if (display.getStringWidth(progressTitle2) <= display.width()) {
      display.setFont(ArialMT_Plain_16);
    }
    display.drawString(display.getWidth() / 2, 10, progressTitle2.c_str());
  }
  
  // Draw progress bars
  display.drawProgressBar(0, 32, 127, 8, 100*progressBarValue/progressBarTotal);
  display.drawProgressBar(0, 54, 127, 8, 100*progressBarValue/progressBarTotal);
  
  // Draw label
  display.setFont(ArialMT_Plain_10);
  if (x <= display.getStringWidth(l) / 2) {
    display.setTextAlignment(TEXT_ALIGN_LEFT);
    display.drawString(0, 42, l);
  }
  else if (x >= (128 - display.getStringWidth(l) / 2)) {
    display.setTextAlignment(TEXT_ALIGN_RIGHT);
    display.drawString(display.width() + 1, 42, l);
  }
  else {
    display.setTextAlignment(TEXT_ALIGN_CENTER);
    display.drawString(x, 42, l);
  }
  
  display.drawLine(x, 53, x, 63);
  end_frame();
  update_display();
}

void topOverlay(OLEDDisplay *display, OLEDDisplayUiState* state)
{
    display->setTextAlignment(TEXT_ALIGN_LEFT);

#ifdef WIFI
    if (wifiEnabled) {
      static int      signal  = WiFi.RSSI();

      display->setFont(wifiSignal);
      signal = (4*signal + WiFi.RSSI()) / 5;
      if      (signal < -90) display->drawString(0, 0, String(0));
      else if (signal < -85) display->drawString(0, 0, String(1));
      else if (signal < -80) display->drawString(0, 0, String(2));
      else if (signal < -75) display->drawString(0, 0, String(3));
      else if (signal < -70) display->drawString(0, 0, String(4));
      else if (signal < -65) display->drawString(0, 0, String(5));
      else if (signal < -60) display->drawString(0, 0, String(6));
      else                   display->drawString(0, 0, String(7));
    }
#endif

    display->setFont(bluetoothSign);
    if (bleMidiConnected) display->drawString(24, 0, String(1));
    else display->drawString(24, 0, String(0));

    display->setTextAlignment(TEXT_ALIGN_RIGHT);
    display->setFont(profileSign);
    display->drawString(64 + (scrollingMode ? 10*currentProfile : 0), 0, String(currentProfile));

  if ((millis() >= endMillis2) ||
      (millis() < endMillis2 && MTC.getMode() == MidiTimeCode::SynchroNone)) {

#ifdef BATTERY
    display->setTextAlignment(TEXT_ALIGN_RIGHT);
    display->setFont(batteryIndicator);
    if      (batteryVoltage > 4300) display->drawString(128, 0, String((millis() >> 10) % 4));
    else if (batteryVoltage > 3800) display->drawString(128, 0, String(4));
    else if (batteryVoltage > 3600) display->drawString(128, 0, String(3));
    else if (batteryVoltage > 3400) display->drawString(128, 0, String(2));
    else if (batteryVoltage > 3200) display->drawString(128, 0, String(1));
    else if ((millis() >> 10) % 2) display->drawString(128, 0, String(0));
    else display->drawString(128, 0, String(4));
#endif
  }

  if (millis() < endMillis2) {
    if (MTC.getMode() == MidiTimeCode::SynchroClockMaster ||
        MTC.getMode() == MidiTimeCode::SynchroClockSlave) {
      /*
      display->setFont(ArialMT_Plain_10);
      display->setTextAlignment(TEXT_ALIGN_CENTER);
      display->drawString(64, 0, String(bpm) + "BPM");
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->setFont(block10x10);
      switch (timeSignature) {
        case PED_TIMESIGNATURE_2_4:
          display->drawString( 98, 0, String(0));
          display->drawString(108, 0, String(0));
          break;
        case PED_TIMESIGNATURE_4_4:
          display->drawString( 98, 0, String(0));
          display->drawString(108, 0, String(0));
          display->drawString(118, 0, String(0));
          display->drawString(128, 0, String(0));
          break;
        case PED_TIMESIGNATURE_3_4:
        case PED_TIMESIGNATURE_3_8:
        case PED_TIMESIGNATURE_6_8:
        case PED_TIMESIGNATURE_9_8:
        case PED_TIMESIGNATURE_12_8:
          display->drawString( 98, 0, String(0));
          display->drawString(108, 0, String(0));
          display->drawString(118, 0, String(0));
          break;
      }
      switch (MTC.getBeat()) {
        case 0:
          if (MTC.isPlaying())
            display->drawString(98, 0, String(2));
          else
            display->drawString(98, 0, String(1));
          break;
        case 1:
          if (MTC.isPlaying())
            display->drawString(108, 0, String(2));
          else
            display->drawString(108, 0, String(1));
          break;
        case 2:
          if (MTC.isPlaying())
            display->drawString(118, 0, String(2));
          else
            display->drawString(118, 0, String(1));
          break;
        case 3:
          if (MTC.isPlaying())
            display->drawString(128, 0, String(2));
          else
            display->drawString(128, 0, String(1));
          break;
      }
      */
      //MTC.isPlaying() ? display->setColor(WHITE) : display->setColor(BLACK);
      switch (timeSignature) {
        case PED_TIMESIGNATURE_2_4:
          display->fillRect(64 * MTC.getBeat(), 0, 64, 10);
          break;
        case PED_TIMESIGNATURE_4_4:
          display->drawRect(77 + 13 * 0, 0, 12, 10);
          display->drawRect(77 + 13 * 1, 0, 12, 10);
          display->drawRect(77 + 13 * 2, 0, 12, 10);
          display->drawRect(77 + 13 * 3, 0, 12, 10);
          if (MTC.isPlaying())
            display->fillRect(79 + 13 * MTC.getBeat(), 2,  8,  6);
          else
            display->drawRect(81 + 13 * MTC.getBeat(), 3,  4,  4);
          break;
        case PED_TIMESIGNATURE_3_4:
        case PED_TIMESIGNATURE_3_8:
        case PED_TIMESIGNATURE_6_8:
        case PED_TIMESIGNATURE_9_8:
        case PED_TIMESIGNATURE_12_8:
          display->fillRect(43 * MTC.getBeat(), 0, 42, 10);
          break;
      }
      //display->setColor(WHITE);
    }
    else if (MTC.getMode() == MidiTimeCode::SynchroMTCMaster ||
             MTC.getMode() == MidiTimeCode::SynchroMTCSlave) {
      char buf[12];
      sprintf(buf, "%02d:%02d:%02d:%02d", MTC.getHours(), MTC.getMinutes(), MTC.getSeconds(), MTC.getFrames());
      display->setFont(ArialMT_Plain_10);
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->drawString(128, 0, buf);
    }
  }
}

void bottomOverlay(OLEDDisplay *display, OLEDDisplayUiState* state)
{
  if (lastUsed == lastUsedPedal && lastUsed != 0xFF && millis() < endMillis2 && lastPedalName[0] != ':') {
    //byte p = map2(pedals[lastUsedPedal].pedalValue[0], 0, MIDI_RESOLUTION - 1, 0, 100);
    int p;
    switch (m1) {

      case midi::ControlChange:
        //p = map2(m3, 0, MIDI_RESOLUTION - 1, 0, 100);
        m3 = constrain(m3, rmin, rmax);
        p = map2(m3, rmin, rmax, 0, 100);
        display->drawProgressBar(0, 54, 127, 8, p);
        if (lastPedalName[0] != 0) display_progress_bar_2_label(m3, map2(p, 0, 100, 3, 124));
        break;

      case midi::PitchBend:
        p = map2(((m3 << 7) | m2) + MIDI_PITCHBEND_MIN, MIDI_PITCHBEND_MIN, MIDI_PITCHBEND_MAX, -100, 100);
        if ( p >= 0 ) {
          display->drawProgressBar(60, 54, 67, 8, p);
          uint16_t radius = 8 / 2;
          uint16_t xRadius = 0 + radius;
          uint16_t yRadius = 54 + radius;
          uint16_t doubleRadius = 2 * radius;
          display->drawCircleQuads(xRadius, yRadius, radius, 0b00000110);
          display->drawHorizontalLine(xRadius, 54, 68 - doubleRadius);
          display->drawHorizontalLine(xRadius, 54 + 8, 68 - doubleRadius);
          display->drawCircleQuads(0 + 68 - radius, yRadius, radius, 0b00001001);
        }
        else {
          display->drawProgressBar(60, 54, 67, 8, 0);
          uint16_t radius = 8 / 2;
          uint16_t xRadius = 0 + radius;
          uint16_t yRadius = 54 + radius;
          uint16_t doubleRadius = 2 * radius;
          uint16_t innerRadius = radius - 2;
          display->drawCircleQuads(xRadius, yRadius, radius, 0b00000110);
          display->drawHorizontalLine(xRadius, 54, 68 - doubleRadius);
          display->drawHorizontalLine(xRadius, 54 + 8, 68 - doubleRadius);
          display->drawCircleQuads(0 + 68 - radius, yRadius, radius, 0b00001001);
          uint16_t maxProgressWidth = (68 - doubleRadius) * p / 100;
          display->fillCircle(68 + maxProgressWidth - xRadius, yRadius, innerRadius);
          display->fillRect(68 + maxProgressWidth - xRadius + 1, 54 + 2, -maxProgressWidth, 8 - 3);
          display->fillCircle(68 - xRadius, yRadius, innerRadius);
        }
        break;

      case midi::AfterTouchChannel:
        ///p = map2(m3, 0, MIDI_RESOLUTION - 1, 0, 100);
        m3 = constrain(m2, rmin, rmax);
        p = map2(m3, rmin, rmax, 0, 100);
        display->drawProgressBar(0, 54, 127, 8, p);
        break;
    }
  }
  else if (scrollingMode || MTC.getMode() != MidiTimeCode::SynchroNone) {
    display->drawLine(0, 51, 127, 51);

    display->setTextAlignment(TEXT_ALIGN_LEFT);
    display->setFont(ArialMT_Plain_10);
    if (tapDanceMode && tapDanceBank) {
      display->setColor(BLACK);
      display->fillRect(0, 54, 40, 63);
      display->setColor(WHITE);
    }
    else {
      display->fillRect(0, 54, 40, 63);
      display->setColor(BLACK);
    }

    if (currentBank <= 9)
      display->drawString(0, 53, String("Bank 0" + String(currentBank)));
    else
      display->drawString(0, 53, String("Bank " + String(currentBank)));
    display->setColor(WHITE);

#ifdef WIFI
    if (wifiEnabled) {
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->setFont(midiIcons);
      if(appleMidiConnected) display->drawString(84, 54, String(1));
      else display->drawString(84, 54, String(0));

      if (interfaces[PED_IPMIDI].midiIn || interfaces[PED_IPMIDI].midiOut) display->drawString(106, 54, String(2));
      else display->drawString(106, 54, String(0));

      if (interfaces[PED_OSC].midiIn || interfaces[PED_OSC].midiOut) display->drawString(128, 54, String(3));
      else display->drawString(128, 54, String(0));
    }
#endif
  }
}

void drawRect(OLEDDisplay *display, int16_t x0, int16_t y0, int16_t x1, int16_t y1)
{
  display->drawLine(x0+1, y0,   x1-1, y0);
  display->drawLine(x1,   y0+1, x1,   y1-1);
  display->drawLine(x1-1, y1,   x0+1, y1);
  display->drawLine(x0,   y1-1, x0,   y0+1);
}

void drawFrame1(OLEDDisplay *display, OLEDDisplayUiState* state, int16_t x, int16_t y)
{
  if (millis() < endMillis2 && lastPedalName[0] != ':') {
    ui.disableAutoTransition();
    ui.switchToFrame(0);
    if (strlen(lastPedalName) != 0 && lastPedalName[strlen(lastPedalName) - 1] == '.') lastPedalName[strlen(lastPedalName) - 1] = 0;
    if (lastPedalName[0] == 0) {
      display->setTextAlignment(TEXT_ALIGN_CENTER);
      switch (m1) {
        case midi::InvalidType:
          drawRect(display, 64-22, 15, 64+24, 15+23);
          display->setFont(ArialMT_Plain_10);
          display->drawString( 64 + x, 39 + y, String("Bank"));
          display->setFont(ArialMT_Plain_24);
          display->drawString( 64 + x, 14 + y, String(m2));
          break;
        case midi::NoteOn:
        case midi::NoteOff:
          drawRect(display, 64-22, 15, 64+24, 15+23);
          display->setFont(ArialMT_Plain_10);
          display->drawString( 64 + x, 39 + y, String("Note"));
          display->setFont(ArialMT_Plain_24);
          display->drawString( 64 + x, 14 + y, String(m2));
          display->setFont(ArialMT_Plain_10);
          display->drawString(110 + x, 39 + y, String("Velocity"));
          display->setFont(ArialMT_Plain_16);
          display->drawString(110 + x, 22 + y, String(m3));
          break;
        case midi::ControlChange:
          drawRect(display, 64-22, 15, 64+24, 15+23);
          display->setFont(ArialMT_Plain_10);
          display->drawString( 64 + x, 39 + y, String("CC"));
          display->setFont(ArialMT_Plain_24);
          display->drawString( 64 + x, 14 + y, String(m2));
          display->setFont(ArialMT_Plain_10);
          display->drawString(110 + x, 39 + y, String("Value"));
          display->setFont(ArialMT_Plain_16);
          display->drawString(110 + x, 22 + y, String(m3));
          break;
        case midi::ProgramChange:
          drawRect(display, 84-22, 15, 84+24, 15+23);
          display->setFont(ArialMT_Plain_10);
          display->drawString(84 + x, 39 + y, String("PC"));
          display->setFont(ArialMT_Plain_24);
          display->drawString(84 + x, 14 + y, String(m2));
          break;
        case midi::PitchBend:
          drawRect(display, 84-38, 15, 84+36, 15+23);
          display->setFont(ArialMT_Plain_10);
          display->drawString(84 + x, 39 + y, String("Pitch"));
          display->setFont(ArialMT_Plain_24);
          display->drawString(84 + x, 14 + y, String(((m3 << 7) | m2) + MIDI_PITCHBEND_MIN));
          break;
        case midi::AfterTouchChannel:
          drawRect(display, 84-22, 15, 84+24, 15+23);
          display->setFont(ArialMT_Plain_10);
          display->drawString(84 + x, 39 + y, String("Pressure"));
          display->setFont(ArialMT_Plain_24);
          display->drawString(84 + x, 14 + y, String(m2));
          break;
      }
      if (m1 != midi::InvalidType) {
        display->setFont(ArialMT_Plain_10);
        display->drawString(18 + x, 39 + y, String("Channel"));
        display->setFont(ArialMT_Plain_16);
        display->drawString(18 + x, 22 + y, String(m4));
      }
    }
    else {
      String name = lastPedalName;
      switch (m1) {
        case midi::InvalidType:
          drawRect(display, 64-22, 15, 64+24, 15+23);
          display->setTextAlignment(TEXT_ALIGN_CENTER);
          display->setFont(ArialMT_Plain_10);
          display->drawString( 64 + x, 39 + y, String("Bank"));
          display->setFont(ArialMT_Plain_24);
          display->drawString( 64 + x, 14 + y, String(m2));
          break;
        case midi::NoteOn:
        case midi::NoteOff:
        case midi::ControlChange:
          name.replace(String("###"), String(m3));
        case midi::ProgramChange:
        case midi::AfterTouchChannel:
          name.replace(String("###"), String(m2));
        default:
          display->setTextAlignment(TEXT_ALIGN_CENTER_BOTH);
          display->setFont(ArialMT_Plain_24);
          display->drawString(64, 32, name);
          break;
      }
    }
  }
  else if (MTC.getMode() == MidiTimeCode::SynchroClockMaster ||
           MTC.getMode() == MidiTimeCode::SynchroClockSlave) {
    display->setFont(ArialMT_Plain_24);
    display->setTextAlignment(TEXT_ALIGN_CENTER);
    display->drawString(22 + x, 12 + y, String(bpm));
    display->setFont(ArialMT_Plain_10);
    display->drawString(22 + x, 36 + y, "BPM");
    display->setTextAlignment(TEXT_ALIGN_RIGHT);
    switch (timeSignature) {
      case PED_TIMESIGNATURE_2_4:
        display->drawString(128 + x, 36 + y, "2/4");
        break;
      case PED_TIMESIGNATURE_4_4:
        display->drawString(128 + x, 36 + y, "4/4");
        break;
      case PED_TIMESIGNATURE_3_4:
        display->drawString(128 + x, 36 + y, "3/4");
        break;
      case PED_TIMESIGNATURE_3_8:
        display->drawString(128 + x, 36 + y, "3/8");
        break;
      case PED_TIMESIGNATURE_6_8:
        display->drawString(128 + x, 36 + y, "6/8");
        break;
      case PED_TIMESIGNATURE_9_8:
        display->drawString(128 + x, 36 + y, "9/8");
        break;
      case PED_TIMESIGNATURE_12_8:
        display->drawString(128 + x, 36 + y, "12/8");
        break;
    }
    display->setTextAlignment(TEXT_ALIGN_CENTER);
    if (MTC.getMode() == MidiTimeCode::SynchroClockMaster)
      display->drawString(68 + x, 36 + y, "Master");
    else if (MTC.getMode() == MidiTimeCode::SynchroClockSlave)
      display->drawString(68 + x, 36 + y, "Slave");
    /*
    display->setTextAlignment(TEXT_ALIGN_RIGHT);
    display->setFont(MTC.isPlaying() ? beats4 : beats4off);
    display->drawString(112 + x, 14 + x, String(MTC.getBeat()));
    */
    display->setTextAlignment(TEXT_ALIGN_RIGHT);
    display->setFont(block);
    switch (timeSignature) {
      case PED_TIMESIGNATURE_2_4:
        display->drawString( 68 + x, 16 + x, String(0));
        display->drawString( 88 + x, 16 + x, String(0));
        break;
      case PED_TIMESIGNATURE_4_4:
        display->drawString( 68 + x, 16 + x, String(0));
        display->drawString( 88 + x, 16 + x, String(0));
        display->drawString(108 + x, 16 + x, String(0));
        display->drawString(128 + x, 16 + x, String(0));
        break;
      case PED_TIMESIGNATURE_3_4:
      case PED_TIMESIGNATURE_3_8:
      case PED_TIMESIGNATURE_6_8:
      case PED_TIMESIGNATURE_9_8:
      case PED_TIMESIGNATURE_12_8:
        display->drawString( 68 + x, 16 + x, String(0));
        display->drawString( 88 + x, 16 + x, String(0));
        display->drawString(108 + x, 16 + x, String(0));
        break;
    }
    switch (MTC.getBeat()) {
      case 0:
        if (MTC.isPlaying())
          display->drawString( 68 + x, 16 + x, String(2));
        else
          display->drawString( 68 + x, 16 + x, String(1));
        break;
      case 1:
        if (MTC.isPlaying())
          display->drawString( 88 + x, 16 + x, String(2));
        else
          display->drawString( 88 + x, 16 + x, String(1));
        break;
      case 2:
        if (MTC.isPlaying())
          display->drawString(108 + x, 16 + x, String(2));
        else
          display->drawString(108 + x, 16 + x, String(1));
        break;
      case 3:
        if (MTC.isPlaying())
          display->drawString(128 + x, 16 + x, String(2));
        else
          display->drawString(128 + x, 16 + x, String(1));
        break;
    }
    ui.disableAutoTransition();
  }
  else if (MTC.getMode() == MidiTimeCode::SynchroMTCMaster ||
           MTC.getMode() == MidiTimeCode::SynchroMTCSlave) {
    char buf[12];
    sprintf(buf, "%02d:%02d:%02d:%02d", MTC.getHours(), MTC.getMinutes(), MTC.getSeconds(), MTC.getFrames());
    display->setFont(ArialMT_Plain_24);
    display->setTextAlignment(TEXT_ALIGN_CENTER_BOTH);
    display->drawString(64 + x, 32 + y, buf);
    display->setFont(ArialMT_Plain_10);
    display->setTextAlignment(TEXT_ALIGN_RIGHT);
    if (MTC.getMode() == MidiTimeCode::SynchroMTCMaster)
      display->drawString(128 + x, 0 + y, "Master");
    else if (MTC.getMode() == MidiTimeCode::SynchroMTCSlave)
      display->drawString(128 + x, 0 + y, "Slave");
    ui.disableAutoTransition();
  }
  else {
    if (scrollingMode) {
      display->setFont(ArialMT_Plain_16);
      display->setTextAlignment(TEXT_ALIGN_CENTER_BOTH);
      display->drawString(64 + x, 32 + y, MODEL);
      display->setFont(ArialMT_Plain_10);
      display->setTextAlignment(TEXT_ALIGN_LEFT);
      display->drawString(110 + x, 16 + y, String("TM"));
      ui.enableAutoTransition();
    }
    else {
      if (banknames[currentBank][0] == 0) {
        display->setFont(DSEG7_Classic_Bold_50);
        display->setTextAlignment(TEXT_ALIGN_LEFT);
        display->drawString(  0 + x, 9 + y, (currentProfile == 0 ? String('A') : (currentProfile == 1 ? String('B') : String('C'))));
        display->drawString( 38 + x, 9 + y, String("."));
        display->setTextAlignment(TEXT_ALIGN_RIGHT);
        display->drawString(128 + x, 9 + y, (currentBank > 9  ? String("") : String('0')) + String(currentBank));
      }
      else {
        String name;
        int offsetText       = 0;
        int offsetBackground = 0;
        static unsigned long ms = millis();

        // Display pedals name
        display->setFont(ArialMT_Plain_10);
        const byte Pedals = _min(PEDALS, 6);
        for (byte p = 0; p < Pedals/2; p++) {
          switch (p) {
            case 0:
              display->setTextAlignment(TEXT_ALIGN_LEFT);
              offsetText = 1;
              offsetBackground = 0;
              break;
            case Pedals / 2 - 1:
              display->setTextAlignment(TEXT_ALIGN_RIGHT);
              offsetText = -1;
              offsetBackground = 2;
              break;
            default:
              display->setTextAlignment(TEXT_ALIGN_CENTER);
              offsetText = 0;
              offsetBackground = 1;
              break;
          }
          // Top line
          name = String((banks[currentBank][p].pedalName[0] == ':') ? &banks[currentBank][p].pedalName[1] : banks[currentBank][p].pedalName);
          name.replace(String("###"), String(currentMIDIValue[currentBank][p][0]));
          if (IS_SINGLE_PRESS_ENABLED(pedals[p].pressMode) && currentMIDIValue[currentBank][p][0] == banks[currentBank][p].midiValue2) {
            display->fillRect((128 / (Pedals / 2 - 1)) * p - offsetBackground * display->getStringWidth(name) / 2 + offsetText + x,
                              12 + y,
                              display->getStringWidth(name) + 1,
                              10);
            display->setColor(BLACK);
          }
          else
            display->setColor(WHITE);
          display->drawString((128 / (Pedals / 2 - 1)) * p + offsetText + x, 10 + y, name);
          display->setColor(WHITE);
          // Bottom line
          name = String((banks[currentBank][p + Pedals / 2].pedalName[0] == ':') ? &banks[currentBank][p + Pedals / 2].pedalName[1] : banks[currentBank][p + Pedals / 2].pedalName);
          name.replace(String("###"), String(currentMIDIValue[currentBank][p + Pedals / 2][0]));
          if (IS_SINGLE_PRESS_ENABLED(pedals[p + Pedals / 2].pressMode) && currentMIDIValue[currentBank][p + Pedals / 2][0] == banks[currentBank][p + Pedals / 2].midiValue2) {
            display->fillRect((128 / (Pedals / 2 - 1)) * p - offsetBackground * display->getStringWidth(name) / 2 + offsetText + x,
                              53 + y,
                              display->getStringWidth(name) + 1,
                              10);
            display->setColor(BLACK);
          }
          else
            display->setColor(WHITE);
          display->drawString((128 / (Pedals / 2 - 1)) * p + offsetText + x, 51 + y, name);
          display->setColor(WHITE);
        }
        // Center area
        if (((millis() - ms < 4000) && (banknames[currentBank][0] != '.')) || (banknames[currentBank][0] == ':')) {
          // Display bank name
          display->drawRect(0, 23, 128, 29);
          name = (banknames[currentBank][0] == ':') ? &banknames[currentBank][1] : banknames[currentBank];
          name.replace(String("##"), String(currentBank));
          display->setFont(ArialMT_Plain_24);
          display->setTextAlignment(TEXT_ALIGN_CENTER_BOTH);
          display->drawString( 64 + x, 37 + y, name);
        }
        else if (((millis() - ms < 8000) || (banknames[currentBank][0] == '.')) && (banknames[currentBank][0] != ':')) {
          // Display pedal values
#ifndef BATTERY
          name = (banknames[currentBank][0] == '.') ? &banknames[currentBank][1] : banknames[currentBank];
          name.replace(String("##"), String(currentBank));
          display->setFont(ArialMT_Plain_10);
          display->setTextAlignment(TEXT_ALIGN_RIGHT);
          display->drawString(128 + x, y, name);
#endif
          for (byte p = 0; p < Pedals/2; p++) {
            if (IS_SINGLE_PRESS_ENABLED(pedals[p].pressMode) && (banks[currentBank][p].midiMessage != PED_EMPTY)) {
              display->drawProgressBar((128 / (Pedals / 2)) * p + 2 + x, 25 + y, 39, 11, constrain(map2(currentMIDIValue[currentBank][p][0],
                                                                                                       banks[currentBank][p].midiValue1,
                                                                                                       banks[currentBank][p].midiValue2,
                                                                                                       0, 100),
                                                                                                   0, 100));
            }
            if (IS_SINGLE_PRESS_ENABLED(pedals[p + Pedals / 2].pressMode) && (banks[currentBank][p + Pedals / 2].midiMessage != PED_EMPTY)) {
              display->drawProgressBar((128 / (Pedals / 2)) * p + 2 + x, 39 + y, 39, 11, constrain(map2(currentMIDIValue[currentBank][p + Pedals / 2][0],
                                                                                                       banks[currentBank][p + Pedals / 2].midiValue1,
                                                                                                       banks[currentBank][p + Pedals / 2].midiValue2,
                                                                                                       0, 100),
                                                                                                   0, 100));
            }
          }
        }
        else {
          ms = millis();
        }
      }
      ui.disableAutoTransition();
    }
  }

#ifdef WEBSOCKET
  events.send(MTC.isPlaying() ? "1" : "0", "play");

  if (MTC.getMode() == MidiTimeCode::SynchroClockMaster ||
      MTC.getMode() == MidiTimeCode::SynchroClockSlave)  {
    char buf[4];
    events.send("", "mtc");
    sprintf(buf, "%3d", bpm);
    events.send(buf, "bpm");
    sprintf(buf, "%d", MTC.getBeat() + 1);
    events.send(buf, "beat");
    switch (timeSignature) {
      case PED_TIMESIGNATURE_2_4:
        events.send("2/4", "timesignature");
        break;
      case PED_TIMESIGNATURE_4_4:
        events.send("4/4", "timesignature");
        break;
      case PED_TIMESIGNATURE_3_4:
        events.send("3/4", "timesignature");
        break;
      case PED_TIMESIGNATURE_3_8:
        events.send("3/8", "timesignature");
        break;
      case PED_TIMESIGNATURE_6_8:
        events.send("6/8", "timesignature");
        break;
      case PED_TIMESIGNATURE_9_8:
        events.send("9/8", "timesignature");
        break;
      case PED_TIMESIGNATURE_12_8:
        events.send("12/8", "timesignature");
        break;
    }
  }

  if (MTC.getMode() == MidiTimeCode::SynchroMTCMaster ||
      MTC.getMode() == MidiTimeCode::SynchroMTCSlave) {
    char buf[12];
    sprintf(buf, "%02d:%02d:%02d:%02d", MTC.getHours(), MTC.getMinutes(), MTC.getSeconds(), MTC.getFrames());
    events.send(buf, "mtc");
    events.send("", "bpm");
    events.send("", "beat");
    events.send("", "timesignature");
  }
#endif
}

void drawFrame2(OLEDDisplay *display, OLEDDisplayUiState* state, int16_t x, int16_t y)
{
  if (!scrollingMode || MTC.isPlaying() || MTC.getMode() != PED_MTC_NONE || millis() < endMillis2)
    ui.switchToFrame(0);

  display->setFont(ArialMT_Plain_10);
  display->setTextAlignment(TEXT_ALIGN_LEFT);
  display->drawString(0 + x, 16 + y, "Device:");
  display->setTextAlignment(TEXT_ALIGN_RIGHT);
  display->drawString(128 + x, 16 + y, host);
#ifdef WIFI
  switch (WiFi.getMode()) {
    case WIFI_AP:
    case WIFI_AP_STA:
      display->setTextAlignment(TEXT_ALIGN_LEFT);
      display->drawString(0 + x, 26 + y, "AP:");
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->drawString(128 + x, 26 + y, ssidSoftAP);
      display->setTextAlignment(TEXT_ALIGN_LEFT);
      display->drawString(0 + x, 36 + y, "AP IP:");
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->drawString(128 + x, 36 + y, WiFi.softAPIP().toString());
      break;
    case WIFI_STA:
      display->setTextAlignment(TEXT_ALIGN_LEFT);
      display->drawString(0 + x, 26 + y, "SSID:");
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->drawString(128 + x, 26 + y, wifiSSID);
      display->setTextAlignment(TEXT_ALIGN_LEFT);
      display->drawString(0 + x, 36 + y, "IP:");
      display->setTextAlignment(TEXT_ALIGN_RIGHT);
      display->drawString(128 + x, 36 + y, WiFi.localIP().toString());
      break;
    case WIFI_MODE_MAX:
    case WIFI_MODE_NULL:
      break;
  }
#endif
}

void drawFrame3(OLEDDisplay *display, OLEDDisplayUiState* state, int16_t x, int16_t y)
{
  if (!scrollingMode || MTC.isPlaying() || MTC.getMode() != PED_MTC_NONE || millis() < endMillis2)
    ui.switchToFrame(0);

  display->setFont(ArialMT_Plain_10);
  display->setTextAlignment(TEXT_ALIGN_LEFT);
  display->drawString(0 + x, 16 + y, "Free heap:");
  display->setTextAlignment(TEXT_ALIGN_RIGHT);
  display->drawString(128 + x, 16 + y, ESP.getFreeHeap()/1024 + String(" Kb"));

#ifdef BATTERY
  display->setTextAlignment(TEXT_ALIGN_LEFT);
  display->drawString(0 + x, 26 + y, "Battery:");
  display->setTextAlignment(TEXT_ALIGN_RIGHT);
  display->drawString(128 + x, 26 + y, batteryVoltage / 1000.0F + String(" V"));
#endif

  display->setTextAlignment(TEXT_ALIGN_LEFT);
  display->drawString(0 + x, 36 + y, "Uptime:");
  display->setTextAlignment(TEXT_ALIGN_RIGHT);
  long sec = (millis() / 1000) % 60;
  long min = (millis() / 1000 / 60) % 60;
  long h   = (millis() / 1000 / 3600);
  display->drawString(128 + x, 36 + y, h + String("h ") + min + String("m ") + sec + String("s"));
}

// This array keeps function pointers to all frames
// frames are the single views that slide in
#ifdef DIAGNOSTIC
FrameCallback frames[] = { drawFrame1, drawFrame2, drawFrame3 };
#else
FrameCallback frames[] = { drawFrame1, drawFrame2 };
#endif
int frameCount = sizeof(frames) / sizeof(FrameCallback);

// Overlays are statically drawn on top of a frame
OverlayCallback overlays[] = { topOverlay, bottomOverlay };
int overlaysCount = sizeof(overlays) / sizeof(OverlayCallback);

void display_boot()
{
  display.init();
  display.setContrast(255);

  if (flipScreen) display.flipScreenVertically();

#ifdef WIFI
  if (wifiEnabled) {
    begin_frame();
    display.drawXbm((display.getWidth() - WIFI_LOGO_WIDTH) / 2, (display.getHeight() - WIFI_LOGO_HEIGHT) / 2, WIFI_LOGO_WIDTH, WIFI_LOGO_HEIGHT, WiFiLogo);
    end_frame();
    update_display();
    delay(1000);
  }
#endif

#ifdef BLE
  if (bleEnabled) {
    begin_frame();
    display.drawXbm((display.getWidth() - BLUETOOTH_LOGO_WIDTH) / 2, (display.getHeight() - BLUETOOTH_LOGO_HEIGHT) / 2, BLUETOOTH_LOGO_WIDTH, BLUETOOTH_LOGO_HEIGHT, BluetoothLogo);
    end_frame();
    update_display();
    delay(1000);
  }
#endif
  display_clear();
}

void display_init()
{
  // The ESP is capable of rendering 60fps in 80Mhz mode
	// but that won't give you much time for anything else
	// run it in 160Mhz mode or just set it to 30 fps
  ui.setTargetFPS(30);

	// Customize the active and inactive symbol
  ui.setActiveSymbol(activeSymbol);
  ui.setInactiveSymbol(inactiveSymbol);

  // You can change this to
  // TOP, LEFT, BOTTOM, RIGHT
  ui.setIndicatorPosition(BOTTOM);

  // Defines where the first frame is located in the bar.
  ui.setIndicatorDirection(LEFT_RIGHT);

  // Disable drawing of all indicators.
  ui.disableAllIndicators();

  // You can change the transition that is used
  // SLIDE_LEFT, SLIDE_RIGHT, SLIDE_UP, SLIDE_DOWN
  ui.setFrameAnimation(SLIDE_LEFT);

  // Add frames
  ui.setFrames(frames, frameCount);

  // Add overlays
  ui.setOverlays(overlays, overlaysCount);

  // Initialising the UI will init the display too.
  ui.init();

  if (flipScreen) display.flipScreenVertically();

  displayInit = false;
}

void display_ui_update_disable()
{
  uiUpdate = false;
}

void display_ui_update_enable()
{
  uiUpdate = true;
}

void display_off()
{
  display.displayOff();
}

void display_on()
{
  display.displayOn();
}

//------------------------------------------------------------------------------
// Frame transition control functions
//------------------------------------------------------------------------------

// Enable automatic frame transitions
void enable_auto_transition() {
  manualTransition = false;
  ui.enableAutoTransition();
}

// Disable automatic frame transitions
void disable_auto_transition() {
  manualTransition = true;
  ui.disableAutoTransition();
}

// Update display state based on current context
void update_display_state() {
  // Get current frame from UI state
  currentFrame = ui.getUiState()->currentFrame;
}

// Update main display UI with double buffering
void display_update() {
  static bool off = false;

  if (displayInit) display_init();
  
  if (uiUpdate && !reloadProfile) {
    // Update display state for current context
    update_display_state();
    
    // Determine which frame to show before updating UI
    bool showPedalInfo = millis() < endMillis2 && lastPedalName[0] != ':';
    bool inMIDIModeOrClock = MTC.isPlaying() || MTC.getMode() != PED_MTC_NONE;
    
    // Frame switching logic - determine the appropriate frame
    if (currentFrame > 0 && (showPedalInfo || inMIDIModeOrClock || !scrollingMode)) {
      // Use a valid AnimationDirection value for no/minimal animation
      ui.setFrameAnimation(SLIDE_UP);
      
      // Return to main frame (frame 0) when we need to show important information
      ui.switchToFrame(0);
      
      // Re-enable animations after frame switch
      ui.setFrameAnimation(SLIDE_LEFT);
    }
    
    // Update transition mode based on current state
    if (scrollingMode && manualTransition && 
        !inMIDIModeOrClock && !showPedalInfo) {
      // Use a valid AnimationDirection value for no/minimal animation
      ui.setFrameAnimation(SLIDE_UP);
      
      enable_auto_transition();
      
      // Re-enable animations after transition mode change
      ui.setFrameAnimation(SLIDE_LEFT);
    }
    else if ((!scrollingMode && !manualTransition) || 
             (manualTransition && (showPedalInfo || inMIDIModeOrClock))) {
      // Use a valid AnimationDirection value for no/minimal animation
      ui.setFrameAnimation(SLIDE_UP);
      
      disable_auto_transition();
      
      // Re-enable animations after transition mode change
      ui.setFrameAnimation(SLIDE_LEFT);
    }
    
    // Update UI and draw to buffer
    ui.update();
    
    // Update display in one operation
    update_display();
  }

  displayOff = screenSaverTimeout == 0 ? false : ((millis() - displayOffCountdownStart) > screenSaverTimeout);

  if (!off && displayOff) { 
    display_off(); 
    leds_off();     
    off = true;  
  }
  if (off && !displayOff) { 
    display_on();  
    leds_refresh(); 
    off = false; 
  }
}