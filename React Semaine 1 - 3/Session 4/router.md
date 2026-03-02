# 1️⃣ Router

Dans le contexte de React, react-router-dom est la bibliothèque de routage la plus populaire. \nElle permet de gérer les routes de votre application en associant des URL à des composants spécifiques.\n\nConcepts clés de react-router-dom:

**BrowserRouter**: C'est un composant qui utilise l'API d'historique HTML5 pour garder votre UI en synchronisation avec l'URL. Il crée un objet d'historique qui est utilisé pour la navigation. \n\nIl faudra l'ajouter au main.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```


**Routes :** À partir de la version 6 de react-router-dom, le composant Route a été remplacé par Routes. Routes est un composant qui enveloppe un ensemble de composants Route enfants. Il garantit qu'une seule route enfant est rendue à la fois - la première qui correspond à l'emplacement actuel

**Route**: Ce composant est au cœur de la bibliothèque. Il permet de rendre certains composants lorsque l'URL correspond à un modèle de chemin défini. Par exemple, **<Route path="/about" element ={About}/>** affichera le composant About lorsque l'URL est /about\n\nIl faudra l'ajouter a App.tsx

```typescript
<Routes>
   <Route path="/" element={ <HomePage/> } > </Route>
   <Route path="/contact" element={ <ContactPage/> }> </Route>
   <Route path="/message" element={ <MessagePage/> }> </Route>
</Routes>
     
```

**Link**: Un composant qui permet de naviguer entre les routes. C'est comme un <a> en HTML, mais il utilise l'objet d'historique pour naviguer sans rafraîchir toute la page.

**NavLink** est une version spéciale du composant Link qui peut être "active" lorsque son "to" correspond à la location actuelle. Il est souvent utilisé dans des situations où vous souhaitez styliser différemment un lien de navigation basé sur la route actuellement active.

```typescript
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                
                <NavLink 
                    to="/" 
                    className={ ( {isActive} ) => (isActive ? "activeLink" : undefined ) }> 
                    Home 
                </NavLink>

                <NavLink 
                    to="/contact" 
                    className={ ({isActive}) => (isActive ? "activeLink" : undefined )}> 
                    Contact 
                </NavLink>

                <NavLink 
                    to="/message" 
                    className={ ({isActive}) => (isActive ? "activeLink" : undefined )}> 
                    Message 
                </NavLink>

            </nav>
        </>
    )
} 
```

**Switch**: Il est souvent utilisé pour grouper <Route>s. Le premier enfant <Route> ou <Redirect> dans <Switch> dont le chemin correspond à l'emplacement actuel sera rendu.

**Params**: Ce sont des variables qui font partie de l'URL. Par exemple, dans /user/123, 123 est un paramètre que vous pourriez vouloir extraire.