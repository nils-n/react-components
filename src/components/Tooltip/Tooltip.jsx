import classNames from "classnames";
import { HiXMark } from "react-icons/hi2";
import { HiArchiveBox } from "react-icons/hi2";
import { useState } from "react";
import { useContext } from "react";
import { DarkmodeContext } from "../../App";

export default function Tooltip({
  title,
  text,
  color = "green",
  darkmode = "light",
}) {
  const [visible, setVisible] = useState(true);
  const { darkMode } = useContext(DarkmodeContext);

  function dismissTooltip() {
    setVisible((prev) => !prev);
  }

  const tooltipClasses = classNames({
    tooltip: true,
    black: color === "black",
    darkblue: color === "darkblue",
    darkpurple: color === "darkpurple",
    darkgreen: color === "darkgreen",
    dark: (darkmode === darkMode) === "dark",
    hidden: !visible,
  });

  const iconClasses = classNames({
    "tooltip--icon": true,
    "black-accent": color === "black",
    "darkblue-accent": color === "darkblue",
    "darkpurple-accent": color === "darkpurple",
    "darkgreen-accent": color === "darkgreen",
  });

  const titleClasses = classNames({
    "tooltip--title": true,
    "black-title": color === "black",
    "darkblue-title": color === "darkblue",
    "darkpurple-title": color === "darkpurple",
    "darkgreen-title": color === "darkgreen",
  });

  const crossClasses = classNames({
    "tooltip--cross": true,
    "black-title": color === "black",
    "darkblue-title": color === "darkblue",
    "darkpurple-title": color === "darkpurple",
    "darkgreen-title": color === "darkgreen",
  });

  return (
    <div className={tooltipClasses}>
      <div className="tooltip--triangle"></div>
      <div className={iconClasses}>
        <HiArchiveBox />
      </div>
      <div className={titleClasses}>{title}</div>
      <div className="tooltip--text">{text}</div>
      <button className={crossClasses} onClick={dismissTooltip}>
        <HiXMark />
      </button>
    </div>
  );
}
