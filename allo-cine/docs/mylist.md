# Mise en place de la page MyList (liste de souhaits)

## 1. Objectif
Afficher la liste des films ajoutés à la wishlist de l'utilisateur.

## 2. Étapes principales
- Créer un contexte `WishListContext` pour stocker la liste des films favoris
- Créer une page `MyList.tsx` dans `src/pages/`
- Afficher les films de la wishlist sous forme de cartes Movie

## 3. Exemple de contexte WishListContext
```tsx
// src/context/WishListContext.tsx
import { createContext, useState } from 'react';
import type { IMovie } from '../interfaces/imovie';

// Création du contexte avec une liste vide et une fonction par défaut
export const WishListContext = createContext({
  wishList: [],
  handleWishList: (movie: IMovie) => {},
});

// Provider qui englobe l'app et gère la logique d'ajout/suppression
export const WishListProvider = ({ children }) => {
  // État local pour stocker la wishlist
  const [wishList, setWishList] = useState<IMovie[]>([]);

  // Ajoute ou retire un film de la wishlist
  const handleWishList = (movie: IMovie) => {
    setWishList((prev) =>
      prev.find((item) => item.id === movie.id)
        // Si le film est déjà dans la liste, on le retire
        ? prev.filter((item) => item.id !== movie.id)
        // Sinon, on l'ajoute
        : [...prev, movie]
    );
  };

  // Fournit la wishlist et la fonction à tous les enfants
  return (
    <WishListContext.Provider value={{ wishList, handleWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
```

## 4. Exemple de page MyList
```tsx
// src/pages/MyList.tsx
import { useContext } from 'react';
import { WishListContext } from '../context/WishListContext';
import Movie from '../components/Movie';

// Page qui affiche la liste des films favoris
const MyList = () => {
  // Récupère la wishlist depuis le contexte
  const { wishList } = useContext(WishListContext);

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {/* Si la liste est vide, on affiche un message */}
      {wishList.length === 0 ? (
        <p>Votre liste de souhaits est vide.</p>
      ) : (
        // Sinon, on affiche chaque film avec le composant Movie
        wishList.map((movie) => (
          <Movie key={movie.id} movieData={movie} isInWishList={true} />
        ))
      )}
    </div>
  );
};
export default MyList;
```

## 5. Utilisation
- Ajouter/retirer un film de la wishlist via le bouton sur la carte Movie
- Accéder à la page MyList pour voir tous les films favoris
