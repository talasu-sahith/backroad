import Title from "./Title";
import { trips } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title={"featured"} subtitle={"tours"} />
      </div>

      <div className="section-center featured-center">
        {trips.map((item) => {
          const {
            src,
            id,
            date,
            title,
            text,
            country,
            timespan,
            startsfrom,
            icon,
          } = item;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={src} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{timespan}</p>
                  <p>{startsfrom}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
