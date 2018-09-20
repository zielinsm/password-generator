// Components
import Container from "./components/Container";
import Form from "./components/Form";
import Option from "./components/Option";
import Length from "./components/Length";
import Button from "./components/Button";

// Styles
import "../styles/style.scss";

const components = [
  {
    tagName: "g-container",
    component: Container
  },
  {
    tagName: "g-form",
    component: Form
  },
  {
    tagName: "g-option",
    component: Option
  },
  {
    tagName: "g-length",
    component: Length
  },
  {
    tagName: "g-button",
    component: Button
  }
];

const register = function registerComponents(components) {
  components.forEach(component => {
    window.customElements.define(component.tagName, component.component);
  });
};

register(components);
