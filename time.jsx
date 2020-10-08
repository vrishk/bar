import { config } from "./config.jsx";

export const command = "date +'%a %d %b %Y %I:%M'";

export const refreshFrequency = 60000;

export const style = {
  ...config,
  paddingRight: "20px",
  paddingLeft: "20px",
  cursor: "default",
  position: "fixed",
  zIndex: "-1",
  left: "35%",
  userSelect: "none",
  overflow: "visible",
};

export const render = (output) => {
  let dt = output.output;
  // console.log({ dt });
  return (
    <div style={style}>
      <span
        style={{
          color: "rgb(205, 205, 205)",
        }}
      >
        {dt}
      </span>
    </div>
  );
};
