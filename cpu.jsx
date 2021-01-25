import { config } from "./config.jsx";

export const command = "/usr/local/bin/osx-cpu-temp";

export const refreshFrequency = 2000;

export const style = {
  ...config,
  margin: "0px 5px",
  position: "fixed",
  cursor: "default",
  right: "7%",
  transform: "translate(50%)",
  userSelect: "none",
  overflow: "visible",
};

export const render = (output) => {
  let temp = parseInt(output.output);
  // console.log({ temp });
  return (
    <div style={style}>
      <span
        style={{
          color: temp > 60 ? "rgba(255, 0, 0, 1.0)" : "rgba(255, 205, 1.0)",
        }}
      >
        {temp}°C
      </span>
    </div>
  );
};
