# Intégration de Local Storage dans CounterProvider, CounterContext et Movie

Ce guide explique comment intégrer le stockage local (localStorage) pour persister la valeur du compteur dans une application React utilisant CounterProvider, CounterContext et le composant Movie. Chaque étape est accompagnée d'exemples de code et de commentaires explicatifs.

---

## 1. Utilisation de localStorage dans CounterProvider

**Objectif :** Sauvegarder et restaurer la valeur du compteur à l'aide de localStorage.

### Exemple d'implémentation :

```tsx
// src/context/CounterProvider.tsx
import { useState, type ReactNode } from "react"
import { CounterContext } from "./CounterContext"  

interface IContext {
    children: ReactNode
}  

const CounterProvider = ({children}: IContext) => {  

    const [counter, setCounter] = useState<number>(() => {
        const stored = localStorage.getItem('counter')
        return stored !== null ? JSON.parse(stored) : 0
    })  

    const increment = () => {
        setCounter(counter + 1)
        localStorage.setItem('counter', JSON.stringify(counter + 1))
    } 

    return (
        <CounterContext.Provider value={{counter, increment, setCounter}} >
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider
```


---

## 2. Mapping de films favoris et gestion du compteur (ex : MyList & Movie)

**Objectif :**
- Afficher la liste des films favoris avec une clé unique (`key`) pour chaque élément (bonne pratique React).
- Permettre l'incrémentation d'un compteur global (like) depuis chaque composant Movie.

### Exemple 1 : mapping avec key et passage de props dans MyList.tsx

```tsx
// src/pages/MyList.tsx
import { useContext, useState } from "react"
import { WishListContext } from "../context/WishListContext"
import Movie from "../components/Movie"
import type { IMovie } from "../interfaces/imovie"

const MyList = () => {
	const [movieName, setMovieName] = useState<string>('')
	const getMovie = (myMovie: IMovie) => {
		setMovieName(myMovie.title)
	}
	const { wishList } = useContext(WishListContext)

	return (
		<div className="flex items-center justify-center h-screen gap_3 flex-wrap" >
			<p>
				{/* Affiche le nom du film sélectionné */}
				{movieName !== '' && (`Vous avez choisi ${movieName}`)}
			</p>
			{/* Mapping de la liste avec une clé unique pour chaque Movie */}
			{wishList && wishList.map((item: IMovie) => (
				<Movie
					key={item.id}
					movieData={item}
					handleParentClick={getMovie}
					isInWishList={true}
				/>
			))}
		</div>
	)
}
export default MyList
```

---


### Exemple 2 : incrémentation du compteur dans Movie.tsx

```tsx
// src/components/Movie.tsx (extrait)
import { AiFillLike } from "react-icons/ai"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Movie = ({ ... }) => {
	const { counter, increment } = useContext(CounterContext)
	// ...
	return (
		<div>
			{/* Bouton like qui incrémente le compteur global */}
			<AiFillLike onClick={() => increment()} size={30} /> {counter}
		</div>
	)
}
```

> **Remarque :**
> - L'utilisation de la prop `key={item.id}` est indispensable pour éviter les warnings React et garantir une bonne performance lors du rendu des listes.
> - Le compteur affiché est partagé entre tous les composants Movie grâce au contexte.

---

## 3. Intégration du localStorage dans WishListProvider

**Objectif :** Sauvegarder et restaurer la liste de souhaits (wishList) à l'aide de localStorage.

### Exemple d'implémentation :

```tsx
// src/context/WishListProvider.tsx
import { useState, useEffect, type ReactNode } from "react"
import type { IMovie } from "../interfaces/imovie"
import { WishListContext } from "./WishListContext"  

interface WishListProviderProps {
    children: ReactNode
}

const WishListProvider = ({ children }: WishListProviderProps) => {  

    // Initialisation sécurisée : toujours retourner un tableau
    const [wishList, setWishList] = useState<IMovie[]>(() => {
    
        const stored = localStorage.getItem('wishList')
        
        try {
            const parsed = stored ? JSON.parse(stored) : []
            return Array.isArray(parsed) ? parsed : []
        } catch {
            return []
        }
    }) 

    useEffect(() => {
      localStorage.setItem('wishList', JSON.stringify(wishList))
    }, [wishList])

    const handleWishList = (myMovie: IMovie) => {
        if (!wishList.includes(myMovie)) {
            setWishList([...wishList, myMovie])
            // localStorage.setItem('wishList', JSON.stringify([...wishList, myMovie])) //Solution à la place de useEffect
        } else {
            setWishList(wishList.filter((item) => item.id !== myMovie.id))
        }
    }

    return (
        <WishListContext.Provider value={{wishList, handleWishList}} >
            {children}
        </WishListContext.Provider>
    )
}
export default WishListProvider
```

> **Conseil :** Toujours vérifier que la donnée parsée depuis localStorage est bien un tableau pour éviter les erreurs d'exécution.


---

## 4. Vérification de la persistance

**Objectif :** Vérifier que la valeur du compteur reste sauvegardée même après un rechargement de la page.

- Rechargez la page : la valeur du compteur doit rester identique.
- Changez la valeur du compteur : elle est automatiquement sauvegardée dans localStorage.


---

## 5. Commentaires et bonnes pratiques

- Utilisez `useEffect` pour synchroniser le state avec localStorage.
- Utilisez une fonction d'initialisation dans `useState` pour lire la valeur au premier rendu.
- Privilégiez le contexte pour partager la valeur du compteur entre plusieurs composants.


---

## 6. Pour aller plus loin

- Vous pouvez adapter cette logique pour d'autres données (ex : liste de souhaits, préférences utilisateur).
- Pour des données plus complexes, pensez à utiliser JSON.stringify/parse.


---

