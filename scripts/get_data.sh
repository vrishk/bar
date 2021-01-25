#! /bin/bash

set -Eeuo pipefail

BATTERY_PERCENTAGE=$(pmset -g batt | egrep '([0-9]+\%).*' -o --colour=auto | cut -f1 -d'%')
BATTERY_STATUS=$(pmset -g batt | grep "'.*'" | sed "s/'//g" | cut -c 18-19)

CAFFEINATE=caffeinate
CAFFEINATE_PID=""
if pgrep $CAFFEINATE 2>&1 >/dev/null; then
  CAFFEINATE_PID=$(pgrep $CAFFEINATE)
fi

BATTERY_CHARGING=""
if [ "$BATTERY_STATUS" = "Ba" ]; then
  BATTERY_CHARGING="false"
elif [ "$BATTERY_STATUS" = "AC" ]; then
  BATTERY_CHARGING="true"
fi

WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
WIFI_SSID=$(networksetup -getairportnetwork en0 | cut -c 24-)


MIC=$(osascript -e 'set ovol to input volume of (get volume settings)')




