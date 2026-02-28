
const App = () => {
  return (
    <body data-theme="caramellatte">
      <header className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">🎬 AlloCiné</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> </svg>
                <span className="badge badge-sm indicator-item">4</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">Ma liste</span>
                <span className="text-info">4 films en favoris</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">Voir ma liste</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Mon Profil
                  <span className="badge">Premium</span>
                </a>
              </li>
              <li><a>Mes Favoris</a></li>
              <li><a>Historique</a></li>
              <li><a>Paramètres</a></li>
              <li><a>Déconnexion</a></li>
            </ul>
          </div>
        </div>
      </header>  
      
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="hover-3d card card-side bg-base-100 shadow-sm">
            <figure className="w-200 rounded-2xl">
              <img
                src="https://picsum.photos/seed/inception/400/550"
                alt="Inception" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Inception</h2>
              <p>Un voleur qui s'infiltre dans les rêves se voit offrir une chance de retrouver sa vie d'avant.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hover-3d card card-side bg-base-100 shadow-sm">
            <figure className="w-200 rounded-2xl">
              <img
                src="https://picsum.photos/seed/matrix/400/550"
                alt="The Matrix" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">The Matrix</h2>
              <p>Un hacker découvre que la réalité n'est qu'une simulation contrôlée par des machines.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hover-3d card card-side bg-base-100 shadow-sm">
            <figure className="w-200 rounded-2xl">
              <img
                src="https://picsum.photos/seed/interstellar/400/550"
                alt="Interstellar" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Interstellar</h2>
              <p>Une équipe d'explorateurs voyage à travers un trou de ver pour sauver l'humanité.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hover-3d card card-side bg-base-100 shadow-sm">
            <figure className="w-200 rounded-2xl">
              <img
                src="https://picsum.photos/seed/darkknight/400/550"
                alt="The Dark Knight" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">The Dark Knight</h2>
              <p>Batman affronte le Joker, un criminel qui plonge Gotham dans le chaos.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>

      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Genres</h6>
          <a className="link link-hover">Action</a>
          <a className="link link-hover">Science-Fiction</a>
          <a className="link link-hover">Thriller</a>
          <a className="link link-hover">Comédie</a>
          <a className="link link-hover">Drame</a>
        </nav>
        <nav>
          <h6 className="footer-title">À propos</h6>
          <a className="link link-hover">Qui sommes-nous</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Carrières</a>
          <a className="link link-hover">Presse</a>
        </nav>
        <nav>
          <h6 className="footer-title">Légal</h6>
          <a className="link link-hover">Conditions d'utilisation</a>
          <a className="link link-hover">Politique de confidentialité</a>
          <a className="link link-hover">Cookies</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Recevez les nouveautés cinéma</label>
            <div className="join">
              <input
                type="text"
                placeholder="votre@email.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">S'abonner</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </body>
  )
}

export default App
