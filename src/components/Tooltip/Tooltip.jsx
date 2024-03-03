import classNames from "classnames";
import { HiXMark } from "react-icons/hi2";
import { HiArchiveBox } from "react-icons/hi2";
import { useState } from "react";

export default function Tooltip({
  title,
  text,
  color = "green",
  darkmode = "light",
}) {
  const [visible, setVisible] = useState(true);

  function dismissTooltip() {
    setVisible((prev) => !prev);
  }

  const tooltipClasses = classNames({
    tooltip: true,
    black: color === "black",
    darkblue: color === "darkblue",
    purple: color === "purple",
    darkgreen: color === "darkgreen",
    dark: darkmode === "dark",
    hidden: !visible,
  });

  const iconClasses = classNames({
    "tooltip--icon": true,
    "black-accent": color === "black",
    "darkblue-accent": color === "darkblue",
    "purple-accent": color === "purple",
    "darkgreen-accent": color === "darkgreen",
  });

  return (
    <div className={tooltipClasses}>
      <div className="tooltip--triangle"></div>
      <div className={iconClasses}>
        <HiArchiveBox />
      </div>
      <div className="tooltip--title">{title}</div>
      <div className="tooltip--text">{text}</div>
      <button className="tooltip--cross" onClick={dismissTooltip}>
        <HiXMark />
      </button>
    </div>
  );
}
