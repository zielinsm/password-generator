import generatePassword from "../modules/generate";

class Container extends HTMLElement {
  constructor() {
    super();
    this.options = {
      chars: null,
      letters: null,
      numbers: null,
      symbols: null
    };
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  connectedCallback() {
    this.watchForChanges();
    window.addEventListener("buttonClick", () => {
      this.processPassword();
    });
  }

  watchForChanges() {
    const elements = { attributes: true, childList: true, subtree: true };
    const observerCalback = mutationList => {
      for (let mutation in mutationList) {
        let mutationTarget = mutationList[mutation].target;
        switch (mutationTarget.localName) {
          case "g-option": {
            let keyValue = mutationTarget.attributes.key.nodeValue;
            if ("checked" in mutationTarget.attributes) {
              this.options[keyValue] = true;
            } else {
              this.options[keyValue] = false;
            }
            this.processPassword();
            break;
          }
          case "g-length": {
            let lengthValue = mutationTarget.attributes.selected.nodeValue;
            this.options.chars = parseInt(lengthValue);
            this.processPassword();
            break;
          }
        }
      }
    };
    const observer = new MutationObserver(observerCalback);
    observer.observe(this, elements);
  }

  processPassword() {
    let generated = generatePassword(this.options);
    this.querySelector("g-form").setAttribute("password", generated);
  }

  disconnectedCallback() {}
}

export default Container;
