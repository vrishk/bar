#! /bin/bash

set -Eeuo pipefail


WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
WIFI_SSID=$(networksetup -getairportnetwork en0 | cut -c 24-)


echo $(cat <<-EOF
  {
    "status": "$WIFI_STATUS",
    "ssid": "$WIFI_SSID"
  }
EOF
)
