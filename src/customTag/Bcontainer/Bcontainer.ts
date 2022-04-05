import "./Bcontainer.scss";

class Container extends HTMLElement {
  name: string = "Container";
  constructor() {
    super();
    this.init();
  }
  init() {
    console.log(`Custom Tag ${this.name} init, Name is ${this.name}.`);
  }
}
export default Container;
