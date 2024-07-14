## Clean Architecture

Ce projet suit une architecture propre (Clean Architecture) pour séparer les préoccupations et rendre le code plus modulaire et maintenable. Voici un aperçu des dossiers et de leur rôle :

### Dossiers Principaux

- **api/** : Contient les appels API pour communiquer avec le backend.
  - `prayerTimeApi.js` : Appels API pour les horaires de prière.
  - `qiblaDirectionApi.js` : Appels API pour la direction de la Qibla.
  - `userApi.js` : Appels API pour l'authentification utilisateur.

- **components/** : Contient les composants Vue réutilisables.
  - **Auth/** : Composants pour l'authentification.
    - `Login.vue` : Composant pour la connexion.
  - **PrayerTime/** : Composants pour les horaires de prière.
    - `PrayerTimes.vue` : Composant pour afficher les horaires de prière.
  - **QiblaDirection/** : Composants pour la direction de la Qibla.
    - `QiblaDirection.vue` : Composant pour afficher la direction de la Qibla.

- **services/** : Contient la logique métier et les appels aux API.
  - `prayerTimeService.js` : Logique métier pour les horaires de prière.
  - `qiblaDirectionService.js` : Logique métier pour la direction de la Qibla.
  - `userService.js` : Logique métier pour l'authentification utilisateur.

- **views/** : Contient les vues de l'application.
  - `LoginView.vue` : Vue pour la page de connexion.
  - `PrayerTimesView.vue` : Vue pour afficher les horaires de prière.
  - `QiblaDirectionView.vue` : Vue pour afficher la direction de la Qibla.

## Configuration

### Fichier de Configuration

Le fichier `conf.js` contient la configuration de l'API :

```javascript
// src/conf.js
const config = {
    apiBaseUrl: 'http://localhost:8000/api',
};

export default config;

``
PrayerCompassFront/
├── public/
├── src/
│   ├── api/
│   │   ├── prayerTimeApi.js
│   │   ├── qiblaDirectionApi.js
│   │   └── userApi.js
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.vue
│   │   ├── PrayerTime/
│   │   │   ├── PrayerTimes.vue
│   │   ├── QiblaDirection/
│   │   │   ├── QiblaDirection.vue
│   ├── services/
│   │   ├── prayerTimeService.js
│   │   ├── qiblaDirectionService.js
│   │   └── userService.js
│   ├── views/
│   │   ├── LoginView.vue
│   │   ├── PrayerTimesView.vue
│   │   ├── QiblaDirectionView.vue
│   ├── App.vue
│   ├── main.js
│   └── conf.js
├── package.json
├── README.md
``