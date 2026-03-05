# Création des modals Signin et Signup

## 1. Objectif
Permettre à l'utilisateur de se connecter ou de créer un compte via des modals (fenêtres pop-up).


## 2. Étapes détaillées

### Partie 1 : Création de la modal Signin

#### 1. Créer le composant Signin
Dans `src/components/Signin.tsx` :
```tsx
// Import du hook useForm depuis react-hook-form
import { useForm } from "react-hook-form";

// Définition du composant de connexion
const Signin = () => {
  // Initialisation du hook useForm pour gérer le formulaire et la validation
  // register : pour lier les inputs au système de validation
  // handleSubmit : pour gérer la soumission du formulaire
  // errors : pour accéder aux erreurs de validation
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Fonction appelée lors de la soumission du formulaire
  // data contient les valeurs des champs si la validation est OK
  const onSubmit = data => {
    // Ici, placer la logique de connexion (appel API, gestion du token, etc.)
    console.log(data);
  };

  return (
    // Le formulaire utilise handleSubmit pour valider avant d'appeler onSubmit
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Champ Email avec validation */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-gray-300 font-medium">Email</span>
        </label>
        <input
          type="email"
          // On lie l'input à react-hook-form avec register
          // Validation : requis + format email (regex)
          {...register("email", {
            required: "Email is required", // Message si vide
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address" // Message si format incorrect
            }
          })}
          autoComplete="email"
          placeholder="Enter your email"
          className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
        />
        {/* Affichage du message d'erreur si besoin */}
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Champ Mot de passe avec validation */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-gray-300 font-medium">Password</span>
        </label>
        <input
          type="password"
          // Validation : requis, longueur min/max, complexité (majuscule, minuscule, chiffre, spécial)
          {...register("password", {
            required: "Password is required", // Message si vide
            minLength: {
              value: 12,
              message: "Password too short" // Message si trop court
            },
            maxLength: {
              value: 50,
              message: "Password too long" // Message si trop long
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{12,}$/,
              message: "The password must contain one uppercase letter, one lowercase letter, one number, and one special character."
            },
          })}
          autoComplete="current-password"
          placeholder="Enter your password"
          className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
        />
        {/* Affichage du message d'erreur si besoin */}
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Bouton de soumission du formulaire */}
      <button
        type="submit"
        className="btn btn-error w-full bg-red-600 hover:bg-red-700 border-0 text-white font-bold text-lg mt-8"
      >
        Sign in
      </button>
    </form>
  );
};

// Export du composant pour l'utiliser ailleurs
export default Signin;
```

#### 2. Ouvrir/fermer la modal Signin
```tsx
<dialog id="form-signin" className="modal">
  <Signin />
</dialog>
// Pour ouvrir : (document.getElementById('form-signin') as HTMLDialogElement)?.showModal()
// Pour fermer : (document.getElementById('form-signin') as HTMLDialogElement)?.close()
```

### Partie 2 : Création de la modal Signup

#### 1. Créer le composant Signup
Dans `src/components/Signup.tsx` :
```tsx
// Import du hook useForm depuis react-hook-form
import { useForm } from "react-hook-form";

// Définition du composant d'inscription
const Signup = () => {
  // Initialisation du hook useForm pour gérer le formulaire et la validation
  // register : pour lier les inputs au système de validation
  // handleSubmit : pour gérer la soumission du formulaire
  // errors : pour accéder aux erreurs de validation
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Fonction appelée lors de la soumission du formulaire
  // data contient les valeurs des champs si la validation est OK
  const onSubmit = data => {
    // Ici, placer la logique d'inscription (appel API, gestion du token, etc.)
    console.log(data);
  };

  return (
    // Le formulaire utilise handleSubmit pour valider avant d'appeler onSubmit
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Champ Email avec validation */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-gray-300 font-medium">Email</span>
        </label>
        <input
          type="email"
          // On lie l'input à react-hook-form avec register
          // Validation : requis + format email (regex)
          {...register("email", {
            required: "Email is required", // Message si vide
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address" // Message si format incorrect
            }
          })}
          autoComplete="email"
          placeholder="Enter your email"
          className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
        />
        {/* Affichage du message d'erreur si besoin */}
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Champ Mot de passe avec validation */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-gray-300 font-medium">Password</span>
        </label>
        <input
          type="password"
          // Validation : requis, longueur min/max, complexité (majuscule, minuscule, chiffre, spécial)
          {...register("password", {
            required: "Password is required", // Message si vide
            minLength: {
              value: 12,
              message: "Password too short" // Message si trop court
            },
            maxLength: {
              value: 50,
              message: "Password too long" // Message si trop long
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{12,}$/,
              message: "The password must contain one uppercase letter, one lowercase letter, one number, and one special character."
            },
          })}
          autoComplete="new-password"
          placeholder="Enter your password"
          className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
        />
        {/* Affichage du message d'erreur si besoin */}
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Champ Confirmation du mot de passe */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-gray-300 font-medium">Confirm password</span>
        </label>
        <input
          type="password"
          // Validation : doit être identique au mot de passe
          {...register("confirmPassword", {
            required: "Confirmation is required", // Message si vide
            validate: (value, formValues) => value === formValues.password || "Passwords do not match" // Message si différent
          })}
          autoComplete="new-password"
          placeholder="Confirm your password"
          className="input input-bordered input-ghost w-full bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:input-primary"
        />
        {/* Affichage du message d'erreur si besoin */}
        {errors.confirmPassword && (
          <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Bouton de soumission du formulaire */}
      <button
        type="submit"
        className="btn btn-error w-full bg-red-600 hover:bg-red-700 border-0 text-white font-bold text-lg mt-8"
      >
        Sign up
      </button>
    </form>
  );
};

// Export du composant pour l'utiliser ailleurs
export default Signup;
```

#### 2. Ouvrir/fermer la modal Signup
```tsx
<dialog id="form-signup" className="modal">
  <Signup />
</dialog>
// Pour ouvrir : (document.getElementById('form-signup') as HTMLDialogElement)?.showModal()
// Pour fermer : (document.getElementById('form-signup') as HTMLDialogElement)?.close()
```


### Contraintes de validation détaillées

#### Email
- **Obligatoire** : L'utilisateur doit fournir une adresse email.
- **Format** : L'email doit respecter le format standard (ex : nom@domaine.com). Le pattern utilisé `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` vérifie la présence d'un texte avant et après le `@`, puis d'un point et d'un domaine.
- **Message d'erreur personnalisé** : Si le champ est vide ou mal formaté, un message explicite s'affiche.

#### Mot de passe
- **Obligatoire** : Le mot de passe ne peut pas être vide.
- **Longueur minimale** : 12 caractères minimum (`minLength: 12`).
- **Longueur maximale** : 50 caractères maximum (`maxLength: 50`).
- **Complexité** : Le mot de passe doit contenir :
  - au moins une majuscule
  - au moins une minuscule
  - au moins un chiffre
  - au moins un caractère spécial (`#?!@$ %^&*-`)
  - Le pattern `/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{12,}$/` vérifie ces contraintes.
- **Message d'erreur personnalisé** : Un message clair s'affiche selon la contrainte non respectée (trop court, trop long, manque de complexité).

#### Confirmation du mot de passe (Signup uniquement)
- **Obligatoire** : L'utilisateur doit confirmer son mot de passe.
- **Correspondance** : Le champ doit être identique au mot de passe saisi (`validate: value === formValues.password`).
- **Message d'erreur personnalisé** : Si les mots de passe ne correspondent pas, un message explicite s'affiche.

**Exemple d'affichage d'erreur** :
```tsx
{errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
{errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
{errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>}
```

## 3. Exemple d'ouverture/fermeture de modals
```tsx
// Lien pour ouvrir la modal signup depuis signin
<Link
  to="/signup"
  className="text-red-600 hover:text-red-500 font-semibold"
  // Ouvre la modal signup en cliquant sur le lien
  onClick={() => (document.getElementById('form-signup') as HTMLDialogElement)?.showModal()}
>
  Sign up
</Link>

// Lien pour ouvrir la modal forgot depuis signin
<Link
  to="/forgot"
  className="hover:text-red-600"
  // Ferme la modal signin et ouvre la modal forgot
  onClick={e => {
    e.preventDefault();
    (document.getElementById('form-signin') as HTMLDialogElement)?.close();
    (document.getElementById('form-forgot') as HTMLDialogElement)?.showModal();
  }}
>
  Forgot your password?
</Link>
```

## 4. Exemple de structure de modal
```tsx
// Structure de base pour afficher les modals dans l'app
<dialog id="form-signin" className="modal">
  {/* Composant de connexion */}
  <Signin />
</dialog>
<dialog id="form-signup" className="modal">
  {/* Composant d'inscription */}
  <Signup />
</dialog>
```

## 5. Validation avec react-hook-form
```tsx
// Exemple d'input email avec validation react-hook-form
<input
  type="email"
  {...register("email", {
    required: "Email is required", // Champ obligatoire
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address" // Message si le format n'est pas bon
    }
  })}
  autoComplete="email"
/>
{/* Affiche le message d'erreur si besoin */}
{errors.email && <p>{errors.email.message}</p>}
```
