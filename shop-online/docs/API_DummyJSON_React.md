# Intégration d'une API produits (DummyJSON) dans une boutique React

## 1. Choix de l'API
Nous avons choisi l'API DummyJSON (https://dummyjson.com/products) pour simuler une boutique en ligne avec des produits variés, sans authentification ni clé API.

## 2. Création des fonctions d'appel API
Dans `src/api/articles.ts` :
```ts
// GET tous les produits
export const getArticles = async () => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur lors du chargement des produits");
  const data = await response.json();
  return data.products;
};

// GET un produit par id
export const getArticle = async (id: number | string) => {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur lors du chargement du produit");
  const data = await response.json();
  return data;
};
```

## 3. Définition de l'interface TypeScript
Dans `src/interfaces/iarticleData.ts` :
```ts
export interface ArticleData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
```

## 4. Utilisation dans les pages React
### Récupération et affichage des produits
Dans `Home.tsx` :
- Utilisation de `useEffect` pour charger les produits au montage.
- Stockage dans un state `articles`.
- Génération dynamique des catégories.
- Affichage des produits filtrés par catégorie.

Exemple :
```tsx
const [articles, setArticles] = useState<ArticleData[]>([]);
useEffect(() => {
  getArticles().then(setArticles);
}, []);
```

### Centralisation de la logique likes/panier
Création d'un hook personnalisé `useArticleActions` dans `src/hooks/useArticleActions.ts` pour éviter la duplication de code entre Home et ArticleDetails.

Exemple d'utilisation :
```tsx
const { handleLike, handleBasket, handleCountBasket } = useArticleActions(
  articles, likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets
);
```

### Adaptation du composant Article
- Utilisation de `thumbnail` pour l'image principale.
- Utilisation de `rating` pour la note.

Exemple :
```tsx
<img src={articleData.thumbnail} alt={articleData.title} />
<span>Note : {articleData.rating} / 5</span>
```

## 5. Gestion des hooks React
- Toujours appeler les hooks (comme `useArticleActions`) en dehors des conditions pour respecter les règles React.

Exemple (correct) :
```tsx
// Toujours en haut du composant, jamais dans un if
const { handleLike, handleBasket, handleCountBasket } = useArticleActions(
  articles.length ? articles : [],
  likes,
  setLikes,
  baskets,
  setBaskets,
  countBaskets,
  setCountBaskets
);

if (!articles.length) {
  return <div>Chargement...</div>;
}
```


## 6. Résultat
- Les produits sont chargés dynamiquement depuis l'API.
- Les catégories, likes et panier sont gérés dynamiquement et de façon centralisée.
- Le code est factorisé, réutilisable et conforme aux bonnes pratiques React.

Exemple d'affichage obtenu :

```jsx
// Exemple d'une carte produit affichée
<div className="card">
  <img src={articleData.thumbnail} alt={articleData.title} />
  <h2>{articleData.title}</h2>
  <p>{articleData.price} €</p>
  <span>Catégorie : {articleData.category}</span>
  <span>Note : {articleData.rating} / 5</span>
  <button onClick={onLike}>Like ({likeCount})</button>
  <button onClick={onBasket}>Ajouter au panier</button>
</div>
```

L'utilisateur peut filtrer par catégorie, liker un produit ou l'ajouter au panier, et tout est mis à jour dynamiquement.

---

N'hésitez pas à adapter ce guide pour vos propres besoins ou à l'enrichir avec d'autres exemples (pagination, recherche, etc.) !
