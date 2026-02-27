# 2️⃣ Les composants

Un composant fonctionnel dans React est une simple fonction JavaScript qui renvoie du code JSX (une syntaxe proche de HTML). Les composants fonctionnels sont utilisés pour afficher du contenu ou organiser l'interface utilisateur de manière modulaire et réutilisable.\n

### **Création d'un composant fonctionnel de base**

Un composant fonctionnel est une simple fonction qui renvoie du JSX.

**Exemple :**

```javascript
function Hello() {
  return (
    <>
      <h1> Hello World !</h1>
    </>;
  ) 
}

export default Bonjour;
```

\nIci Hello est un composant qui affiche un simple titre.

Un composant est comme une "brique" de votre interface utilisateur, que vous pouvez réutiliser où vous voulez.