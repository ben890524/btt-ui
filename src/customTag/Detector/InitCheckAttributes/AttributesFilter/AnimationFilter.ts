function AnimationFilter(targetElement: HTMLElement) {
  const hasAnimationAttribute = targetElement.hasAttribute("animation");
  if (hasAnimationAttribute && targetElement.getAttribute("animation") !== "")
    targetElement.classList.add(targetElement.getAttribute("animation")!);
}
export default AnimationFilter;
