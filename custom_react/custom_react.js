const customRender = (reactElement, mainContainer) => {
  const element = document.createElement(reactElement.type);
  Object.keys(reactElement.props).forEach((attribute) => {
    element.setAttribute(attribute, reactElement.props.attribute);
  });
  element.innerHTML = reactElement.children;
  mainContainer.appendChild(element);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
