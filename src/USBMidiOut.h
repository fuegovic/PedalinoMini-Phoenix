/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/

#include <MIDI.h>

#if defined(ARDUINO_BPI_LEAF_S3) || defined(ARDUINO_LILYGO_T_DISPLAY_S3)

#include <Adafruit_TinyUSB.h>

// USB MIDI object
Adafruit_USBD_MIDI usb_midi;

// Create a new instance of the Arduino MIDI Library,
// and attach usb_midi as the transport.
MIDI_CREATE_INSTANCE(Adafruit_USBD_MIDI, usb_midi, USB_MIDI);

#else

struct Serial1MIDISettings : public midi::DefaultSettings
{
  static const long BaudRate = MIDI_BAUD_RATE;
  static const int8_t RxPin  = USB_MIDI_IN_PIN;
  static const int8_t TxPin  = USB_MIDI_OUT_PIN;
};

#define SERIAL_MIDI_USB   Serial1

MIDI_CREATE_CUSTOM_INSTANCE_ESP(HardwareSerial, SERIAL_MIDI_USB, USB_MIDI, Serial1MIDISettings);

#endif


void USB_MIDI_SendRealTimeMessage(byte type)
{
  if (!interfaces[PED_USBMIDI].midiOut) return;

  switch (type) {

      case midi::TuneRequest:
        USB_MIDI.sendTuneRequest();
        break;

      case midi::Clock:
        USB_MIDI.sendClock();
        break;

      case midi::Start:
        USB_MIDI.sendStart();
        break;

      case midi::Continue:
        USB_MIDI.sendContinue();
        break;

      case midi::Stop:
        USB_MIDI.sendStop();
        break;

      case midi::ActiveSensing:
        USB_MIDI.sendActiveSensing();
        break;

      case midi::SystemReset:
        USB_MIDI.sendSystemReset();
        break;
    }
}