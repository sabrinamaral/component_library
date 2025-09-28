import { badgeStatus } from "../assets/badgeStatus";

export default function Badge({ color, pill }) {
  const styles = {
    color: badgeStatus.colors[color],
    backgroundColor: badgeStatus.backgrounds[color],
    borderRadius: pill ? "12px" : null,
  };

  return (
    <div className="badge">
      <h1 style={styles}>Badge</h1>
    </div>
  );
}
