#pragma once

#ifdef __cplusplus
extern "C" {
#endif

/** Major version number (X.x.x) */
#define PEDALINO_VERSION_MAJOR   3
/** Minor version number (x.X.x) */
#define PEDALINO_VERSION_MINOR   5
/** Patch version number (x.x.X) */
#define PEDALINO_VERSION_PATCH   2
/** Patch version suffix (x.x.x-X) */
#define PEDALINO_VERSION_SUFFIX  "🐦‍🔥"

#define PEDALINO_GITHUB_URL "https://github.com/fuegovic/PedalinoMini/tree/single"

#define xstr(s) sstr(s)  // stringize the result of expansion of a macro argument
#define sstr(s) #s

#define VERSION xstr(PEDALINO_VERSION_MAJOR) "." xstr(PEDALINO_VERSION_MINOR) "." xstr(PEDALINO_VERSION_PATCH) " - " PEDALINO_VERSION_SUFFIX

#if defined(LILYGO_T_DISPLAY) || defined(LILYGO_T_DISPLAY_S3) || defined(BPI_LEAF_S3)
#define ESP32_PLATFORM_VERSION "6.9.0"
#else
#define ESP32_PLATFORM_VERSION "3.5.0"
#endif

/**
 * Macro to convert PEDALINO version number into an integer
 *
 * To be used in comparisons, such as PEDALINO_VERSION >= PEDALINO_VERSION_VAL(2, 0, 0)
 */
#define PEDALINO_VERSION_VAL(major, minor, patch) ((major << 16) | (minor << 8) | (patch))

/**
 * Current PEDALINO version, as an integer
 *
 * To be used in comparisons, such as PEDALINO_VERSION >= PEDALINO_VERSION_VAL(2, 0, 0)
 */
#define PEDALINO_VERSION PEDALINO_VERSION_VAL(ESP_ARDUINO_VERSION_MAJOR, \
                                              ESP_ARDUINO_VERSION_MINOR, \
                                              ESP_ARDUINO_VERSION_PATCH)

#ifdef __cplusplus
}
#endif