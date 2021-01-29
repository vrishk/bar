import { config } from "./config.jsx";

export const command = "date +'%I:%M %Y-%m-%d'";

export const refreshFrequency = 60000;

export const style = {
  ...config,
  margin: "0px 5px",
  cursor: "default",
  position: "fixed",
  right: "16%",
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
          color: "deepskyblue",
        }}
      >
        {dt}
      </span>
    </div>
  );
};
