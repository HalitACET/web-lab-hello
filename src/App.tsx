import './App.css';
import profileImg from './assets/profile.jfif';

function App() {
  return (
    <>
      {/* Erişilebilirlik: Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Responsive Header */}
      <header>
        <div className="site-title">Halit Acet</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü ve Skill Tags */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img src={profileImg} alt="Halit Acet'in vesikalık fotoğrafı" />
              <figcaption>Yazılım Mühendisliği Öğrencisi</figcaption>
            </figure>
            <div className="about-text">
              <p>
                Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim.
                Web geliştirme teknolojileriyle ilgileniyorum.
              </p>

              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Grid ile Kart Düzeni */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://picsum.photos/400/250"
                alt="E-Ticaret projesi ekran görüntüsü"
              />
              <div className="card-body">
                <h3>E-Ticaret Sitesi</h3>
                <p>
                  React kullanılarak geliştirilmiş, kullanıcı dostu bir
                  alışveriş platformu.
                </p>
                <ul className="skill-tags">
                  <li>React</li>
                  <li>Vite</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img
                src="https://picsum.photos/401/250"
                alt="Tiyatro uygulaması ekran görüntüsü"
              />
              <div className="card-body">
                <h3>Tiyatro Kulübü Uygulaması</h3>
                <p>
                  Üyesi olduğum tiyatro kulübü için geliştirdiğim yönetim
                  sistemi.
                </p>
                <ul className="skill-tags">
                  <li>TypeScript</li>
                  <li>CSS Grid</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form
            className="contact-form"
            action="#"
            method="POST"
            noValidate
          >
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
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
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