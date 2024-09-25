import { Injectable, signal } from '@angular/core';
import { KeycloakService as KCService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private isLoggedInSignal = signal(false);

  constructor(private readonly keycloak: KCService) {}

  async login(): Promise<void> {
    await this.keycloak.login();
    this.isLoggedInSignal.set(await this.keycloak.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSignal();
  }

  logout(): void {
    this.keycloak.logout();
    this.isLoggedInSignal.set(false);
  }

  getUserProfile(): Promise<KeycloakProfile> {
    return new Promise<KeycloakProfile>(async (resolve, reject) => {
      await this.keycloak
        .loadUserProfile()
        .then((data) => {
          resolve(<KeycloakProfile>data);
        })
        .catch(() => {
          reject('Failed to load profile');
        });
    });
  }
}
