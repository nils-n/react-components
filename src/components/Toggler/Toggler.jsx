import { HiMiniMoon } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";

export default function Toggler() {
  return (
    <div className="toggler light ">
      <p className="toggler-light ">
        <HiMiniSun />
      </p>
      <div className="toggler--slider ">
        <div
          className="toggler--slider-circle "
          onClick={() => console.log("toggled")}
        ></div>
      </div>
      <p className="toggler-dark">
        <HiMiniMoon />{" "}
      </p>
    </div>
  );
}
