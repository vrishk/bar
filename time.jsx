import { config } from "./config.jsx";

export const command = "date +'%I:%M %a %Y-%m-%d'";

export const refreshFrequency = 60000;

export const style = {
  ...config,
  paddingRight: "20px",
  paddingLeft: "20px",
  cursor: "default",
  position: "fixed",
  right: "18.5%",
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
