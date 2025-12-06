import {gsap} from "gsap";

export default {};

export const scrollExecutionObserver = (self) => {
  const target = self.$refs.list;
  const intersectionCallback = (entities) => {
    if (!entities[0]?.intersectionRatio) {
      return;
    }

    observer.unobserve(target);
    gsap.to(".the-execution-section__devices-phone", {
      x: -266,
      ease: "none",
      opacity: 1,
    });

    gsap.to(".the-execution-section__devices-tablet", {
      delay: 1,
      x: -266,
      ease: "none",
      opacity: 1,
    });

    gsap.to(".the-execution-section__devices-desktop", {
      delay: 2,
      x: -266,
      ease: "none",
      opacity: 1,
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, {threshold: 0.5});
  observer.observe(target);
}
