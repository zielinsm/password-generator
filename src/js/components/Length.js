class Length extends HTMLElement {
  constructor() {
    super();
    this._min = null;
    this._max = null;
    this._selected = null;
  }

  static get observedAttributes() {
    return ["min", "max", "selected"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "min": {
          this._min = parseInt(newValue);
          break;
        }
        case "max": {
          this._max = parseInt(newValue);
          break;
        }
        case "selected": {
          this._selected = parseInt(newValue);
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.render();
    const selectElement = this.querySelector("div").querySelector("select");
    selectElement.addEventListener("change", e => {
      let selectedValue = selectElement.options[selectElement.selectedIndex].value;
      this.setAttribute("selected", selectedValue)
    });
  }

  insertSelectables() {
    let options = "";
    for (let i = this._min; i <= this._max; i++) {
      if (i === this._selected) {
        options += `<option value="${i}" selected>${i}</option>`;
      } else {
        options += `<option value="${i}">${i}</option>`;
      }
    }
    return options;
  }

  render() {
    this.innerHTML = `
      <div class="form-group">
        <label for="formControlSelect">Choose length:</label>
        <select class="form-control" id="formControlSelect">
          ${this.insertSelectables(this._min, this._max)}
        </select>
      </div>
      </div>
      `;
  }
}

export default Length;
