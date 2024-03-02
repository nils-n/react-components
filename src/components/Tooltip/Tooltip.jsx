import classNames from "classnames";
import { HiXMark } from "react-icons/hi2";
import { HiArchiveBox } from "react-icons/hi2";

export default function Tooltip({
  title,
  text,
  color = "green",
  darkmode = "light",
}) {
  const tooltipClasses = classNames({
    tooltip: true,
    black: color === "black",
    darkblue: color === "darkblue",
    purple: color === "purple",
    darkgreen: color === "darkgreen",
    dark: darkmode === "dark",
  });

  return (
    <div className={tooltipClasses}>
      <div className="tooltip--triangle"></div>
      <div className="tooltip--icon">
        <HiArchiveBox />
      </div>
      <div className="tooltip--title">{title}</div>
      <div className="tooltip--text">{text}</div>
      <div className="tooltip--cross">
        <HiXMark />
      </div>
    </div>
  );
}
