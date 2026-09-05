# VTC Customer Research

Questionnaire mobile-first Astro pour la phase de customer discovery.

## Lancer localement
npm install
npm run dev

## Déployer gratuitement
1. Créer un repo GitHub `vtc-customer-research`.
2. Remplacer `YOUR_GITHUB_USERNAME` dans `astro.config.mjs`.
3. Push sur `main`.
4. GitHub → Settings → Pages → Source: GitHub Actions.
5. L'URL sera `https://TON_USERNAME.github.io/vtc-customer-research/`.

## Important
Cette première version ne transmet pas encore les réponses à distance. Elle valide l'UX et affiche la fin du questionnaire. L'étape suivante consiste à brancher une collecte gratuite (Google Forms/Sheets ou Supabase) sans secret côté navigateur.


Version 1 on Sep 5, 2026, 12:14 PM
Deployment ID
AKfycbwOE_C4-2ds00C_VF-yqnmN92tY221TwvSJXvdWM_HUh6iUAJ9Sv5CzgVJXd626m5D7
Web app
URL
https://script.google.com/macros/s/AKfycbwOE_C4-2ds00C_VF-yqnmN92tY221TwvSJXvdWM_HUh6iUAJ9Sv5CzgVJXd626m5D7/exec


curl -L \
-X POST \
-H "Content-Type: application/json" \
-d '{
"experience": "4 ans",
"businessType": "Indépendant",
"hoursPerWeek": "40",
"customerTypes": ["Particuliers", "Entreprises"],
"platformShare": "20%",
"directShare": "80%",
"acquisitionChannels": ["Site web", "Bouche-à-oreille"],
"mainAcquisitionChannel": "Site web",
"currentTools": ["Google Calendar", "WhatsApp"],
"agendaManagement": "Google Calendar",
"bookingManagement": "WhatsApp",
"recurringBookings": "Oui",
"airportBookings": "Oui",
"confirmationProcess": "WhatsApp",
"reminders": "WhatsApp",
"crmUsage": "Oui",
"customerHistory": "Oui",
"inactiveCustomers": "Oui",
"reactivation": "Oui",
"biggestPain": "Gérer les réservations et fidéliser les clients",
"missingCapability": "Un outil centralisé pour mes clients et réservations",
"switchIntent": "Oui",
"willingnessToPay": "49€/mois"
}' \
"https://script.google.com/macros/s/AKfycbwOE_C4-2ds00C_VF-yqnmN92tY221TwvSJXvdWM_HUh6iUAJ9Sv5CzgVJXd626m5D7/exec"