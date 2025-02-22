import { render, LitElement, html, nothing } from 'lit';

class MySwitch extends LitElement {
    static properties = {
        hello: { type: Boolean, reflect: true }
    };

    createRenderRoot() {
        return this; // IMPORTANT: light dom!!!
    }

    // even it happens without `render()`.
    // render() {
    // }
}

customElements.define('my-switch', MySwitch);


// render with my custom element
// user wanna set their contents in my custom element
const renderer = loading => html`
    <div>
        <my-switch>${loading ? 'Loading...' : nothing}</my-switch>
    </div>
`;



// first render. 
render(renderer(true), document.body);


// second render
setTimeout(() => {
    render(renderer(false), document.body);
}, 2000);


// HERE!! rendering `nothing` clears the render parent of <my-switch>


// after then, user triggers `requestUpdate()`
setTimeout(() => {
    document.body.querySelector('my-switch').hello = true;
}, 3000);

// ERROOOOOOOR!!!