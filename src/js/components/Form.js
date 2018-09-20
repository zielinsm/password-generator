class Form extends HTMLElement {
  constructor() {
    super();
    this._password = null;
  }

  static get observedAttributes() {
    return ["password"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      if (name === "password" && oldValue !== newValue) {
        this._password = newValue;
        this.renderForm();
      }
    }
  }

  connectedCallback() {
    this.render();
    const buttonElement = this.querySelector("div").querySelector("button");
    buttonElement.addEventListener("click", e => {
      this.copyStringToClipboard(this._password);
    });
  }

  copyStringToClipboard(str) {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  renderForm() {
    const textArea = this.querySelector("div").querySelector("input");
    textArea.setAttribute("value", this._password);
  }

  render() {
    this.innerHTML = `
    <label for="formGroupExampleInput">Your generated password:</label>
    <div class="input-group mb-3">
      <input type="text" class="form-control js-form" disabled>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary btn-outline-custom" type="button">Copy</button>
      </div>
    </div>
  `;
  }
}

export default Form;
