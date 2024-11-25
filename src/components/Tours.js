import Title from "./Title";
import { trips } from "../data";

const Tours = () => {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <Title title={"featured"} subtitle={"tours"} />
      </div>

      <div class="section-center featured-center">
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
            <article class="tour-card" key={id}>
              <div class="tour-img-container">
                <img src={src} class="tour-img" alt="" />
                <p class="tour-date">{date}</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class={icon}></i>
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
