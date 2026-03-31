export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200
      dark:border-gray-700 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto">
        <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Halit Acet</p>
        <p className="mb-4">Frontend Developer · React & TypeScript</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="#hero"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Ana Sayfa
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projeler
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            İletişim
          </a>
        </div>
        <p>&copy; {currentYear} Halit Acet. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
