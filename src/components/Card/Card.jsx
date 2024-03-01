import { HiCloudUpload } from "react-icons/hi";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Card({ icon = <HiCloudUpload />, children }) {
  const [hover, setHover] = useState(false);

  let cardClasses = classNames({
    card: true,
    'card--hover': hover,
  });

  function toggleHover() {
    setHover((prev) => !prev);
  }

  useEffect(() => {
  }, [hover]);

  return (
    <>
      <div
        className={cardClasses}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {children} <div className="card--icon">{icon}</div>
      </div>
    </>
  );
}
