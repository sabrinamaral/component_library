import { bannerStatus } from "../assets/bannerStatus";
import { FaCircleXmark } from "react-icons/fa6";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

export default function Banner({ children }) {
  const iconStyles = {
    height: "20px",
    width: "20px",
  };
  const icons = {
    success: <FaCheckCircle style={iconStyles} color="#34D399" />,
    warning: <FaExclamationTriangle style={iconStyles} color="#FBBF24" />,
    error: <FaCircleXmark style={iconStyles} color="#F87171" />,
    neutral: <FaInfoCircle style={iconStyles} color="#60A5FA" />,
  };

  let styles;
  if (bannerStatus[children.status]) {
    styles = {
      icon: icons[children.status],
      titleColor: bannerStatus[children.status].titleColor,
      textColor: bannerStatus[children.status].textColor,
      backgroundColor: bannerStatus[children.status].backgroundColor,
      missingProp: "",
    };
  }

  return (
    <div
      className={`banner ${!children.text ? "hidden" : ""}`}
      style={{ background: styles.backgroundColor }}
    >
      {styles.icon}
      <section>
        <h1 style={{ color: styles.titleColor }}>{children.title}</h1>
        <p style={{ color: styles.textColor }} color={styles.textColor}>
          {children.text}
        </p>
      </section>
    </div>
  );
}
