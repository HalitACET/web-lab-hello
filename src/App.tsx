import { useState } from 'react';
import './index.css';
import profileImg from './assets/profile.jfif';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import UIKit from './pages/UIKit';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'uikit'>('portfolio');

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDark}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700
            text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg
            hover:scale-110 transition-transform"
          aria-label="Tema değiştir"
        >
          <span className={darkMode ? 'hidden' : 'inline'}>🌙</span>
          <span className={darkMode ? 'inline' : 'hidden'}>☀️</span>
        </button>

        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0
            bg-blue-800 text-white p-2 z-50"
        >
          Ana içeriğe atla
        </a>

        {/* Header / Nav */}
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b
          border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row
            justify-between items-center gap-3">
            <div className="text-xl font-bold text-blue-800 dark:text-blue-300">
              Halit Acet
            </div>
            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('portfolio')}
                    className={`px-3 py-1 rounded-md transition-colors text-sm font-medium
                      ${currentPage === 'portfolio'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    Portföy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('uikit')}
                    className={`px-3 py-1 rounded-md transition-colors text-sm font-medium
                      ${currentPage === 'uikit'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    UI Kit
                  </button>
                </li>
                {currentPage === 'portfolio' && (
                  <>
                    <li>
                      <a href="#hakkimda"
                        className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                          hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors text-sm">
                        Hakkımda
                      </a>
                    </li>
                    <li>
                      <a href="#projeler"
                        className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                          hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors text-sm">
                        Projeler
                      </a>
                    </li>
                    <li>
                      <a href="#iletisim"
                        className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300
                          hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors text-sm">
                        İletişim
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </header>

        {/* Pages */}
        {currentPage === 'uikit' ? (
          <UIKit />
        ) : (
          <main id="main-content">

            {/* === HAKKIMDA === */}
            <section id="hakkimda" className="py-16 px-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row
                items-center md:items-start gap-8">
                <figure className="shrink-0">
                  <img
                    src={profileImg}
                    alt="Halit Acet'in vesikalık fotoğrafı"
                    className="w-40 h-40 rounded-full object-cover shadow-lg
                      ring-4 ring-blue-100 dark:ring-blue-900"
                  />
                  <figcaption className="text-center text-xs text-gray-500
                    dark:text-gray-400 mt-2">
                    Yazılım Mühendisliği Öğrencisi
                  </figcaption>
                </figure>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white
                    mb-4 text-center md:text-left">
                    Hakkımda
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim.
                    Web geliştirme teknolojileriyle ilgileniyorum ve modern arayüzler
                    oluşturmayı seviyorum.
                  </p>
                  <ul className="flex flex-wrap gap-2" role="list"
                    aria-label="Beceri etiketleri">
                    {['HTML5', 'CSS3', 'React', 'TypeScript', 'Tailwind', 'Git'].map(skill => (
                      <li key={skill}
                        className="bg-blue-800 text-white dark:bg-blue-700 px-3 py-1
                          rounded-full text-sm font-medium">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* === PROJELER === */}
            <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900
                  dark:text-white mb-10">
                  Projelerim
                </h2>
                {/* Uygulama-4: Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card
                    variant="elevated"
                    title="E-Ticaret Sitesi"
                    image="https://picsum.photos/seed/ecom/400/250"
                    imageAlt="E-Ticaret projesi ekran görüntüsü"
                    footer={<Button size="sm" variant="primary">Detay Gör</Button>}
                  >
                    React ve Node.js ile geliştirilmiş, kullanıcı dostu bir alışveriş platformu.
                  </Card>

                  <Card
                    variant="elevated"
                    title="Tiyatro Kulübü Uygulaması"
                    image="https://picsum.photos/seed/theatre/400/250"
                    imageAlt="Tiyatro uygulaması ekran görüntüsü"
                    footer={<Button size="sm" variant="secondary">Detay Gör</Button>}
                  >
                    Üyesi olduğum tiyatro kulübü için geliştirdiğim yönetim sistemi.
                  </Card>

                  <Card
                    variant="elevated"
                    title="Portföy Web Sitesi"
                    image="https://picsum.photos/seed/portfolio/400/250"
                    imageAlt="Portföy sitesi ekran görüntüsü"
                    footer={<Button size="sm" variant="ghost">Detay Gör</Button>}
                  >
                    Tailwind CSS ile geliştirilmiş kişisel portföy sayfası (bu sayfa!).
                  </Card>
                </div>
              </div>
            </section>

            {/* === İLETİŞİM === */}
            <section id="iletisim" className="py-16 px-4">
              <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900
                  dark:text-white mb-8">
                  İletişim
                </h2>
                <form className="space-y-4" action="#" method="POST" noValidate>
                  <Input id="name" label="Ad Soyad" placeholder="Ahmet Yılmaz" required />
                  <Input
                    id="email"
                    label="E-posta"
                    type="email"
                    placeholder="ornek@mail.com"
                    helpText="E-posta adresiniz yalnızca iletişim için kullanılır."
                    required
                  />
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-3 py-2 rounded-lg border border-gray-300
                        focus:ring-2 focus:ring-blue-500 focus:outline-none
                        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
                        placeholder:text-gray-400 dark:placeholder:text-gray-500
                        transition-colors"
                    />
                  </div>
                  <Button variant="primary" size="lg" type="submit">
                    Gönder
                  </Button>
                </form>
              </div>
            </section>

          </main>
        )}

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200
          dark:border-gray-700 text-center py-6 px-4
          text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; 2026 Halit Acet. Tüm hakları saklıdır.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;