
/* Custom React Renderer ->> this function convert react elemnets */

function customRender(reactElement, container){
    /*const domElement  = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement);*/


    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(let prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}

// All the html elements are represented as objects in react, so we can create our own custom react element like this
const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: "Click me to visit Google"
}
// Now we have our custom react element, we can use our custom render function to render it to the DOM
const mainContainer = document.querySelector("#root");
// Now we can use our custom render function to render the react element to the DOM
customRender(reactElement, mainContainer);
