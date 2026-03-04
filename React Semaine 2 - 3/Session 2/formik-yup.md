# 1️⃣ Formik & Yup

## **I) useFormik**

**useFormik** est un hook personnalisé fourni par la bibliothèque Formik, qui est une bibliothèque populaire de gestion de formulaires pour React. Ce crochet aide à simplifier le processus de création et de gestion de formulaires dans les applications React en gérant l'état du formulaire, la validation et la soumission du formulaire.

Pourquoi utilise t-on useFormik plutôt que Formik sur sa version native ?

=> Pour avoir exactement la même syntaxe et mode d'utilisation que reactHookForm (autre libraire de gestion de formulaire pour react), ainsi on pourra passer de l'un a l'autre assez facilement.

Voici un exemple basique de la façon dont vous pourriez utiliser useFormik

dans un composant fonctionnel React :

//JSX 


```javascript
  import React from 'react'; import { useFormik } from 'formik';  const MyForm = () => {   // useFormik retourne un objet avec diverses propriétés et méthodes pour gérer le formulaire   const formik = useFormik({     initialValues: {       // Définir les valeurs initiales pour les champs de votre formulaire       lastname: '',       firstname: '',       email: '',     },     // Définir une fonction à exécuter lorsque le formulaire est soumis     onSubmit: values => {       // Gérer la logique de soumission du formulaire ici       console.log(values);     },   });    return (     <form onSubmit={formik.handleSubmit}>       {/* Champs de saisie avec leurs valeurs et gestionnaires d'événements correspondants */}       <div>         <label htmlFor="firstname">Prénom</label>         <input           type="text"           id="firstname"           name="firstname"           onChange={formik.handleChange}           value={formik.values.firstname}         />        </div>        {/* Répéter un code similaire pour les autres champs du formulaire */}        {/* Bouton de soumission */}       <button type="submit">Soumettre</button>     </form>   ); };  export default MyForm;
```


## **II) Yup**

Yup est un constructeur de schéma pour l'analyse et la validation des valeurs pendant l'exécution. Définissez un schéma, transformez une valeur pour qu'elle corresponde, affirmez la structure d'une valeur existante, ou les deux. Les schémas Yup sont extrêmement expressifs et permettent de modéliser des validations complexes et interdépendantes, ainsi que des transformations de valeurs.

En partant du formulaire ci-dessus, Voici un exemple de la façon dont vous pourriez utiliser Yup

```jsx
//JSX

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  // Utiliser Yup pour définir le schéma de validation
  const validationSchema = Yup.object({
    firstname: Yup.string().required('Le prénom est requis'),
    lastname: Yup.string().required('Le nom est requis'),
    email: Yup.string().email('Format d\'email invalide').required('L\'email est requis'),
  });

  // useFormik retourne un objet avec diverses propriétés et méthodes pour gérer le formulaire
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validationSchema: validationSchema, // Utiliser le schéma de validation Yup
    onSubmit: values => {
      // Gérer la logique de soumission du formulaire ici
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div>{formik.errors.firstname}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={formik.handleChange} 
          value={formik.values.lastname}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div>{formik.errors.lastname}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <button type="submit">Soumettre</button>
    </form>
  );
};

export default MyForm;
```