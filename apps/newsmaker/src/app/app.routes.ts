import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@org/news-widget').then(m => m.NewsWidgetComponent)
  }
];
