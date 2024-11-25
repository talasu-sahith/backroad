import Title from "./Title";
import { service } from "../data";

const Services = () => {
  return (
    <section class="section services" id="services">
      <div class="section-title">
        <Title title={"our"} subtitle={"services"} />
      </div>
      <div class="section-center services-center">
        {service.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article class="service" key={id}>
              <span class="service-icon">
                <i class={icon}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
