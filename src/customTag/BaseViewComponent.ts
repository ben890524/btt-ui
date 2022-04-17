import BmutationObserver from "./BmutationObserver";
class BaseViewComponent extends HTMLElement {
  name: string = "ViewComponent";
  constructor(componentName: string) {
    super();
    this.name = componentName;
    this.init();
  }
  init() {
    this.selfAttrubutesCheck();
    this.initObserver();
    console.log(`Custom Tag ${this.name} init.`);
  }
  selfAttrubutesCheck() {
    this.checkTextBold();
  }
  initObserver() {
    const observer = new BmutationObserver();
    observer.observe(this, { attributeFilter : ["text-bold"] });
  }
  checkTextBold() {
    this.hasAttribute("text-bold")
      ? this.classList.add("bold")
      : this.classList.remove("bold");
  }
}
export default BaseViewComponent;
