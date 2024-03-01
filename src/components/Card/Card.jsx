import { HiCloudUpload } from "react-icons/hi";
export default function Card({ icon = <HiCloudUpload />, children }) {
  return <div className="card">{children}</div>;
}
