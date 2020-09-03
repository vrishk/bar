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

export const render = (output) => {
  console.log(output);
  let app = "Finder";
  if (output.error === undefined) {
    app = JSON.parse(output.output).app;
    console.log({ app });
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
