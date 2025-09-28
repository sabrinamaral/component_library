import { bannerStatus } from "../assets/bannerStatus";
import { FaCircleXmark } from "react-icons/fa6";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

export default function Banner({ status = "nenutral", children }) {
  const iconStyles = { height: "20px", width: "20px" };
  const icons = {
    success: <FaCheckCircle style={iconStyles} color="#34D399" />,
    warning: <FaExclamationTriangle style={iconStyles} color="#FBBF24" />,
    error: <FaCircleXmark style={iconStyles} color="#F87171" />,
    neutral: <FaInfoCircle style={iconStyles} color="#60A5FA" />,
  };

  const styles = bannerStatus[status] || bannerStatus.neutral;

  return (
    <div className="banner" style={{ background: styles.backgroundColor }}>
      {icons[status] || icons["neutral"]}
      <section style={{ color: styles.textColor }}>{children}</section>
    </div>
  );
}
