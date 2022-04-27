import "./Bcol.scss";
import BColMutationObserver from "../MutationObserver/BColMutationObserver";
class Col extends HTMLElement {
  name: string = "Col";
  constructor() {
    super();
    this.init();
  }
  init() {
    this.selfAttrubutesCheck();
    this.initObserver();
    console.log(`Custom Tag ${this.name} init.`);
  }
  initObserver() {
    const observer = new BColMutationObserver();
    observer.observe(this, { attributeFilter: ["col"] });
  }
  selfAttrubutesCheck() {
    this.checkColumn();
  }
  checkColumn() {
    let columnCount: number = parseInt(this.getAttribute("col")!) ?? 0;
    switch (columnCount) {
      case 1:
        this.classList.add("col-1");
        break;
      case 2:
        this.classList.add("col-2");
        break;
      case 3:
        this.classList.add("col-3");
        break;
      case 4:
        this.classList.add("col-4");
        break;
      case 5:
        this.classList.add("col-5");
        break;
      case 6:
        this.classList.add("col-6");
        break;
      case 7:
        this.classList.add("col-7");
        break;
      case 8:
        this.classList.add("col-8");
        break;
      case 9:
        this.classList.add("col-9");
        break;
      case 10:
        this.classList.add("col-10");
        break;
      case 11:
        this.classList.add("col-11");
        break;
      case 12:
        this.classList.add("col-12");
        break;
      default:
        break;
    }
  }
}
export default Col;
