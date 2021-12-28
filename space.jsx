import { config } from "./config.jsx";

const group = require("./windows.json");
const icon = require("./icons.json");

const getIcon = (name) => {
  const getGroup = (name) => {
    if (group[name]) return group[name];
    return "Window";
  };
  return icon[getGroup(name)];
};

export const command =
  "~/Software/ui/widgets/bar/scripts/get_spaces.sh /opt/homebrew/bin/yabai";

export const refreshFrequency = false;

export const style = {
  ...config,
  paddingRight: "10px",
  position: "fixed",
  cursor: "default",
  left: "0%",
  userSelect: "none",
  overflow: "visible",
};

export const updateState = (event, previousState) => {
  console.log({ previousState, event });
  if (!event.output) {
    return {
      ...previousState,
      warning: `Empty Output: ${event.error}`,
    };
  }
  return event;
};

export const render = (output) => {
  let sw = {};
  try {
    sw = JSON.parse(output.output);
  } catch {
    return <div style={style}> </div>;
  }

  let spaces = sw.spaces;

  let windows = {};
  for (const win of sw.windows) {
    if (!windows[win.space]) windows[win.space] = [];
    windows[win.space].push(getIcon(win.app));
  }

  console.log(windows);

  return (
    <div style={style}>
      {spaces.map((space, index) => {
        let icons = windows[index + 1]
          ? " " + windows[index + 1].join(" ")
          : "";
        return (
          <span
            style={
              space["has-focus"]
                ? {
                  color: "rgba(0, 0, 0, 0.7)",
                  backgroundColor: "rgb(220, 220, 220)",
                  padding: "4px 7px",
                  margin: "5px",
                }
                : {
                  padding: "4px 7px",
                  color: "rgb(180, 180, 180)",
                  margin: "5px",
                }
            }
          >
            {`${index + 1}${icons}`}
          </span>
        );
      })}
    </div>
  );
};
