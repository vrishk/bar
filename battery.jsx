import { config } from "./config.jsx";

export const command =
  "pmset -g batt | egrep '([0-9]+%).*' -o --colour=auto | cut -f1-2 -d';'";

export const refreshFrequency = 2000;

export const style = {
  ...config,
  paddingRight: "10px",
  paddingLeft: "10px",
  position: "fixed",
  cursor: "default",
  right: "4%",
  userSelect: "none",
  zIndex: "-1",
  overflow: "visible",
};

export const render = (output) => {
  let [level, status] = output.output.split("; ");
  let charging = !(status == "discharging\n");
  return (
    <div style={style}>
      <span
        style={{
          color: "rgb(205, 205, 205)",
        }}
      >
        bat:
      </span>
      <span
        style={{
          color:
            level < 15 && charging == false
              ? "rgba(255, 0, 0, 1.0)"
              : "rgba(0, 205, 1.0)",
        }}
      >
        {charging ? "⚡" : null}
        {level}
      </span>
    </div>
  );
};
