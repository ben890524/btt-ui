function TextBoldFilter(targetElement: HTMLElement) {
  targetElement.hasAttribute("text-bold")
    ? targetElement.classList.add("bold")
    : targetElement.classList.remove("bold");
}
export default TextBoldFilter;
