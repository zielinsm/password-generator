class Button extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  connectedCallback() {
    this.render();
    this.addEventListener("click", () => {
      this.buttonOnClick();
    });
  }

  buttonOnClick() {
    const buttonClick = new Event("buttonClick");
    window.dispatchEvent(buttonClick);
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = `
      <div>
        <button type="button" class="btn btn-primary btn-lg btn-block">Generate password</button>
      </div>`;
  }
}

export default Button;