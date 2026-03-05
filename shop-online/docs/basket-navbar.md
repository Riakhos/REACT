# Panier global avec affichage et gestion dans la Navbar

## Objectif
Mettre en place un panier global pour ajouter des articles, afficher le contenu du panier dans un dropdown de la Navbar, permettre de retirer des articles, et synchroniser le bouton panier dans chaque Article.

---

## Étapes détaillées

### 1. Déclarer le panier global dans App
- Dans `App.tsx`, importe la liste des articles.
- Crée un state `baskets` qui contient un tableau d'articles ajoutés au panier :

```tsx
const [baskets, setBaskets] = useState<ArticleData[]>([]);
```

**Pourquoi ne pas déclarer le panier dans Article ?**

Si tu déclares le panier dans chaque Article, chaque composant aura son propre panier isolé, impossible à afficher ou synchroniser globalement. En React, on place l’état le plus haut possible pour le partager via les props. Le panier global est donc dans App, puis transmis à Home, NavigationBar, Basket, Article.

### 2. Passer les props nécessaires
- Passe `baskets` et `setBaskets` au composant `Home`.
- Passe `baskets`  et `setBaskets` au composant `NavigationBar` pour afficher le dropdown.
- Passe `baskets` et `setBaskets` au composant `Basket`.

```tsx
<NavigationBar counterLike={likes.reduce((a, b) => a + b, 0)} baskets={baskets} setBaskets={setBaskets} />
<Route path="/" element={<Home likes={likes} setLikes={setLikes} baskets={baskets} setBaskets={setBaskets} />} />
<Route path="/basket" element={<Basket baskets={baskets} setBaskets={setBaskets} />} />
```

### 3. Adapter le composant Home
- Ajoute l'interface des props :
- React.Dispatch : un type générique pour une fonction qui « envoie » une action ou une nouvelle valeur.
- React.SetStateAction<number[]> : cela peut être soit une nouvelle valeur (un tableau de nombres), soit une fonction qui reçoit l’ancienne valeur et retourne la nouvelle.

```tsx
interface HomeProps {
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;};
```
- Passe à chaque `Article` :
  - le panier global (`baskets`)
  - une fonction pour ajouter au panier (`onBasket={() => ...}`)

```tsx
<Article
  key={index}
  articleData={article}
  baskets={baskets}
  onBasket={() => {
    setBaskets([...baskets, article]);
  }}
/>
```

### 4. Adapter le composant Article
- Ajoute l'interface des props :

```tsx
interface ArticleProps {
  articleData: ArticleData;
  baskets: ArticleData[];
  onBasket: () => void;
};
```
- On veut savoir si l’article affiché par ce composant **articleData** est déjà présent dans le panier global **baskets**.
- **baskets** est un tableau d’articles ajoutés au panier.
- **.some(...)** est une méthode JavaScript qui retourne `true` si au moins un élément du tableau vérifie la condition donnée.
- Ici, la condition est : l’id d’un article du panier **article.id** est égal à l’id de l’article courant **articleData.id**.

```tsx
const inBasket = baskets.some((a: ArticleData) => a.id === articleData.id);
```
- Utilise ce booléen pour désactiver/réactiver le bouton :

```tsx
<button
  onClick={onBasket}
  disabled={inBasket}
>
  {inBasket ? "Added" : <BsBasket size={28}/>} 
</button>
```

### 5. Adapter NavigationBar et Basket
- Ajoute l'interface des props.
- React.Dispatch : un type générique pour une fonction qui « envoie » une action ou une nouvelle valeur.
- React.SetStateAction<number[]> : cela peut être soit une nouvelle valeur (un tableau de nombres), soit une fonction qui reçoit l’ancienne valeur et retourne la nouvelle.

```tsx
interface NavigationBarProps {
  baskets: ArticleData[];
  setBaskets: React.Dispatch<React.SetStateAction<ArticleData[]>>;
};
```
- Affiche le panier dans un dropdown :

```tsx
<Basket baskets={baskets} setBaskets={setBaskets} />
```
- Dans Basket, affiche la liste des articles et ajoute une icône corbeille pour retirer un article :

```tsx
baskets.map((articleData) => (
  <li className="border border-blue-800 bg-blue-200 rounded-md mb-2" key={articleData.id}>
    <a className="relative block">
      <GiTrashCan onClick={() => handleDelete(articleData.id)} size={36} className="text-red-800 bg-blue-100 absolute top-2 right-2 border border-red-800 rounded-md p-1" />
      <img
          className="h-24 w-24 object-contain"
          src={articleData.image} alt={`Image du ${articleData.title}`} />
      <span className="block mt-2">{articleData.title}</span>
      <span className="block text-right pr-2">{articleData.price}€</span>
    </a>
  </li>
))
```

### 6. Synchronisation bouton panier
- Le bouton "Ajouter au panier" dans Article se réactive automatiquement si l’article est retiré du panier (grâce à la prop baskets).
- Pas besoin de useEffect ni de useState local : tout est calculé à partir du panier global.
```tsx
const inBasket = baskets.some((article: ArticleData) => article.id === articleData.id);

return (
  <button
    onClick={onBasket}
    disabled={inBasket}
  >
    {inBasket ? "Added" : <BsBasket size={28}/>} 
  </button>
);
```

**Explication :**
- `inBasket` est recalculé à chaque rendu selon le panier global.
- Si l’article est retiré du panier, `inBasket` passe à `false` et le bouton redevient actif automatiquement.

---

## Résultat
- Les articles peuvent être ajoutés au panier.
- Le panier s’affiche dynamiquement dans la Navbar (dropdown).
- On peut retirer un article du panier, ce qui réactive le bouton dans Article.
- Le tout est typé en TypeScript pour plus de robustesse.

---
