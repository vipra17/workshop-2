import { LitElement, html, css, customElement } from 'lit-element';

@customElement('contact-list-view')
export class ContactListView extends LitElement {
  render() {
    return html`
      <h1>Contact List</h1>
      <div>
        Here be contacts...
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--lumo-space-m);
    }
  `;
}
