import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todos',
    loadComponent: () =>
      import('./todos/todos.component').then((m) => m.TodosComponent),
  },
  {
    path: '**',
    redirectTo: 'todos',
  },
];
