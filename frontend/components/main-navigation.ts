import { LitElement, html, css, customElement, property } from 'lit-element';
import '@vaadin/vaadin-tabs/vaadin-tabs.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';

import { router } from '../index';

@customElement('main-navigation')
export class MainNavigation extends LitElement {
  @property()
  views: any[];

  @property()
  activeViewIndex: number = -1;

  render() {
    return html`
      <vaadin-tabs .selected=${this.activeViewIndex} theme="minimal">
        ${this.views.map(
          view => html`
            <vaadin-tab>
              <a href="${view.path}">${view.title}</a>
            </vaadin-tab>
          `
        )}
      </vaadin-tabs>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    a {
      text-decoration: unset;
      color: unset;
      cursor: unset;
    }
  `;

  constructor() {
    super();
    this.views = router
      .getRoutes()[0]
      .children.filter((route: any) => !!route.title);
    this.calculateActiveViewIndex();
    window.addEventListener('vaadin-router-location-changed', () =>
      this.calculateActiveViewIndex()
    );
  }

  calculateActiveViewIndex() {
    this.activeViewIndex = this.views.indexOf(router.location.route);
  }
}
