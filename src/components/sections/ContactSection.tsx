import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900
          dark:text-white mb-2">
          İletişim
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Benimle iletişime geçmek için aşağıdaki formu doldurun.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
