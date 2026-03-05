# Compteur de Panier global avec affichage dans la Navbar

## Objectif
Mettre en place un compteur de panier pour chaque article, et afficher la somme totale des articles dans le panier dans la barre de navigation (Navbar).

---

## Étapes détaillées

### 1. Déclarer le compteur global dans App
- Dans `App.tsx`, importe la liste des articles.
- Crée un state `countBaskets` qui contient un tableau de compteurs (**Array(articles.length).fill(0)** crée un tableau de la taille du nombre d’articles, rempli de zéros. Exemple : si tu as 3 articles, ça donne [0, 0, 0].) :

```tsx
const [countBaskets, setCountBaskets] = useState<number[]>(Array(articles.length).fill(0));
```

**Pourquoi ne pas déclarer le compteur dans Article ?**

Si tu déclares le compteur dans chaque Article, chaque composant aura son propre compteur isolé, impossible à additionner ou à synchroniser avec les autres. En React, on place l’état le plus haut possible dans la hiérarchie pour que tous les composants qui en ont besoin puissent y accéder via les props. C’est le principe du "lifting state up" : l’état global (ici, le tableau de compteurs du panier) est dans App, puis transmis à Home et Article. Ainsi, tous les articles peuvent modifier le compteur global, la navbar peut afficher la somme totale, et l’état reste cohérent et centralisé.

### 2. Passer les props nécessaires
- Passe `countBaskets` et `setCountBaskets` au composant `Home`.
- Passe la somme des articles du panier (`countBaskets.reduce((a, b) => a + b, 0)`) à `NavigationBar` via la prop `counterCountBasket`.

```tsx
<NavigationBar counterCountBasket={countBaskets.reduce((a, b) => a + b, 0)} ... />
<Home countBaskets={countBaskets} setCountBaskets={setCountBaskets} ... />
```

### 3. Adapter le composant Home
- Ajoute l'interface des props :

```tsx
interface HomeProps {
  countBaskets: number[];
  setCountBaskets: React.Dispatch<React.SetStateAction<number[]>>;
  // ...
};
```
- Passe à chaque `Article` :
  - le compteur du panier correspondant (`basketCount={countBaskets[index]}`)
  - une fonction pour incrémenter ce compteur (`onCountBasket={() => ...}`)

```tsx
<Article
  key={index}
  articleData={article}
  basketCount={countBaskets[index]}
  onCountBasket={() => {
    const newCountBaskets = [...countBaskets];
    newCountBaskets[index]++;
    setCountBaskets(newCountBaskets);
  }}
  // ...
/>
```

### 4. Adapter le composant Article
- Ajoute l'interface des props :

```tsx
interface ArticleProps {
  articleData: ArticleData;
  basketCount: number;
  onCountBasket: () => void;
  // ...
};
```
- Utilise ces props pour afficher et incrémenter le compteur :

```tsx
<button onClick={onCountBasket}>
  <BsBasket size={28} />{basketCount}
</button>
```

### 5. Adapter NavigationBar
- Ajoute l'interface de la prop :

```tsx
interface NavigationBarProps {
  counterCountBasket: number;
  // ...
};
```
- Affiche le compteur à côté du lien Panier (Basket) :

```tsx
{link.name === 'Basket' ? <span>{link.name} {counterCountBasket}</span> : link.name}
```

---

## Résultat
- Chaque article a son propre compteur de panier.
- Le total des articles du panier s’affiche dynamiquement dans la Navbar.
- Le tout est typé en TypeScript pour plus de robustesse.

---

## Limite et suggestion d’amélioration

**Résumé :**
- Le comportement actuel est cohérent pour un panier global : chaque article garde son compteur même si on change de catégorie (filtre).
- Si tu veux un compteur par catégorie, il faut changer la logique et stocker un compteur par catégorie, ou réinitialiser à chaque filtre.

**Suggestion :**
- Il est conseillé de garder le comportement global (plus logique pour un vrai panier e-commerce).
- Pour une amélioration, tu peux ajouter un compteur par catégorie si tu veux un affichage contextuel lors du filtrage.
