# 1️⃣ Hook : useState

Un Hook est une **fonction qui permet d'utiliser le cycle de vie** ou encore des états dans les composants sous forme de "function". Un hook, par convention, **commence par le mot clé "use" en minuscule**.

*Le useState* permet à un composant de [« se souvenir » d'informations telles que des saisies utilisateur](https://fr.react.dev/learn/state-a-components-memory). 
Par exemple, un composant formulaire peut utiliser l'état local pour stocker la valeur saisie, alors qu'un composant de galerie d'images pourra l'utiliser pour stocker l'index de l'image affichée.

```typescript
// Déclaration d'une variable reactive ! 
const [index, setIndex] = useState<number>(0);

//Pour modifier sa valeur 
setIndex(1);

//Il n'est pas possible de modifier la valeur ainsi : 
index = 2;
```

**Pour modifier un Objet**

```typescript
const [user, setUser] = useState({ 
  firstname : 'Alice', 
  age: 25 
 });
 
setUser({...user, firstname : 'Adeline'})
```

**Pour modifier un objet complexe**

```typescript
const [user, setUser] = useState({ 
  firstname : 'Alice', 
  age: 25,
  cats : {
    name : 'Oslo',
    age : 1
  }
 });
 
setUser({
  ...user, 
  cats: {
    name : "Globule",
    age : 2,
  }
})
```

**Pour modifier un Tableau**

```typescript
const [numbers, setNumbers] = useState([1, 2, 3]);

let newNumber = [...numbers];
newNumber[0] = 10;

setNumbers(newNumber);
// result : [10, 2, 3]
```

**Pour ajouter un élément supplémentaire à la suite d'un tableau**

```javascript
const [numbers, setNumbers] = useState([1, 2, 3]);

setNumbers([...numbers, 4]);
//result : [1, 2, 3, 4]
```

**Pour ajouter un élément supplémentaire au début d'un tableau**

```typescript
const [numbers, setNumbers] = useState([1, 2, 3]);

setNumbers([4, ...numbers ]);
//result : [4, 1, 2, 3]
```