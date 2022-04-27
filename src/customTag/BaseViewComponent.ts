import BViewMutationObserver from "./MutationObserver/BViewMutationObserver";
import InitBaseViewComponentAttributes from "./InitCheckAttributes/InitBaseViewComponentAttributes";
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
    InitBaseViewComponentAttributes(this);
  }
  initObserver() {
    const observer = new BViewMutationObserver();
    observer.observe(this, {
      attributeOldValue: true,
      attributeFilter: ["text-bold", "animation"],
    });
  }
}
export default BaseViewComponent;
