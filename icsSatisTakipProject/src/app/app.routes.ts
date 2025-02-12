import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'customers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/customer-list/customer-list.component').then(
                (m) => m.CustomerListComponent
              ),
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./components/customer-form/customer-form.component').then(
                (m) => m.CustomerFormComponent
              ),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import('./components/customer-form/customer-form.component').then(
                (m) => m.CustomerFormComponent
              ),
          },
          {
            path: ':id',
            loadComponent: () =>
              import(
                './components/customer-detail/customer-detail.component'
              ).then((m) => m.CustomerDetailComponent),
          },
        ],
      },
      {
        path: 'opportunities',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './components/opportunities/opportunity-list/opportunity-list.component'
              ).then((m) => m.OpportunityListComponent),
          },
          {
            path: 'new',
            loadComponent: () =>
              import(
                './components/opportunities/opportunity-form/opportunity-form.component'
              ).then((m) => m.OpportunityFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import(
                './components/opportunities/opportunity-form/opportunity-form.component'
              ).then((m) => m.OpportunityFormComponent),
          },
          {
            path: ':id',
            loadComponent: () =>
              import(
                './components/opportunities/opportunity-detail/opportunity-detail.component'
              ).then((m) => m.OpportunityDetailComponent),
          },
        ],
      },
      {
        path: 'proposals',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './components/proposals/proposal-list/proposal-list.component'
              ).then((m) => m.ProposalListComponent),
          },
          {
            path: 'new',
            loadComponent: () =>
              import(
                './components/proposals/proposal-form/proposal-form.component'
              ).then((m) => m.ProposalFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import(
                './components/proposals/proposal-form/proposal-form.component'
              ).then((m) => m.ProposalFormComponent),
          },
          {
            path: ':id',
            loadComponent: () =>
              import(
                './components/proposals/proposal-detail/proposal-detail.component'
              ).then((m) => m.ProposalDetailComponent),
          },
        ],
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./components/orders/orders.component').then(
            (m) => m.OrdersComponent
          ),
      },
      {
        path: 'payments',
        loadComponent: () =>
          import('./components/payments/payments.component').then(
            (m) => m.PaymentsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
