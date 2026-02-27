# 1️⃣ JSX

**Le JSX** (JavaScript XML) est une extension de syntaxe pour JavaScript qui permet de décrire des interfaces utilisateur en mélangeant HTML et JavaScript.

\n**Pourquoi l'utiliser ?**

* Lisibilité : Écrit directement dans les composants React.
* Puissance : Combine la logique JavaScript avec l'affichage visuel.
* Rendement : Transformé en appels `React.createElement` pour le rendu.\n

**Exemple de code JSX simple :**

```jsx
const element = <h1>Hello, world!</h1>;
```

\nCe que React voit en interne :

```js
const element = React.createElement('h1', null, 'Hello, world!');
```



---

### **Syntaxe de Base**


**Composants racines :** Un composant JSX doit toujours avoir un seul élément parent.

```jsx
const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is JSX.</p>
    </div>
  );
};
```

\n**Utilisation d'un fragment :** Pour éviter d'ajouter une `div` inutile :

```jsx
const App = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>This is JSX.</p>
    </>
  );
};
```

\n**Expressions JavaScript :** On peut insérer des expressions JS dans JSX à l'aide des accolades `{}`.

```jsx
function App () {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
};
```



---

### **Attributs dans JSX**

**Valeurs dynamiques**

```jsx

function App () {
  const isDisabled = true;
  return <button disabled={isDisabled}>Click me</button>;
};
```

\n**Classes CSS :** Utiliser `className` au lieu de `class`.

```jsx
function App () {
  return <div className="container">Hello, JSX!</div>;
};
```



---

### **Listes et Clés**

**Rendre une liste :** Utilisation de la méthode `.map()` :

```jsx
function App () {

  const items:string[] = ["React", "JSX", "Components"];
  return (
    <ul>
      {items.map((item:string, index:number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
```

**Clés dans les listes :**

* Doivent être **uniques et stables**.
* Aident React à optimiser le rendu.


---

### **5. Gestion des événements avec JSX**

\n**Ajouter un événement :**

```jsx
function App () {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
};
```


**Passer des paramètres :**

```jsx
function App () {
  const handleClick = (message) => {
    alert(message);
  };

  return <button onClick={() => handleClick("Hello!")}>Click me</button>;
};
```



---

### **JSX Conditionnel**


**Rendu conditionnel simple :**

```jsx
function App () {
  const isLoggedIn = true;
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
};
```

\n**Utilisation de** `&&` pour éviter les ternaires :

```jsx
function App () {
  const showMessage = true;
  return <>{showMessage && <p>This message is visible.</p>}</>;
};
```


---

### **Bonnes Pratiques avec JSX**

**Toujours fermer les balises :**

```jsx
<input type="text" />
```


**Utiliser des fragments si besoin :** Éviter de surcharger le DOM avec des div inutiles.\n


---

### **Limitations et Pièges à Éviter**

\n**JSX n'est pas HTML**

`class` devient `className`.

Pas d'attributs spécifiques au navigateur (ex : `for` devient `htmlFor`)


**Types des événements** 

S'assurer que le code est sécurisé (ex : éviter l'injection de valeurs dynamiques directement dans le JSX sans validation).