import "./Bbutton.scss";

class Button extends HTMLElement {
  name: string = "Button";
  constructor() {
    super();
    this.init();
    // this.onclick = (e) => {
    // };
  }
  init() {
    this.tabIndex = 1;
    console.log(`Custom Tag ${this.name} init, Name is ${this.innerText}.`);
  }
}
export default Button;
