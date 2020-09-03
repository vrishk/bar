import { config } from "./config.jsx";

export const command =
  "/usr/local/bin/yabai -m query --spaces --space | /usr/local/bin/jq .index";

export const refreshFrequency = 500;

export const style = {
  ...config,
  paddingRight: "10px",
  paddingLeft: "10px",
  position: "fixed",
  cursor: "default",
  right: "40%",
  userSelect: "none",
  zIndex: "-1",
  overflow: "visible",
};

export const render = (output) => {
  let space = output.output;
  console.log(output);
  return (
    <div style={style}>
      <span
        style={{
          color: "rgb(205, 205, 205)",
        }}
      >
        {space}
      </span>
    </div>
  );
};
