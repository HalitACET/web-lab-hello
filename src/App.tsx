import profileImg from './assets/profile.jfif';

function App() {
  return (
    <>
      <header>
        <h1>Halit Acet - Kişisel Portfolyo</h1>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src={profileImg}
              alt="Halit Acet'in vesikalık fotoğrafı"
            />
            <figcaption>Halit Acet</figcaption>
          </figure>

          <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Halit Acet. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App