//    Source code based on https://github.com/esphome/esphome/tree/dev/esphome/components/esp32_improv
/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/

#pragma once

#include <improv.h>
#include <WiFi.h>

namespace improv_serial {

  enum ImprovSerialType : uint8_t {
    TYPE_CURRENT_STATE = 0x01,
    TYPE_ERROR_STATE = 0x02,
    TYPE_RPC = 0x03,
    TYPE_RPC_RESPONSE = 0x04
  };

  static const uint8_t IMPROV_SERIAL_VERSION = 1;

  class ImprovSerial {
    public:
      void setup(const String& firmware, const String& version, const String& variant, const String& name, Stream *serial = &Serial);
      bool loop(bool timeout = false);
      improv::State get_state();
      String get_ssid();
      String get_password();

  protected:
    bool parse_improv_serial_byte_(uint8_t byte);
    bool parse_improv_payload_(improv::ImprovCommand &command);

    void set_state_(improv::State state);
    void set_error_(improv::Error error);
    void send_response_(std::vector<uint8_t> &response);
    void on_wifi_connect_timeout_();

    std::vector<uint8_t> build_rpc_settings_response_(improv::Command command);
    std::vector<uint8_t> build_version_info_();

    int available_();
    uint8_t read_byte_();
    void write_data_(std::vector<uint8_t> &data);

    Stream *hw_serial_{nullptr};

    std::vector<uint8_t> rx_buffer_;
    uint32_t last_read_byte_{0};
    improv::State state_{improv::STATE_AUTHORIZED};
    improv::ImprovCommand command_{improv::Command::UNKNOWN, "", ""};

    String firmware_name_;
    String firmware_version_;
    String hardware_variant_;
    String device_name_;
 };

 extern ImprovSerial
    global_improv_serial;  // NOLINT(cppcoreguidelines-avoid-non-const-global-variables)

}  // namespace improv_serial