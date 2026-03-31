import profileImg from "../../assets/profile.jfif";

export default function About() {
  return (
    <section id="about" className="py-16 px-4">
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
            oluşturmayı seviyorum. React, TypeScript ve Tailwind CSS ile
            kullanıcı dostu uygulamalar geliştiriyorum.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Açık kaynak projelere katkıda bulunmaktan ve yeni teknolojileri
            öğrenmekten keyif alıyorum. Tiyatro kulübünün aktif bir üyesiyim.
          </p>
        </div>
      </div>
    </section>
  );
}
