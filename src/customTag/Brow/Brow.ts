import "./Brow.scss";

class Row extends HTMLElement {
  name: string = "Row";
  constructor() {
    super();
    this.init();
  }
  init() {
    console.log(`Custom Tag ${this.name} init.`);
  }
}
export default Row;
