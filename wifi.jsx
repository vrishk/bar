import { config } from "./config.jsx";

export const command =
  "~/Software/ui/widgets/bar/scripts/get_wifi.sh 2>/dev/null ";

export const refreshFrequency = 10000;

export const style = {
  ...config,
  margin: "0px 5px",
  position: "fixed",
  cursor: "default",
  right: "24%",
  userSelect: "none",
  overflow: "visible",
};

export const render = (output) => {
  let wifi = { status: "inactive", ssid: "", ethernet: "inactive" };
  try {
    wifi = JSON.parse(output.output);
  } catch (e) {
    console.log(e);
  }

  let on;

  if (wifi.ethernet == "active") {
    on = true;
    wifi.ssid = "Ethernet";
  } else {
    on = wifi.status === "active";
  }

  console.log(wifi);

  return (
    <div style={style}>
      <span
        style={{
          color: "orange",
        }}
      >
        {on ? wifi.ssid : "􀙈"}
      </span>
    </div>
  );
};
