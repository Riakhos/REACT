# Pratique : Boutique de jeux vidéo

## Création d'une boutique de jeux vidéo en ligne

### Objectif

Coder une page de boutique de jeux vidéo avec les composants suivants :

- App
- NavigationBar
- ProductDetail

**Faire le schéma dans Excalidraw.**

### Données produits

Sur la base de données de jeux vidéo (exemple : https://fakestoreapi.com/products ou un JSON adapté aux jeux vidéo), copiez/collez les données dans un fichier et affichez tous les jeux stockés dans un tableau d'objets (produit) avec typage TypeScript.

Chaque jeu affichera les données suivantes :

- image
- titre
- prix
- description
- bouton 'like'
- bouton 'ajouter au panier'

On oublie pas TypeScript ;)

### Menu de navigation dynamique

Sur la base du JSON ci-dessous, créez dynamiquement le menu de la barre de navigation.

```typescript
const links = [
    {
        name: 'Home',
        path: '/home'
    },
    {
        name: 'Games',
        path: '/games'
    },
    {
        name: 'Cart',
        path: '/cart'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]
```

### Ressources utiles

- <https://daisyui.com/>
- <https://tailwindcss.com/docs/installation/using-vite>
