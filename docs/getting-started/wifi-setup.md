# How to Connect PedalinoMini to a WiFi Network

PedalinoMini supports IEEE 802.11 b/g/n WiFi with WPA/WPA2 authentication (2.4 GHz only). There are several ways to connect it to your WiFi network, with the **Web Installer** being the recommended method for most users.

## Recommended Method: Web Installer

The easiest way to connect PedalinoMini to WiFi is using our Web Installer which uses ESP Web Tools.

1. Connect your PedalinoMini to your computer via USB
2. Visit [Web Installer](../installer.md)
3. Follow the on-screen instructions to install firmware and configure WiFi

> This method allows you to configure WiFi via USB or Bluetooth with just a few clicks directly from your browser.

## Alternative Connection Methods

If the Web Installer method doesn't work for your situation, PedalinoMini supports several alternative methods:

### Smart Config

PedalinoMini supports Espressif's ESP-TOUCH protocol (Smart Config) which requires a smartphone app:

- [ESP8266 SmartConfig](https://play.google.com/store/apps/details?id=com.cmmakerclub.iot.esptouch) for Android
- [Espressif Esptouch](https://itunes.apple.com/us/app/espressif-esptouch/id1071176700?mt=8) for iOS

#### To use Smart Config:

1. Power on PedalinoMini
2. Wait until it enters Smart Config mode (after ~75 seconds if not connected to WiFi)
3. Use one of the smartphone apps to configure your network credentials

### WPS Setup

If your router supports WPS (Wi-Fi Protected Setup):

1. Power on PedalinoMini
2. Wait until it enters WPS mode (after ~135 seconds if not connected)
3. Press the WPS button on your WiFi router
4. PedalinoMini will connect to your network automatically

> Note: WPS mode is only available if PedalinoMini was compiled with `-D WPS` in platformio.ini

### Access Point (AP) Mode

If all other methods fail, PedalinoMini will create its own WiFi network:

1. Wait until PedalinoMini switches to AP mode
2. Connect to the "Pedalino" WiFi network using the password `pedalino`
3. Open a web browser and navigate to the PedalinoMini web interface
4. Use the web interface to configure your WiFi network credentials

## Connection Process Flow

PedalinoMini follows this sequence when attempting to connect to WiFi:

1. Tries to connect to the last known access point (15 seconds)
2. Enters WiFi provisioning mode via USB/Bluetooth (60 seconds)
3. Enters Smart Config mode (60 seconds) - if enabled
4. Enters WPS mode (60 seconds) - if enabled
5. Finally switches to AP mode until reboot

You can skip any step in this process by pressing the `BOOT` button on PedalinoMini.

```C++
void wifi_connect()
{
  auto_reconnect();           // WIFI_CONNECT_TIMEOUT seconds to reconnect to last used access point
  if (!WiFi.isConnected())
    improv_config();          // IMPROV_CONFIG_TIMEOUT seconds to receive provisioning SSID and password via USB or Bluetooth and connect to WiFi
  if (!WiFi.isConnected())
    smart_config();           // SMART_CONFIG_TIMEOUT seconds to receive SmartConfig parameters and connect
  if (!WiFi.isConnected())
    wps_config();             // WPS_TIMEOUT seconds to receive WPS parameters and connect
  if (!WiFi.isConnected())
    ap_mode_start();          // switch to AP mode until next reboot
}
```