import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial({ name, message, company, role }) {
  return (
    <>
      // with picture
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
      // no picture
      <div className="testimonial no-picture">
        <img
          src="/src/assets/logo.svg"
          alt="little house with coconut tree / logo"
          className="logo"
        />
        <p>"{message}"</p>
        <h2>
          {name}
          <span>
            <b class="slash"> /</b> {company}, {role}
          </span>
        </h2>
        <img
          src="src/assets/grid.svg"
          alt="grid / for design purposes only"
          className="grid"
        />
      </div>
    </>
  );
}
