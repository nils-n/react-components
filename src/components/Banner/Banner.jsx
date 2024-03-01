import classNames from "classnames";
import { HiCheckCircle } from "react-icons/hi";
import { HiXCircle } from "react-icons/hi";
import { HiExclamation } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";

export default function Banner({ children, status = "neutral" }) {
  const bannerClasses = classNames({
    banner: true,
    green: status === "success",
    red: status === "danger",
    yellow: status === "warning",
    blue: status === "neutral",
  });

  const iconClasses = classNames({
    icon: true,
    [`icon-${status}`]: true,
  });

  console.log(bannerClasses);

  return (
    <div className={bannerClasses}>
      <div className={iconClasses}>
        {status === "success" && <HiCheckCircle />}
        {status === "danger" && <HiXCircle />}
        {status === "warning" && <HiExclamation />}
        {status === "neutral" && <HiInformationCircle />}
      </div>
      <div>{children}</div>
    </div>
  );
}
