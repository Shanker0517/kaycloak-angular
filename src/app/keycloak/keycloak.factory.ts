import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080', // Keycloak server URL
        realm: 'sample-KeyClock', // Your realm name
        clientId: 'frontend', // Your client ID
      },
      initOptions: {
        onLoad: 'check-sso', // Optional: can be set to 'login-required' if login is required on app load
        checkLoginIframe: false,
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets'],
    });
}
