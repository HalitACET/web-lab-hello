import './App.css';
import profileImg from './assets/profile.jfif';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Halit Acet - Kişisel Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">

        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img
              src={profileImg}
              alt="Halit Acet'in vesikalık fotoğrafı"
            />
            <figcaption>Halit Acet</figcaption>
          </figure>
          <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Web geliştirme teknolojileriyle ilgileniyorum.</p>
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>React & TypeScript</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>E-Ticaret Sitesi</h3>
            <p>React kullanılarak geliştirilmiş, kullanıcı dostu bir alışveriş platformu.</p>
          </article>

          <article>
            <h3>Tiyatro Kulübü Uygulaması</h3>
            <p>Üyesi olduğum tiyatro kulübü için geliştirdiğim yönetim sistemi.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Halit Acet. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;