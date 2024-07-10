import { Routes } from '@angular/router';
// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'my-remote-app',
    loadComponent: () =>
      loadRemoteModule('remote', './Component').then((m) => m.AppComponent),
  },
];
