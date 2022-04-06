import "./Bbutton.scss";

class Button extends HTMLElement {
  name: string = "Button";
  constructor() {
    super();
    this.init();
    this.onclick = (e) => {
      this.focus(); // keyword 'this' is the instance in this scope
    };
  }
  focus() {
    this.tabIndex = 1;
  }
  init() {
    console.log(`Custom Tag ${this.name} init, Name is ${this.innerText}.`);
  }
}
export default Button;
