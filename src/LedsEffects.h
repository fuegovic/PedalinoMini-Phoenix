/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/

// byte led_control(byte c, byte l)
// {
//   c = constrain(c, 0, CONTROLS - 1);
//   l = (l == 255 ? 255 : constrain(l, 0, LEDS));
//   return (l == 255 ? controls[c].led : l);
// }

byte led_control(byte c, byte l)
{
  c = constrain(c, 0, CONTROLS - 1);
  l = (l == 255 ? 255 : constrain(l, 0, leds)); // Changed LEDS to leds
  return (l == 255 ? controls[c].led : l);
}

CRGB swap_rgb_order (CRGB color, EOrder order) {

  CRGB swap = CRGB::Black;

  switch (order) {
    case RGB:
        swap.red   = color.red;
        swap.green = color.green;
        swap.blue  = color.blue;
      break;
    case RBG:
        swap.red   = color.red;
        swap.green = color.blue;
        swap.blue  = color.green;
      break;
    case GRB:
        swap.red   = color.green;
        swap.green = color.red;
        swap.blue  = color.blue;
      break;
    case GBR:
        swap.red   = color.green;
        swap.green = color.blue;
        swap.blue  = color.red;
      break;
    case BRG:
        swap.red   = color.blue;
        swap.green = color.red;
        swap.blue  = color.green;
      break;
    case BGR:
        swap.red   = color.blue;
        swap.green = color.green;
        swap.blue  = color.red;
      break;
  }

  return swap;
}

void dot_beat() {

  uint8_t bpm      = 30;
  uint8_t fadeval  = 224;                               // Trail behind the LED's. Lower => faster fade.
  uint8_t inner    = beatsin8(bpm, leds/4, leds/4*3);   // Move 1/4 to 3/4
  uint8_t outer    = beatsin8(bpm, 0, leds-1);          // Move entire length
  uint8_t middle   = beatsin8(bpm, leds/3, leds/3*2);   // Move 1/3 to 2/3

  fastleds[middle] = swap_rgb_order(CRGB::Purple, rgbOrder);
  fastleds[inner]  = swap_rgb_order(CRGB::Blue, rgbOrder);
  fastleds[outer]  = swap_rgb_order(CRGB::Aqua, rgbOrder);

  nscale8(fastleds, leds, fadeval);                   // Fade the entire array. Or for just a few LED's, use  nscale8(&leds[2], 5, fadeval);

}

void blendwave() {

  static CRGB clr1;
  static CRGB clr2;
  static uint8_t speed;
  static uint8_t loc1;

  speed = beatsin8(6,0,255);

  clr1 = blend(CHSV(beatsin8(3,0,255),255,255), CHSV(beatsin8(4,0,255),255,255), speed);
  clr2 = blend(CHSV(beatsin8(4,0,255),255,255), CHSV(beatsin8(3,0,255),255,255), speed);

  loc1 = beatsin8(10,0, leds-1);

  fill_gradient_RGB(fastleds, 0, swap_rgb_order(clr2, rgbOrder), loc1, swap_rgb_order(clr1, rgbOrder));
  fill_gradient_RGB(fastleds, loc1, swap_rgb_order(clr2, rgbOrder), leds-1, swap_rgb_order(clr1, rgbOrder));

}

// This function draws rainbows with an ever-changing,
// widely-varying set of parameters.
void pride()
{
  static uint16_t sPseudotime = 0;
  static uint16_t sLastMillis = 0;
  static uint16_t sHue16 = 0;

  uint8_t sat8 = beatsin88( 87, 220, 250);
  uint8_t brightdepth = beatsin88( 341, 96, 224);
  uint16_t brightnessthetainc16 = beatsin88( 203, (25 * 256), (40 * 256));
  uint8_t msmultiplier = beatsin88(147, 23, 60);

  uint16_t hue16 = sHue16;//gHue * 256;
  uint16_t hueinc16 = beatsin88(113, 1, 3000);

  uint16_t ms = millis();
  uint16_t deltams = ms - sLastMillis ;
  sLastMillis  = ms;
  sPseudotime += deltams * msmultiplier;
  sHue16 += deltams * beatsin88( 400, 5,9);
  uint16_t brightnesstheta16 = sPseudotime;

  for( uint16_t i = 0 ; i < leds; i++) {
    hue16 += hueinc16;
    uint8_t hue8 = hue16 / 256;

    brightnesstheta16  += brightnessthetainc16;
    uint16_t b16 = sin16( brightnesstheta16  ) + 32768;

    uint16_t bri16 = (uint32_t)((uint32_t)b16 * (uint32_t)b16) / 65536;
    uint8_t bri8 = (uint32_t)(((uint32_t)bri16) * brightdepth) / 65536;
    bri8 += (255 - brightdepth);

    CRGB newcolor = CHSV( hue8, sat8, bri8);

    uint16_t pixelnumber = i;
    pixelnumber = (leds-1) - pixelnumber;

    nblend(fastleds[pixelnumber], swap_rgb_order(newcolor, rgbOrder), 64);
    //fastleds[pixelnumber].nscale8(ledsOnBrightness);
  }
}

//////////////////////////////////////////////////////////////////////////
//
// The code for this animation is more complicated than other examples, and
// while it is "ready to run", and documented in general, it is probably not
// the best starting point for learning.  Nevertheless, it does illustrate some
// useful techniques.
//
//////////////////////////////////////////////////////////////////////////
//
// In this animation, there are four "layers" of waves of light.
//
// Each layer moves independently, and each is scaled separately.
//
// All four wave layers are added together on top of each other, and then
// another filter is applied that adds "whitecaps" of brightness where the
// waves line up with each other more.  Finally, another pass is taken
// over the led array to 'deepen' (dim) the blues and greens.
//
// The speed and scale and motion each layer varies slowly within independent
// hand-chosen ranges, which is why the code has a lot of low-speed 'beatsin8' functions
// with a lot of oddly specific numeric ranges.
//
// These three custom blue-green color palettes were inspired by the colors found in
// the waters off the southern coast of California, https://goo.gl/maps/QQgd97jjHesHZVxQ7
//
CRGBPalette16 pacifica_palette_1 =
    { 0x000507, 0x000409, 0x00030B, 0x00030D, 0x000210, 0x000212, 0x000114, 0x000117,
      0x000019, 0x00001C, 0x000026, 0x000031, 0x00003B, 0x000046, 0x14554B, 0x28AA50 };
CRGBPalette16 pacifica_palette_2 =
    { 0x000507, 0x000409, 0x00030B, 0x00030D, 0x000210, 0x000212, 0x000114, 0x000117,
      0x000019, 0x00001C, 0x000026, 0x000031, 0x00003B, 0x000046, 0x0C5F52, 0x19BE5F };
CRGBPalette16 pacifica_palette_3 =
    { 0x000208, 0x00030E, 0x000514, 0x00061A, 0x000820, 0x000927, 0x000B2D, 0x000C33,
      0x000E39, 0x001040, 0x001450, 0x001860, 0x001C70, 0x002080, 0x1040BF, 0x2060FF };

// Fire ocean palettes - warm colors inspired by lava and fire
CRGBPalette16 fireocean_palette_1 =
    { 0x120000, 0x220000, 0x320000, 0x420000, 0x520000, 0x620000, 0x720000, 0x820000,
      0x920000, 0xA20000, 0xB20000, 0xC20000, 0xD20000, 0xE20000, 0xF23300, 0xFF4400 };
CRGBPalette16 fireocean_palette_2 =
    { 0x120000, 0x220000, 0x320000, 0x420000, 0x520000, 0x620000, 0x720000, 0x820000,
      0x920000, 0xA20000, 0xB20000, 0xC20000, 0xD20000, 0xE20000, 0xF25500, 0xFF7700 };
CRGBPalette16 fireocean_palette_3 =
    { 0x320000, 0x420000, 0x520000, 0x620000, 0x720000, 0x820000, 0x920000, 0xA20000,
      0xB20000, 0xC20000, 0xD20000, 0xE20000, 0xF20000, 0xFF2200, 0xFF5500, 0xFF8800 };

// Add one layer of waves into the led array
void pacifica_one_layer( CRGBPalette16& p, uint16_t cistart, uint16_t wavescale, uint8_t bri, uint16_t ioff)
{
  uint16_t ci = cistart;
  uint16_t waveangle = ioff;
  uint16_t wavescale_half = (wavescale / 2) + 20;
  for( uint16_t i = 0; i < leds; i++) {
    waveangle += 250;
    uint16_t s16 = sin16( waveangle ) + 32768;
    uint16_t cs = scale16( s16 , wavescale_half ) + wavescale_half;
    ci += cs;
    uint16_t sindex16 = sin16( ci) + 32768;
    uint8_t sindex8 = scale16( sindex16, 240);
    CRGB c = ColorFromPalette( p, sindex8, bri, LINEARBLEND);
    fastleds[i] += swap_rgb_order(c, rgbOrder);
  }
}

// Add extra 'white' to areas where the four layers of light have lined up brightly
void pacifica_add_whitecaps()
{
  uint8_t basethreshold = beatsin8( 9, 55, 65);
  uint8_t wave = beat8( 7 );

  for( uint16_t i = 0; i < leds; i++) {
    uint8_t threshold = scale8( sin8( wave), 20) + basethreshold;
    wave += 7;
    uint8_t l = fastleds[i].getAverageLight();
    if( l > threshold) {
      uint8_t overage = l - threshold;
      uint8_t overage2 = qadd8( overage, overage);
      fastleds[i] += swap_rgb_order(CRGB( overage, overage2, qadd8( overage2, overage2)), rgbOrder);
    }
  }
}

// Deepen the blues and greens
void pacifica_deepen_colors()
{
  for( uint16_t i = 0; i <leds; i++) {
    fastleds[i].blue = scale8( fastleds[i].blue,  145);
    fastleds[i].green= scale8( fastleds[i].green, 200);
    fastleds[i] |= swap_rgb_order(CRGB( 2, 5, 7), rgbOrder);
  }
}

void pacifica_loop()
{
  // Increment the four "color index start" counters, one for each wave layer.
  // Each is incremented at a different speed, and the speeds vary over time.
  static uint16_t sCIStart1, sCIStart2, sCIStart3, sCIStart4;
  static uint32_t sLastms = 0;
  uint32_t ms = GET_MILLIS();
  uint32_t deltams = ms - sLastms;
  sLastms = ms;
  uint16_t speedfactor1 = beatsin16(3, 179, 269);
  uint16_t speedfactor2 = beatsin16(4, 179, 269);
  uint32_t deltams1 = (deltams * speedfactor1) / 256;
  uint32_t deltams2 = (deltams * speedfactor2) / 256;
  uint32_t deltams21 = (deltams1 + deltams2) / 2;
  sCIStart1 += (deltams1 * beatsin88(1011,10,13));
  sCIStart2 -= (deltams21 * beatsin88(777,8,11));
  sCIStart3 -= (deltams1 * beatsin88(501,5,7));
  sCIStart4 -= (deltams2 * beatsin88(257,4,6));

  // Clear out the LED array to a dim background blue-green
  fill_solid(fastleds, leds, swap_rgb_order(CRGB( 2, 6, 10), rgbOrder));

  // Render each of four layers, with different scales and speeds, that vary over time
  pacifica_one_layer( pacifica_palette_1, sCIStart1, beatsin16( 3, 11 * 256, 14 * 256), beatsin8( 10, 70, 130), 0-beat16( 301) );
  pacifica_one_layer( pacifica_palette_2, sCIStart2, beatsin16( 4,  6 * 256,  9 * 256), beatsin8( 17, 40,  80), beat16( 401) );
  pacifica_one_layer( pacifica_palette_3, sCIStart3, 6 * 256, beatsin8( 9, 10,38), 0-beat16(503));
  pacifica_one_layer( pacifica_palette_3, sCIStart4, 5 * 256, beatsin8( 8, 10,28), beat16(601));

  // Add brighter 'whitecaps' where the waves lines up more
  pacifica_add_whitecaps();

  // Deepen the blues and greens a bit
  pacifica_deepen_colors();
}

void fireocean_add_sparks()
{
  uint8_t basethreshold = beatsin8( 9, 55, 65);
  uint8_t wave = beat8( 7 );

  for( uint16_t i = 0; i < leds; i++) {
    uint8_t threshold = scale8( sin8( wave), 20) + basethreshold;
    wave += 7;
    uint8_t l = fastleds[i].getAverageLight();
    if( l > threshold) {
      uint8_t overage = l - threshold;
      uint8_t overage2 = qadd8( overage, overage);
      uint8_t redComponent = qadd8( overage2, overage2); // Strongest component - red
      uint8_t greenComponent = overage2; // Less green
      uint8_t blueComponent = scale8( overage, 10); // Very little blue
      fastleds[i] += swap_rgb_order(CRGB( redComponent, greenComponent, blueComponent), rgbOrder);
    }
  }
}

void fireocean_loop()
{
  // Similar structure to pacifica_loop but with fire palettes
  static uint16_t sCIStart1, sCIStart2, sCIStart3, sCIStart4;
  static uint32_t sLastms = 0;
  uint32_t ms = GET_MILLIS();
  uint32_t deltams = ms - sLastms;
  sLastms = ms;
  uint16_t speedfactor1 = beatsin16(3, 179, 269);
  uint16_t speedfactor2 = beatsin16(4, 179, 269);
  uint32_t deltams1 = (deltams * speedfactor1) / 256;
  uint32_t deltams2 = (deltams * speedfactor2) / 256;
  uint32_t deltams21 = (deltams1 + deltams2) / 2;
  sCIStart1 += (deltams1 * beatsin88(1011,10,13));
  sCIStart2 -= (deltams21 * beatsin88(777,8,11));
  sCIStart3 -= (deltams1 * beatsin88(501,5,7));
  sCIStart4 -= (deltams2 * beatsin88(257,4,6));

  // Clear to a dim warm background
  fill_solid(fastleds, leds, swap_rgb_order(CRGB(10, 2, 0), rgbOrder));

  // Render layers with fire palettes
  pacifica_one_layer(fireocean_palette_1, sCIStart1, beatsin16(3, 11 * 256, 14 * 256), beatsin8(10, 70, 130), 0-beat16(301));
  pacifica_one_layer(fireocean_palette_2, sCIStart2, beatsin16(4, 6 * 256, 9 * 256), beatsin8(17, 40, 80), beat16(401));
  pacifica_one_layer(fireocean_palette_3, sCIStart3, 6 * 256, beatsin8(9, 10, 38), 0-beat16(503));
  pacifica_one_layer(fireocean_palette_3, sCIStart4, 5 * 256, beatsin8(8, 10, 28), beat16(601));

  // Add brighter 'sparks'
  fireocean_add_sparks();

  // Enhance the reds and yellows
  for(uint16_t i = 0; i < leds; i++) {
    fastleds[i].red = scale8(fastleds[i].red, 200);
    fastleds[i].green = scale8(fastleds[i].green, 100);
    fastleds[i] |= swap_rgb_order(CRGB(5, 1, 0), rgbOrder);
  }
}

void plasma() {                                                 // This is the heart of this program. Sure is short. . . and fast.

  static CRGBPalette16  currentPalette = OceanColors_p;
  static CRGBPalette16  targetPalette;
  static TBlendType     currentBlending = LINEARBLEND;

  if (millis() % 5000 == 0) {                                   // Change the target palette to a random one every 5 seconds.
    uint8_t baseC = random8();                                  // You can use this as a baseline colour if you want similar hues in the next line.
    targetPalette = CRGBPalette16(CHSV(baseC+random8(32), 192, random8(128,255)), CHSV(baseC+random8(32), 255, random8(128,255)), CHSV(baseC+random8(32), 192, random8(128,255)), CHSV(baseC+random8(32), 255, random8(128,255)));
  }

  if (millis() % 100 == 0) {
    uint8_t maxChanges = 24;
    nblendPaletteTowardPalette(currentPalette, targetPalette, maxChanges);   // AWESOME palette blending capability.
  }

  if (millis() % 50) return;

  int thisPhase = beatsin8(6,-64,64);                           // Setting phase change for a couple of waves.
  int thatPhase = beatsin8(7,-64,64);

  for (int k=0; k < leds; k++) {                              // For each of the LED's in the strand, set a brightness based on a wave as follows:

    int colorIndex = cubicwave8((k*23)+thisPhase)/2 + cos8((k*15)+thatPhase)/2;           // Create a wave and add a phase change and add another wave with its own phase change.. Hey, you can even change the frequencies if you wish.
    int thisBright = qsub8(colorIndex, beatsin8(7,0,96));                                 // qsub gives it a bit of 'black' dead space by setting sets a minimum value. If colorIndex < current value of beatsin8(), then bright = 0. Otherwise, bright = colorIndex..

    fastleds[k] = swap_rgb_order(ColorFromPalette(currentPalette, colorIndex, thisBright, currentBlending), rgbOrder);  // Let's now add the foreground colour.
  }
}

void blur() {

  uint8_t blurAmount = dim8_raw(beatsin8(3,64, 192) );       // A sinewave at 3 Hz with values ranging from 64 to 192.
  blur1d(fastleds, leds, blurAmount);                         // Apply some blurring to whatever's already on the strip, which will eventually go black.

  uint8_t  i = beatsin8(9, 0, leds);
  uint8_t  j = beatsin8(7, 0, leds);
  uint8_t  k = beatsin8(5, 0, leds);

  // The color of each point shifts over time, each at a different speed.
  uint16_t ms = millis();
  fastleds[(i+j)/2] = CHSV( ms / 29, 200, 255);
  fastleds[(j+k)/2] = CHSV( ms / 41, 200, 255);
  fastleds[(k+i)/2] = CHSV( ms / 73, 200, 255);
  fastleds[(k+i+j)/3] = CHSV( ms / 53, 200, 255);
}

void confetti_pal() {                                         // random colored speckles that blink in and fade smoothly

  static CRGBPalette16 currentPalette;
  static CRGBPalette16 targetPalette;
  static TBlendType    currentBlending = LINEARBLEND;         // NOBLEND or LINEARBLEND

  static uint8_t   thisfade = 8;                                       // How quickly does it fade? Lower = slower fade rate.
  static int       thishue = 50;                                       // Starting hue.
  static uint8_t   thisinc = 1;                                        // Incremental value for rotating hues
  static uint8_t   thissat = 100;                                      // The saturation, where 255 = brilliant colours.
  // static uint8_t   thisbri = 255;                                   // Removed unused variable thisbri // Brightness of a sequence. Remember, max_bright is the overall limiter.
  static int       huediff = 256;                                      // Range of random #'s to use for hue

uint8_t secondHand = (millis() / 1000) % 15;                  // IMPORTANT!!! Change '15' to a different value to change duration of the loop.
  static uint8_t lastSecond = 99;                             // Static variable, means it's only defined once. This is our 'debounce' variable.
  if (lastSecond != secondHand) {                             // Debounce to make sure we're not repeating an assignment.
    lastSecond = secondHand;
    switch(secondHand) {
      case  0: targetPalette = OceanColors_p; thisinc=1; thishue=192; thissat=255; thisfade=2; huediff=255; break;  // You can change values here, one at a time , or altogether.
      case  5: targetPalette = LavaColors_p; thisinc=2; thishue=128; thisfade=8; huediff=64; break;
      case 10: targetPalette = ForestColors_p; thisinc=1; thishue=random16(255); thisfade=1; huediff=16; break;      // Only gets called once, and not continuously for the next several seconds. Therefore, no rainbows.
      case 15: break;                                         // Here's the matching 15 for the other one.
    }
  }

  if (millis() % 100 == 0) {
    const uint8_t maxChanges = 24;
    nblendPaletteTowardPalette(currentPalette, targetPalette, maxChanges);
  }

  if (millis() % 5 == 0) {
    fadeToBlackBy(fastleds, leds, thisfade);                    // Low values = slower fade.
    int pos = random16(leds);                                   // Pick an LED at random.
    fastleds[pos] = swap_rgb_order(ColorFromPalette(currentPalette, thishue + random16(huediff)/4 , thissat, currentBlending), rgbOrder);
    thishue = thishue + thisinc;                                // It increments here.
  }
}

void ease() {

  static uint8_t easeOutVal = 0;
  static uint8_t easeInVal  = 0;
  static uint8_t lerpVal    = 0;

  //if (millis() % 5 == 0)
  {
    easeOutVal = ease8InOutQuad(easeInVal);                     // Start with easeInVal at 0 and then go to 255 for the full easing.
    easeInVal++;

    lerpVal = lerp8by8(0, leds-1, easeOutVal);                  // Map it to the number of LED's you have.

    fastleds[lerpVal] = swap_rgb_order(CRGB::Red, rgbOrder);
    fadeToBlackBy(fastleds, leds, 32);                          // 8 bit, 1 = slow fade, 255 = fast fade
  }
}

void ease2() {
  //fastleds[5 + (millis() / 1000) % 4)] = CRGB::Blue;
  fastleds[(millis() / 1000) % leds] = swap_rgb_order(CRGB::Cyan, rgbOrder);
  fadeToBlackBy(fastleds, leds, 2);                           // 8 bit, 1 = slow fade, 255 = fast fade
}

// void update_profile_led() {
//   CRGB color;
//   switch (currentProfile) {
//     case 0:  color = CRGB::Orange;    break;
//     case 1:  color = CRGB::Cyan;      break;
//     case 2:  color = CRGB::Magenta;   break;
//   }
//   fastleds[19] = swap_rgb_order(color, rgbOrder);
//   FastLED.show();
// }

void update_profile_led() {
  CRGB color;
  switch (currentProfile) {
    case 0:  color = PROFILE_A_COLOR;  break;
    case 1:  color = PROFILE_B_COLOR;  break;
    case 2:  color = PROFILE_C_COLOR;  break;
  }
  fastleds[leds - 1] = swap_rgb_order(color, rgbOrder);
  FastLED.show();
}