# Application CRUD avec React JS

Ce projet est une application web permettant de gérer les clients d'une entreprise. Il utilise React.js pour l'interface utilisateur et JSON Server pour simuler une API REST. Cette application implémente les fonctionnalités CRUD (Create, Read, Update, Delete) pour la gestion des clients.

## Objectifs

- Créer une application SPA (Single Page Application) avec React.
- Implémenter les opérations CRUD sur une table de clients (id, nom, adresse, téléphone).
- Utiliser **React Router** pour la navigation entre les pages.
- Utiliser **Axios** pour interagir avec une API simulée (JSON Server).
- Améliorer l'interface avec **Bootstrap** pour une meilleure ergonomie.

## Fonctionnalités

- **Afficher la liste des clients**.
- **Ajouter un nouveau client**.
- **Afficher les détails d'un client**.
- **Modifier les informations d'un client**.
- **Supprimer un client**.

## Technologies Utilisées

- **React.js** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **React Router** : Pour la gestion de la navigation entre les pages.
- **Axios** : Pour les appels API HTTP.
- **JSON Server** : Pour simuler une API REST.
- **Bootstrap** : Pour améliorer l'interface utilisateur avec un design moderne et réactif.

## Installation

### 1. Cloner le dépôt
Clonez ce projet sur votre machine locale avec la commande suivante :
```bash
git clone https://github.com/DiarraIbra/basic_crud_reactjs.git

### 2. Installer les dependances
```bash
cd basic_crud_reactjs
npm install

### 3. Installer Json Server
```bash
npm install -g json-server

### 4. Demarrer Json Server
```bash
json-server --watch db.json --port 3001
### 5. Lancer l'appication
```bash
npm run dev
