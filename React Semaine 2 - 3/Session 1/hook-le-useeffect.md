# 1️⃣ Hook : Le useEffect

Le useEffect est un hook React qui permet de [synchroniser un composant React avec un système extérieur](https://fr.react.dev/learn/synchronizing-with-effects) (effet de bord). Les effets de bord peuvent inclure des actions telles que la manipulation du DOM, l'appel à des API, la gestion d'abonnements, etc. \n\n**Modification de l'état global ou de l'état d'autres composants :** Cela peut causer des mises à jour imprévues et des comportements incohérents dans l'application.


1. **Requêtes réseau :** Les appels API ou les requêtes de données pendant le rendu peuvent entraîner des problèmes de performance et des mises à jour d'état inattendues.
2. **Effets DOM (Document Object Model) directs :** La manipulation directe du DOM en dehors du système de React peut conduire à des incohérences dans l'affichage de l'interface utilisateur.
3. **Abonnements ou désabonnements à des sources externes :** Par exemple, écouteurs d'événements, flux de données en temps réel, etc.

\nCe Hook permet d'exécuter des opérations après le rendu du composant, garantissant ainsi que ces opérations n'interfèrent pas avec le processus de rendu lui-même. Cela aide à maintenir la cohérence de l'interface utilisateur et à éviter des bugs difficiles à tracer.

\nExemple :

```typescript
 const [message, setMessage]= useState<any>('');
 
 useEffect(() => {
    console.log('useEffect');
 }, []);

 useEffect(() => {
    console.log('useEffect with dependances' )
 }, [messages]);
```

* Le premier s'exécute une seule fois lorsque le composant est monté car nous avons ajouté un tableau vide comme dépendance.
* Néanmoins si nous mettons dans le tableau la dépendance "message", la fonction va s'exécuter quand le composant sera monté + à chaque fois que "messages" va changer alors le useEffect va être appelé.

\nNous avons un autre exemple avec en plus une fonction de nettoyage :

```javascript
 const [compteur, setCompteur] = useState(0);
 
useEffect(() => {
  const timerId = setInterval(() => {
        console.log("coucou"); 
  }, 1000);

  return () => {
    clearInterval(timerId);
  };
}, []);
```

\nLe return dans la fonction passée à useEffect sert à exécuter une fonction de nettoyage lorsque le composant React est sur le point d'être démonté, ou avant que l'effet soit ré exécuté si ses dépendances changent.

```javascript
useEffect(() => {
  document.title = "Nouveau Titre de Page";
  const element = document.getElementById('my-element');
  element.style.color = 'red';
}, []);
```