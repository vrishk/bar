import { config } from "./config.jsx";

export const command = "~/Software/ui/widgets/bar/scripts/get_wifi.sh";

export const refreshFrequency = 10000;

export const style = {
  ...config,
  margin: "0px 5px",
  position: "fixed",
  cursor: "default",
  transform: "translate(50%)",
  right: "12%",
  userSelect: "none",
  overflow: "visible",
};

export const render = (output) => {
  let wifi = { status: "inactive", ssid: "" };
  try {
    wifi = JSON.parse(output.output);
  } catch {}
  let on = wifi.status === "active";
  let color = "orange";

  console.log(wifi);

  return (
    <div style={style}>
      <span
        style={{
          color: color,
        }}
      >
        {on ? wifi.ssid : "􀙈"}
      </span>
    </div>
  );
};
