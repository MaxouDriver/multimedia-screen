# Multimedia-screen Server

Pour interagir avec l'écran (l'application angular), il faut passer par le server, lui envoyer des requêtes post pour les actions possibles.

## Installation et Lancement

Pour l'installer :

```bash
yarn install
```

Pour lancer le server :

```bash
node server
```

## Usage

L'écran est un mur de "tuiles", il est donc possible d'interagir avec ce mur de tuile, pour l'instant à l'aide de six fonctions :

/fullscreen

| Endpoint  | Type | Parametre | Action |
| ------------- | ------------- | ------------- | ------------- |
| /fullscreen  | Post  | type: Nom de la tuile concernée. | Met une tuile en plein écran. |
| /closefullscreen  | Post  | / | Permet de fermer le mode plein écran. |
| /edition  | Post  | / | Permet de passer en mode édition (les composant sont remplacés par des numéros et leur taille). |
| /closeedition  | Post  | / | Fermeture du mode édition. |
| /swap  | Post  | num1: Numéro du premier composant. num2: Numéro du deuxieme composant.| Echange du contenu de la tuile numéro 1 par le contenu de la tuile numéro 2. |
| /resize  | Post  | num: Numéro de la tuile concernée. cols: Nouveau nombre de colonne(largeur). rows: Nouveau nombre de ligne(hauteur). | Re-dimension de la tuile concernée avec la nouvelle taille donnée (WIP). |
