# 1️⃣ Hook : useContext

Le hook useContext en React est un outil très utile pour accéder aux données d'un contexte. Un contexte, créé à l'aide de createContext, permet de partager des données à travers l'arbre des composants sans avoir à les passer explicitement à chaque niveau via des props.

## \nI) **Création du userContext**

```typescript
import { createContext, useState, ReactNode } from 'react';

// On crée d'abord le type pour le contexte utilisateur
interface UserContextType {
    user: string;                    
    updateUser: (username: string) => void;  
}

// Le type "ReactNode" est utilisé pour représenter tout ce qui peut être rendu dans React
interface UserProviderType {
    children: ReactNode;
}

// On initialise le contexte avec un type UserContextType ou undefined 
// (le contexte peut être initialisé à vide)
const UserContext = createContext<UserContextType>({
    user: '',
    updateUser: () => {}
})


export function UserProvider({ children }: UserProviderType) {
   
    const [user, setUser] = useState<string>('');

    function updateUser(username: string) {
        console.log('coucou context');
        setUser(username)
    }

    return (
       /*  Ce composant spécial permet de fournir la valeur user et la fonction updateUser 
        à tous les composants descendants de UserProvider qui consomment ce contexte. */
        
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
```

## \n2) **Wrapper le App**


Pour que App puisse hériter des fonctionnalités de UserProvider nous devons le wrapper avec ce dernier

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './hooks/contexts/user.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 
 <React.StrictMode>
    <BrowserRouter>

    <UserProvider>
      <App />
    </UserProvider>
  
    </BrowserRouter>
  </React.StrictMode>,
)
```

## \n**3) Utilisation du contexte dans les pages**

```typescript
export default function HomePage() {

    const [title, setTitle] = useState<any>('');
    const [todos, setTodos] = useState<any>([])

    const {user, updateUser} = useContext(UserContext);
    
     return (
        <>
            <h1> Home Page</h1>
            
            <p> Ceci est la page d'accueil</p>

            <p> {user} </p>

            <button onClick={submitMessage}> Test du useContext </button>
        </>
    )
 }
```


\