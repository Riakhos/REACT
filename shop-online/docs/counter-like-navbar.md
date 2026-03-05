# Compteur de Likes global avec affichage dans la Navbar

## Objectif
Mettre en place un compteur de likes pour chaque article, et afficher la somme totale des likes dans la barre de navigation (Navbar).

---

## Étapes détaillées


### 1. Déclarer le compteur global dans App
- Dans `App.tsx`, importe la liste des articles.
- Crée un state `likes` qui contient un tableau de compteurs (**Array(articles.length).fill(0)** crée un tableau de la taille du nombre d’articles, rempli de zéros. Exemple : si tu as 3 articles, ça donne [0, 0, 0].) :

```tsx
const [likes, setLikes] = useState<number[]>(Array(articles.length).fill(0));
```

**Pourquoi ne pas déclarer le compteur dans Article ?**

Si tu déclares le compteur dans chaque Article, chaque composant aura son propre compteur isolé, impossible à additionner ou à synchroniser avec les autres. En React, on place l’état le plus haut possible dans la hiérarchie pour que tous les composants qui en ont besoin puissent y accéder via les props. C’est le principe du "lifting state up" : l’état global (ici, le tableau de likes) est dans App, puis transmis à Home et Article. Ainsi, tous les articles peuvent modifier le compteur global, la navbar peut afficher la somme totale, et l’état reste cohérent et centralisé.

### 2. Passer les props nécessaires
- Passe `likes` et `setLikes` au composant `Home`.
- Passe la somme des likes (`likes.reduce((a, b) => a + b, 0)`) à `NavigationBar` via la prop `counterLike`.

```tsx
<NavigationBar counterLike={likes.reduce((a, b) => a + b, 0)} />
<Home likes={likes} setLikes={setLikes} />
```

### 3. Adapter le composant Home
- Ajoute l'interface' des props :
- React.Dispatch : un type générique pour une fonction qui « envoie » une action ou une nouvelle valeur.
- React.SetStateAction<number[]> : cela peut être soit une nouvelle valeur (un tableau de nombres), soit une fonction qui reçoit l’ancienne valeur et retourne la nouvelle.

```tsx
interface HomeProps {
  likes: number[];
  setLikes: React.Dispatch<React.SetStateAction<number[]>>;
};
```
- Passe à chaque `Article` :
  - le compteur de likes correspondant (`likeCount={likes[index]}`)
  - une fonction pour incrémenter ce compteur (`onLike={() => ...}`)

```tsx
<Article
  key={index}
  articleData={article}
  likeCount={likes[index]}
  onLike={() => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  }}
/>
```

### 4. Adapter le composant Article
- Ajoute l'interface des props :

```tsx
interface ArticleProps {
  articleData: ArticleData;
  likeCount: number;
  onLike: () => void;
};
```
- Utilise ces props pour afficher et incrémenter le compteur :

```tsx
<button onClick={onLike}>
  <AiFillLike size={28} />{likeCount}
</button>
```

### 5. Adapter NavigationBar
- Ajoute l'interface de la prop :

```tsx
interface NavigationBarProps {
  counterLike: number;
};
```
- Affiche le compteur à côté du lien Favoris (ou Likes) :

```tsx
{link.name === 'Likes' ? <span>{link.name} {counterLike}</span> : link.name}
```

---

## Bonus
- Grâce aux likes créer une liste de produits populaires.
  - Exemple : dans Likes.tsx, pour afficher les articles les plus likés :
    ```tsx
    const Likes = ({ likes, setLikes, baskets, setBaskets, countBaskets, setCountBaskets, articles }: LikesProps) => {
      // Associer chaque article à son nombre de likes
      const articlesWithLikes = articles.map((article, idx) => ({
        ...article,
        likeCount: likes[idx] || 0
      }));

      // Trier par nombre de likes décroissant et ne garder que ceux avec au moins 1 like
      const sorted = articlesWithLikes
        .filter(a => a.likeCount > 0)
        .sort((a, b) => b.likeCount - a.likeCount);

      // Centralisation de la logique likes/panier
      const { handleLike, handleBasket, handleCountBasket } = useArticleActions(
        articles,
        likes,
        setLikes,
        baskets,
        setBaskets,
        countBaskets,
        setCountBaskets
      );

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Produits les plus likés</h1>
          {sorted.length === 0 ? (
            <p>Aucun produit liké pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-8">
              {sorted.map(article => (
                <Article
                  key={article.id}
                  articleData={article}
                  likeCount={article.likeCount}
                  onLike={() => handleLike(article.id)}
                  onCountBasket={() => handleCountBasket(article.id)}
                  baskets={baskets}
                  onBasket={() => handleBasket(article)}
                  showDetails={true}
                />
              ))}
            </div>
          )}
        </div>
      );
    };
    ```
    - Affichez-les dans une section "Populaires" ou avec un filtre spécial.

- Garder en mémoire les likes même après déconnexion et faire en sorte que le filtre ne crée pas de bug. On souhaite de base avoir un filtre all ou bien par catégories.
  - Exemple : persister les likes dans le localStorage :
    ```tsx
    // Dans App.tsx

    // Initialisation du state likes à partir du localStorage (bonne pratique)
    const [likes, setLikes] = useState<number[]>(() => {
      const saved = localStorage.getItem('likes');
      return saved ? JSON.parse(saved) : [];
    });

    // Charger les articles au montage
  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      // Si likes vide (pas de localStorage), initialiser
      setLikes(prev => prev.length === 0 ? Array(data.length).fill(0) : prev);
      setCountBaskets(Array(data.length).fill(0));
    });
  }, []);

    // Sauvegarde automatique à chaque modification
    useEffect(() => {
      localStorage.setItem('likes', JSON.stringify(likes));
    }, [likes]);
    ```
  - Pour le filtre, ajoutez une catégorie "All" :
    ```tsx
    const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];
    // ...
    {articles
      .filter(article => selected === 'All' || article.category === selected)
      .map(...)
    }
    ```

---

## Résultat
- Chaque article a son propre compteur de likes.
- Le total des likes de tous les articles s’affiche dynamiquement dans la Navbar.
- Le tout est typé en TypeScript pour plus de robustesse.

---

## Astuce
Pour ajouter d’autres compteurs globaux (ex : panier), il suffit de suivre la même logique : state global dans App, passage de props, et affichage où tu veux dans l’UI.
