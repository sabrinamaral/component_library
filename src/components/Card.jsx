import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({
  icon = <IoCloudUploadOutline className="icon-style" />,
  iconBackground,
  iconColor,
  children,
}) {
  const styles = {
    background: iconBackground || "#3f75fe",
    color: iconColor || "#fff",
  };

  return (
    <div className="card">
      <span style={styles}>{icon}</span>
      {children}
    </div>
  );
}
