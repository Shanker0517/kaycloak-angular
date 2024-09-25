# keycloak-angular
angular integration with keycloak.

This guide provides step-by-step instructions on how to integrate Keycloak with an Angular application for authentication and authorization.

## Prerequisites
- Keycloak installed and running (e.g., using Docker or locally).
- An existing Angular application.
- Node.js and npm installed.
 
## Keycloak Setup
### 1. Create a Realm in Keycloak
1. Log in to the Keycloak Admin Console (usually available at http://localhost:8080).
2. In the left menu, navigate to Realms and click Add Realm.
3. Provide a name for your realm (e.g., angular-KeyCloak) and click Create.

### 2. Create a Client
1. Navigate to the Clients section within your realm.

2. Click Create and fill out the following form fields:
   - Client ID: frontend
   - Client Protocol: openid-connect
   - Root URL: http://localhost:4200
   - Access Type: public
3. Save the client.
4. Configure the client:

   - Valid Redirect URIs: Add http://localhost:4200/*.
   - Web Origins: Add http://localhost:4200 or * (for development, you can use *).

### 3. Create Roles and Users
Navigate to Roles and create any necessary roles (e.g., user, admin).
Navigate to Users and create users, assigning roles to them as needed.

## Angular Setup

