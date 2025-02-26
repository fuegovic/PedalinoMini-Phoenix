/*
  (c) 2018-2025 alf45star
  https://github.com/alf45tar/PedalinoMini

  This file is part of PedalinoMini.

  You should have received a copy of the GNU General Public License
  along with PedalinoMini. If not, see <http://www.gnu.org/licenses/>.

  Modifications by Fuegovic, 2025.
*/

#include <Ticker.h>

Ticker        timer1, timer2, timer3;

volatile int  interruptCounter1 = 0;
volatile int  interruptCounter2 = 0;
volatile int  interruptCounter3 = 0;

static void onTimer1()
{
  interruptCounter1++;
}

static void onTimer2()
{
  interruptCounter2++;
}

static void onTimer3()
{
  interruptCounter3++;
}

void Timer1Attach(uint32_t ms)
{
 timer1.attach_ms(ms, onTimer1);
}

void Timer2Attach(uint32_t ms)
{
 timer2.attach_ms(ms, onTimer2);
}

void Timer3Attach(uint32_t ms)
{
 timer3.attach_ms(ms, onTimer3);
}
