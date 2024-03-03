import { HiMiniMoon } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";
import { DarkmodeContext } from "../../App";
import { useContext } from "react";
import classNames from "classnames";

export default function Toggler() {
  const { darkMode, toggleDarkmode } = useContext(DarkmodeContext);

  const togglerClasses = classNames({
    toggler: true,
    light: darkMode == "light",
    dark: darkMode == "dark",
  });

  return (
    <div className={togglerClasses}>
      <p className="toggler-light ">
        <HiMiniSun />
      </p>
      <div className="toggler--slider" onClick={toggleDarkmode}>
        <div className="toggler--slider-circle "></div>
      </div>
      <p className="toggler-dark">
        <HiMiniMoon />{" "}
      </p>
    </div>
  );
}
