# 3️⃣ Les props

En React, les "props" (propriétés) sont des paramètres passés à un composant React. Les props sont utilisées pour transmettre des données d'un composant parent à un composant enfant. C'est un moyen de rendre les composants dynamiques et réutilisables, car vous pouvez configurer le comportement d'un composant en lui passant des données via ses props.\n\n**Passer des props depuis le composant parent :** Dans le composant parent, lors de l'utilisation d'un composant enfant, vous pouvez spécifier des attributs qui seront traités comme des props. Par exemple :

```jsx
// Composant parent
import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  return (
    <ChildComponent name="John" age={30} />
  );
};
```

\nIci, name et age sont des props que le composant ChildComponent va recevoir.\n

* **Accéder aux props dans le composant enfant :** Dans le composant enfant (ChildComponent dans cet exemple), vous pouvez accéder aux props en les recevant comme paramètres de la fonction ou en utilisant la syntaxe de destructuration.

  ```tsx
  //Composant enfant (ChildComponent.js)
  import React from 'react';
  
  export default function ChildComponent(props) {
    
    const { name, age } = props
    
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  };
  
  
  ```


Les props peuvent être de n'importe quel type de données, y compris des fonctions, ce qui permet de créer des interactions entre les composants. Les props sont immuables, ce qui signifie qu'ils ne peuvent pas être modifiés à l'intérieur du composant qui les reçoit. Si une mise à jour est nécessaire, le composant parent doit changer la valeur de la prop, déclenchant ainsi un rendu mis à jour du composant enfant.\n

En résumé, les props sont un mécanisme essentiel dans React pour transmettre des données entre composants et rendre l'application plus modulaire et flexible.