#! /bin/bash
set -euo pipefail

WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
WIFI_SSID=$(ipconfig getsummary en0 | awk -F ' SSID : ' '/ SSID : / {print $2}')

ETHERNET_STATUS=$(ifconfig en8 | grep status | cut -c 10- && ifconfig en6 | grep status | cut -c 10- || echo "inactive")

echo $(cat <<-EOF
  {
    "status": "$WIFI_STATUS",
    "ssid": "$WIFI_SSID",
    "ethernet": "$ETHERNET_STATUS"
  }
EOF
)
