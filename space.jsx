import { config } from "./config.jsx";

export const command = "/usr/local/bin/yabai -m query --spaces";

export const refreshFrequency = 500;

export const style = {
  ...config,
  paddingRight: "10px",
  paddingLeft: "10px",
  position: "fixed",
  cursor: "default",
  left: "62%",
  userSelect: "none",
  zIndex: "-1",
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
  let spaces = [];
  try {
    spaces = JSON.parse(output.output);
  } catch {}
  console.log(spaces);
  return (
    <div style={style}>
      {spaces.map((space, index) => {
        return (
          <span
            style={{
              color: "rgb(205, 205, 205)",
            }}
          >
            {space.focused ? "⚪ " : "⭘ "}
          </span>
        );
      })}
    </div>
  );
};
