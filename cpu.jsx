import { config } from "./config.jsx";

export const command = "~/Software/cli/osx-cpu-temp/osx-cpu-temp";

export const refreshFrequency = 500;

export const style = {
  ...config,
  paddingRight: "10px",
  paddingLeft: "10px",
  position: "fixed",
  cursor: "default",
  right: "15%",
  userSelect: "none",
  zIndex: "-1",
  overflow: "visible",
};

export const render = (output) => {
  let temp = parseInt(output.output);
  console.log({ temp });
  return (
    <div style={style}>
      <span
        style={{
          color: "rgb(205, 205, 205)",
        }}
      >
        temp:
      </span>
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
