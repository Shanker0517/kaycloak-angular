import { Routes } from '@angular/router';
import { keycloakGuard } from './keycloak/guard/keycloak.guard';
import { ProfileComponent } from './profile/profile.component';
// canActivate: [keycloakGuard]
export const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [keycloakGuard] },
  { path: '**', redirectTo: '' },
];
