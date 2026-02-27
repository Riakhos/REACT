# 3️⃣ Approche Impérative & Déclarative

## *La programmation impérative* 

La programmation impérative se concentre sur le "HOW" — c'est-à-dire, elle décrit les étapes spécifiques que l'ordinateur doit suivre pour atteindre un objectif. Elle est caractérisée par l'utilisation de boucles, de déclarations conditionnelles, et de commandes de contrôle de flux pour manipuler l'état du programme.\n\nSouvent en Javascript Vanilla l'écriture impérative.

## *La programmation déclarative*

La programmation déclarative se concentre sur le "WHAT" — c'est-à-dire, elle décrit le résultat souhaité plutôt que de détailler les étapes pour y parvenir. Cette approche tend à être plus abstraite et de haut niveau, souvent caractérisée par l'expression des logiques sans décrire explicitement le flux de contrôle.\n\nReact est un langage dit déclaratif

## *Exemple*

**Approche Impérative avec JS Vanilla**

```typescript
const names = ['Alice', 'Bob', 'Charlie'];
const list = document.createElement('ul');

for (let i = 0; i < names.length; i++) {
  const item = document.createElement('li');
  item.textContent = names[i];
  list.appendChild(item);
}

document.body.appendChild(list);
```

\n**Approche Déclarative avec React**

```typescript
import React from 'react';
import ReactDOM from 'react-dom';

const names = ['Alice', 'Bob', 'Charlie'];

function NamesList() {
  return (
    <ul>
      {names.map(name => <li key={name}>{name}</li>)}
    </ul>
  );
}

ReactDOM.render(<NamesList />, document.getElementById('root'));
```