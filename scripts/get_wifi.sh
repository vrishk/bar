#! /bin/bash

WIFI_STATUS=$(ifconfig en0 | grep status | cut -c 10-)
WIFI_SSID=$(networksetup -getairportnetwork en0 | cut -c 24-)

ETHERNET_STATUS=$(ifconfig en8 | grep status | cut -c 10- && ifconfig en6 | grep status | cut -c 10- || echo "inactive")

echo $(cat <<-EOF
  {
    "status": "$WIFI_STATUS",
    "ssid": "$WIFI_SSID",
    "ethernet": "$ETHERNET_STATUS"
  }
EOF
)
