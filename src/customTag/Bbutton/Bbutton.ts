import "./Bbutton.scss";

class Button extends HTMLElement {
  name: string = "Button";
  constructor() {
    super();
    this.init();
    console.log(this.getAttributeNames())
  }
  init() {
    console.log(`Custom Tag ${this.name} init, Name is ${this.innerText}.`);
  }
}
export default Button;
