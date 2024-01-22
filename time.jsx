import { config } from "./config.jsx";

export const command = "date +'%H:%M %a %Y-%m-%d'";

export const refreshFrequency = 60000;

export const style = {
  ...config,
  margin: "0px 5px",
  cursor: "default",
  position: "fixed",
  right: "13%",
  userSelect: "none",
  transform: "translate(50%)",
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
