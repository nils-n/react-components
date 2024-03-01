import classNames from "classnames";

export default function Banner({ children, status = "neutral" }) {
  const bannerClasses = classNames({
    banner: true,
    green: status === "success",
    red: status === "danger",
    yellow: status === "warning",
    blue: status === "neutral",
  });

  console.log(bannerClasses);

  return (
    <div className={bannerClasses}>
      <div>symbol</div>
      <div>{children}</div>
    </div>
  );
}
