import { config } from "./config.jsx";

export const command =
  "pmset -g batt | egrep '([0-9]+%).*' -o --colour=auto | cut -f1-2 -d';'";

export const refreshFrequency = 10000;

export const style = {
  ...config,
  margin: "0px 5px",
  position: "fixed",
  cursor: "default",
  right: "3%",
  transform: "translate(50%)",
  userSelect: "none",
  overflow: "visible",
};

export const render = (output) => {
  try {
    console.log("battery", output);
    let [level, status] = output.output.split("; ");
    let charging = status !== "discharging\n";
    let color = "rgba(0, 205, 0, 1.0)";
    if (parseInt(level) < 15 && charging == false) {
      color = "rgba(255, 0, 0, 1.0)";
    } else if (parseInt(level) < 30 && charging == false) {
      color = "rgba(255, 205, 1.0)";
    }
    return (
      <div style={style}>
        <span
          style={{
            color: color,
          }}
        >
          {charging ? "⚡" : null}
          {level}
        </span>
      </div>
    );
  } catch {}
};
