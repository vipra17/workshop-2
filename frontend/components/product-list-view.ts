import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-grid/vaadin-grid.js';

@customElement('product-list-view')
export class ProductListView extends LitElement {

  connectedCallback() {
      super.connectedCallback();
      const grid = this.renderRoot.querySelector('vaadin-grid');
      grid.dataProvider = function(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          callback(JSON.parse(xhr.responseText).result);
        };
        xhr.open('GET', 'http://localhost:8080/connect/ProductEndpoint/list' , true);
        xhr.send();
      };
  }
  
  render() {
    return html`     
      <vaadin-grid aria-label="Sample">
      <vaadin-grid-column path="id"></vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--lumo-space-m);
    }
  `;
}
