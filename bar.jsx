import { config } from "./config.jsx";

export const command = false;

export const refreshFrequency = false;

export const style = {
  ...config,
  background: "rgb(30,30,30,0.8)",
  cursor: "default",
  position: "fixed",
  zIndex: "-1",
  width: "100%",
  userSelect: "none",
  overflow: "visible",
};

export const render = () => {
  return <div style={style}></div>;
};
