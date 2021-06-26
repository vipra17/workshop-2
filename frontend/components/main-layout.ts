import { LitElement, html, customElement } from 'lit-element';
import '@vaadin/vaadin-app-layout/vaadin-app-layout.js';

import './main-navigation';

@customElement('main-layout')
export class MainLayout extends LitElement {
  render() {
    return html`
      <vaadin-app-layout>
        <h1 style="font-variant: all-small-caps;" slot="branding">
          Bread N' Stuff
        </h1>
        <main-navigation slot="menu"></main-navigation>
        <slot></slot>
      </vaadin-app-layout>
    `;
  }
}
