# Display mode

Where|What|Display|Description
:---:|:--:|-------|:----------
Bank Name|Empty|![](../assets/oled-display1.gif)|If the current bank name is empty the current profile and the current bank is shown using a vintage 7 segment LED style. First digit is the profile, the others two are for bank.
Bank Name|Any|![](../assets/oled-display2.gif)|If current bank name is not empty the bank name is displayed within the 6 pedal names. PedalinoMini assumes the first action tag for the pedal as its pedal name. The bank name screen will switch every 4 seconds to display pedals current value if no event occurs.
Bank Name|`:`|![](../assets/oled-display3.gif)|If the bank name start with colon `:` the bank name is always shown (if no event occurs).
Bank Name|`.`|![](../assets/oled-display4.gif)|If bank name start with point `.` the current values are shown and events update values in real time without any display switch.
Bank Name|`##`||A double hashtag sign `##` in bank name is replaced with the bank number.
Action Tags|`:`|![](../assets/oled-display6.gif)|If action tag start with colon `:` the display is not switched when an event occurs.
Action Tags|`.`|![]()|If action tag end with dot `.` the corresponding led and color is set on boot.
Action Tag|`###`|![](../assets/oled-display7.gif)|A triple hashtag sign `###` in action tag is replaced with the current value of the parameter.