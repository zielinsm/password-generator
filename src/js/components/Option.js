class Option extends HTMLElement {
  constructor() {
    super();
    this.state = {
      _key: null,
      _label: null,
      _checked: null
    };
  }

  static get observedAttributes() {
    return ["key", "label", "checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "key":
        {
          this._key = newValue;
          this.render();
          break;
        }
      case "label":
        {
          this._label = newValue;
          this.render();
          break;
        }
      case "checked":
        {
          this._checked = this.hasAttribute("checked");
          this.render();
          break;
        }
    }
  }

  connectedCallback() {
    this.addEventListener("click", e => {
      this.handleClick(e);
    });
  }

  handleClick(e) {
    if (e.target.tagName === "INPUT") {
      if (this._checked) {
        this.removeAttribute("checked");
      }
      else {
        this.setAttribute("checked", "");
      }
    }
  }

  render() {
    let id = `${this._key}_checkbox`;
    const assignChecked = () => {
      if (this._checked) {
        return "checked";
      }
      else {
        return "";
      }
    }
    let checked = assignChecked();
    this.innerHTML = `
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="checkbox" id="${id}" ${checked}>
        <label class="form-check-label" for="${id}">${this._label}</label>
      </div>`;
  }
}

export default Option;
