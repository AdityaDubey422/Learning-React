const customRender = (reactElement, mainContainer) => {
    const element = document.createElement(reactElement.type)
    Object.keys(reactElement.props).forEach((attributes)=> {
element.se
    })
    
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
console.log(Object.keys(reactElement.props))
const mainContainer = document.querySelector("#root");

// customRender(reactElement, mainContainer)