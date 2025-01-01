import { config } from "./config.jsx";

export const command =
  "~/Software/bar/scripts/get_process.sh /opt/homebrew/bin/yabai";

export const refreshFrequency = false;

export const style = {
  ...config,
  paddingRight: "20px",
  paddingLeft: "20px",
  cursor: "default",
  position: "fixed",
  left: "50%",
  transform: "translate(-50%)",
  userSelect: "none",
  overflow: "visible",
};

export const render = (output) => {
  let windows, res;
  try {
    windows = JSON.parse(output.output).process;
    res = `${windows[0].app} / ${windows[0].title}`;
  } catch (e) {
    console.log(e);
    res = "";
  }
  if (res.length > 30) {
    res = res.slice(0, 47) + "...";
  }
  return (
    <div style={style}>
      <span
        style={{
          color: "rgb(205, 205, 205)",
        }}
      >
        {res}
      </span>
    </div>
  );
};
