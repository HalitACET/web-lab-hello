import { useState, type FormEvent } from "react";

// --- Form veri modeli ---
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Form hata modeli ---
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// --- Başlangıç değerleri ---
const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- Doğrulama (Validation) ---
  function validate(data: ContactFormData): FormErrors {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Ad soyad zorunludur.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
    }

    if (!data.email.trim()) {
      newErrors.email = "E-posta zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Konu zorunludur.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Mesaj zorunludur.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
    }

    return newErrors;
  }

  // --- Tek alan güncelleme ---
  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Hata mesajını temizle
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }

  // --- Form gönderme ---
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Doğrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gönderim başarısız. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200
        dark:border-green-800 rounded-lg p-6 text-center">
        <p className="text-green-800 dark:text-green-300 font-medium text-lg mb-2">
          ✅ Mesajınız başarıyla gönderildi!
        </p>
        <p className="text-green-700 dark:text-green-400 text-sm mb-4">
          En kısa sürede size geri döneceğim.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-2 text-sm text-green-600 dark:text-green-400 underline
            hover:text-green-800 dark:hover:text-green-200 transition-colors"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg" noValidate>

      {/* Ad Soyad */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Ad Soyad
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={e => handleChange("name", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 transition-colors
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            dark:bg-gray-800 dark:text-white
            ${errors.name
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
            }`}
          placeholder="Adınız Soyadınız"
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* E-posta */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          E-posta
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={e => handleChange("email", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 transition-colors
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            dark:bg-gray-800 dark:text-white
            ${errors.email
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
            }`}
          placeholder="ornek@mail.com"
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Konu */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Konu
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={e => handleChange("subject", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 transition-colors
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            dark:bg-gray-800 dark:text-white
            ${errors.subject
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
            }`}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
          <option value="soru">Soru</option>
        </select>
        {errors.subject && (
          <p id="contact-subject-error" role="alert" className="text-red-500 text-sm mt-1">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Mesaj */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Mesaj
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={e => handleChange("message", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 resize-y transition-colors
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            dark:bg-gray-800 dark:text-white
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            ${errors.message
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
            }`}
          placeholder="Mesajınızı yazınız..."
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Gönder butonu */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium
          hover:bg-blue-700 transition-colors disabled:opacity-50
          disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
