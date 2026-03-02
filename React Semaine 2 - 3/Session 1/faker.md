# 3️⃣ Faker

## I) **Dynamisation**


Il faudra dynamiser un maximum son code afin de faciliter le câblage du back et du front une fois que les routes seront terminées. Ainsi nous créerons des fakers et nous les injecterons dans le code afin que l'application soit 100% fonctionnelles. Il n'y aura ainsi que la route a remplacer le fichier faker sera crée au niveau du dossier qui contient la page.\n

Ainsi au lieu d'aller chercher la data dans une ressources distante, nous irons la chercher dans le faker.ts

Exemple de faker =>

```typescript
const usersFake = [
  {
    id: 1,
    firstname: "Ange2",
    lastname: "randria",
    username: "coucou", 
    status : 10
  },
  {
    id: 2,
    firstname: "Ange2",
    lastname: "randria",
    username: "coucousdgsdg",
    status : 10
  },
  {
    id: 3,
    firstname: "Ange3",
    lastname: "randria",
    username: "coucouvcn",
    status : 20
  },
  {
    id: 4,
    firstname: "Ange4",
    lastname: "randria",
    username: "coucoubfbn",
    status : 10
  }
];

const faker = {
  datas : usersFake
}

export {faker};
```


```typescript
// import du faker dans le fichier service/api
import { faker } from '../../pages/User/faker'


export async function getAllUsers() {
  try {
    //const response = await api.get(`users`);
    const response = faker
    return response;
  } catch (error) {
    return error;
  }
}
```