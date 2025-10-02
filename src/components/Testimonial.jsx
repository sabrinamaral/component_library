import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial({ name, message, company, role }) {
  return (
    <div className="testimonial">
      <div className="blue-bg">
        <div className="white-bg"></div>
        <div className="img-container">
          <img
            src="src/assets/picture.jpg"
            alt="a woman sitted in front of a window"
          />
        </div>
        <section className="content">
          <ImQuotesLeft fontSize={"48px"} color="rgba(255, 255, 255, 25%)" />
          <p>{message}</p>
          <h1>{name}</h1>
          <h2>
            {company}, {role}
          </h2>
        </section>
      </div>
    </div>
  );
}
