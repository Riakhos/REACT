# Création des Skeletons (Loader)

## 1. Pourquoi utiliser un skeleton ?
Un skeleton permet d'afficher un aperçu visuel pendant le chargement des données, améliorant l'expérience utilisateur.

## 1ère partie : Skeleton pour la liste de films

### Étapes :
- Créer un composant `SkeletonMovie.tsx` dans `src/components/`
- Utiliser des divs grises animées pour simuler la structure d'une carte film
- Afficher ce composant dans la page Home tant que les films ne sont pas chargés


### Étapes :
- Créer un composant `SkeletonMovie.tsx` dans `src/components/`
- Créer un état `isLoading` avec `useState` dans la page Home :
```tsx
const [isLoading, setIsLoading] = useState(true);
```
- Utiliser un `useEffect` pour charger les films et simuler un délai avec `setTimeout` :
```tsx
useEffect(() => {
  const getData = async () => {
    const moviesFromBack = await getMovies();
    setMovies(moviesFromBack);
    setTimeout(() => setIsLoading(false), 1000); // 1s de skeleton
  };
  getData();
}, []);
```
- Afficher le skeleton tant que `isLoading` est true :
```tsx
if (isLoading) {
  return (
    <div className='flex flex-wrap gap-4'>
      {[...Array(4)].map((_, i) => <SkeletonMovie key={i} />)}
    </div>
  )
}
```
- Utiliser des divs grises animées pour simuler la structure d'une carte film

### Exemple de code SkeletonMovie :
```tsx
// src/components/SkeletonMovie.tsx
const SkeletonMovie = () => (
  <div className="card bg-base-100 w-96 h-150 shadow-sm animate-pulse">
    <figure>
      <div className="bg-gray-300 w-full h-72 rounded"></div>
    </figure>
    <div className="card-body">
      <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-6"></div>
      <div className="card-actions justify-end flex items-center gap-8">
        <div className="bg-gray-300 rounded-full w-8 h-8"></div>
        <div className="bg-gray-300 rounded-full w-8 h-8"></div>
        <div className="bg-gray-300 rounded-full w-8 h-8"></div>
        <div className="bg-gray-300 rounded-full w-7 h-7"></div>
      </div>
    </div>
  </div>
);
export default SkeletonMovie;
```

---


## 2ème partie : Skeleton pour la fiche détaillée (MovieDetails)

### Étapes :
- Créer un composant `SkeletonMovieDetails.tsx` dans `src/components/`
- Créer un état `isLoading` avec `useState` dans MovieDetails :
```tsx
const [isLoading, setIsLoading] = useState(true);
```
- Utiliser un `useEffect` pour simuler le chargement avec `setTimeout` :
```tsx
useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);
```
- Afficher le skeleton tant que `isLoading` est true :
```tsx
if (isLoading) {
  return <SkeletonMovieDetails />;
}
```
- Afficher la fiche détaillée une fois les données chargées :
```tsx
<Movie 
  movieData={oneMovie}
  handleParentClick={getMovie}
  isInWishList={isIn}
  showDetails={true}
/>
```
- Utiliser des divs grises animées pour simuler la structure de la fiche détaillée (voir exemple ci-dessous)

### Exemple de code SkeletonMovieDetails :
```tsx
// src/components/SkeletonMovieDetails.tsx
const SkeletonMovieDetails = () => (
    <div className="card bg-base-100 flex flex-row items-stretch shadow-sm animate-pulse w-full min-h-180">
        <figure className="w-1/2 shrink-0 flex items-center justify-center p-4">
            <div className="bg-gray-300 w-120 h-180 rounded"></div>
        </figure>
        <div className="card-body w-1/2 flex flex-col justify-between">
            <div className="h-12 bg-gray-300 rounded w-2/3 mb-4"></div>
            <div className="space-y-3 mb-2">
                <div className="h-5 bg-gray-300 rounded w-5/6"></div>
                <div className="m-5 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
                <div className="m-5 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
                <div className="flex justify-end gap-1 mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="mask mask-star bg-gray-300 w-6 h-6"></div>
                    ))}
                </div>
            </div>
            <div className="card-actions justify-end flex items-center gap-8 mt-4">
                <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                <div className="bg-gray-300 rounded-full w-7 h-7"></div>
            </div>
        </div>
    </div>
);
export default SkeletonMovieDetails;
```

---
