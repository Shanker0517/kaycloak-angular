import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { KeycloakService, KeycloakBearerInterceptor } from 'keycloak-angular';
import { initializeKeycloak } from './keycloak/keycloak.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    KeycloakService,
    {
      provide: APP_INITIALIZER, // Initialize Keycloak before app starts
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS, // Add Keycloak bearer interceptor to handle auth tokens
      useClass: KeycloakBearerInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()), // Provide HttpClient with interceptors from DI
  ],
};
