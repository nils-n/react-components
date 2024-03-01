import classNames from "classnames";

export default function Badge({ color = "gray", shape = "square", children }) {
  const badgeClass = classNames({
    pill: shape == "pill",
    [`${color}`]: true,
    badge: true,
  });

  console.log(badgeClass);

  return <div className={badgeClass}>{children}</div>;
}
