import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';

// @ts-ignore
import { Router } from '@vaadin/router/index.js';

const routes = [
  {
    path: '/',
    component: 'main-layout',
    action: async () => {
      await import('./components/main-layout');
    },
    children: [
      {
        path: '/',
        title: 'Home',
        component: 'home-view',
        action: async () => {
          await import('./components/home-view');
        }
      },
      {
        path: '/products',
        title: 'Products',
        component: 'product-list-view',
        action: async () => {
          await import('./components/product-list-view');
        }
      },
      {
        path: '/contacts',
        title: 'Contacts',
        component: 'contact-list-view',
        action: async () => {
          await import('./components/contact-list-view');
        }
      }
    ]
  }
];

export const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);
