import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../keycloak/keycloak-service/keycloak-service.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  providers: [KeycloakService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  agentProfile: KeycloakProfile | undefined;
  constructor(private keyCloakService: KeycloakService) {}
  ngOnInit(): void {
    this.getUserProfile();
  }
  async getUserProfile() {
    this.agentProfile = await this.keyCloakService.getUserProfile();
  }
}
