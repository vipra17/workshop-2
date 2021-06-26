import { LitElement, html, css, customElement } from 'lit-element';

@customElement('home-view')
export class HomeView extends LitElement {
  render() {
    return html`
      <h1>Welcome to Bread N' Stuff</h1>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--lumo-space-m);
    }
  `;
}
