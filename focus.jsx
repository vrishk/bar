import { config } from "./config.jsx";

export const command = "/usr/local/bin/yabai -m query --windows --window";

export const refreshFrequency = 500;

export const style = {
  ...config,
  paddingRight: "20px",
  paddingLeft: "20px",
  cursor: "default",
  position: "fixed",
  zIndex: "-1",
  left: "4%",
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
  let app = "Finder";
  try {
    app = JSON.parse(output.output).app;
    console.log({ app });
  } catch (e) {
    console.log(e);
  }
  return (
    <div style={style}>
      <span
        style={{
          color: "rgb(205, 205, 205)",
        }}
      >
        {app}
      </span>
    </div>
  );
};
