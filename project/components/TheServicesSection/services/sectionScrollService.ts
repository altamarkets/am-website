export default {};

export const scrollObserver = (self) => {
  const target = self.$refs.box;
  const intersectionCallback = (entities) => {
    if (!entities[0]?.intersectionRatio) {
      return;
    }

    observer.unobserve(target);
    self.linesAnimation1Started = true;
    self.linesAnimation2Started = true;
    self.cubesAnimationStarted = true;
  };

  const observer = new IntersectionObserver(intersectionCallback, {threshold: 0.5});
  observer.observe(target);
}
