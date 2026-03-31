import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';

export default function UIKit() {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">

            <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    🎨 UI Kit
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Tüm component varyantlarını tek sayfada görüntüle
                </p>
            </div>

            {/* ===== BUTTONS ===== */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
          border-b border-gray-200 dark:border-gray-700 pb-2">
                    Buttons
                </h2>

                {/* Varyant 1: Renk Varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Renk Varyantları
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                </div>

                {/* Varyant 2: Boyut Varyantları */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Boyut Varyantları
                    </p>
                    <div className="flex flex-wrap items-end gap-3">
                        <Button variant="primary" size="sm">Small</Button>
                        <Button variant="primary" size="md">Medium</Button>
                        <Button variant="primary" size="lg">Large</Button>
                    </div>
                </div>

                {/* Disabled */}
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                        Disabled Durumu
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" disabled>Primary Disabled</Button>
                        <Button variant="secondary" disabled>Secondary Disabled</Button>
                        <Button variant="danger" disabled>Danger Disabled</Button>
                    </div>
                </div>
            </section>

            {/* ===== INPUTS ===== */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
          border-b border-gray-200 dark:border-gray-700 pb-2">
                    Inputs
                </h2>

                {/* Varyant 3: Normal Input */}
                <Input
                    id="ui-normal"
                    label="Normal Input"
                    placeholder="Bir şey yazın..."
                />

                {/* Varyant 4: Hatalı Input */}
                <Input
                    id="ui-error"
                    label="Hatalı Input"
                    placeholder="Hatalı değer"
                    error="Bu alan zorunludur"
                />

                {/* Varyant 5: Help Text */}
                <Input
                    id="ui-help"
                    label="Help Text Input"
                    type="email"
                    placeholder="ornek@mail.com"
                    helpText="Geçerli bir e-posta adresi girin"
                />

                {/* Varyant 6: Disabled */}
                <Input
                    id="ui-disabled"
                    label="Disabled Input"
                    disabled
                    value="Düzenlenemez"
                    onChange={() => { }}
                />
            </section>

            {/* ===== CARDS ===== */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
          border-b border-gray-200 dark:border-gray-700 pb-2">
                    Cards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Varyant 7: Elevated */}
                    <Card
                        variant="elevated"
                        title="Elevated Card"
                        image="https://picsum.photos/seed/card1/400/250"
                        imageAlt="Örnek görsel"
                        footer={<Button size="sm" variant="primary">Detay</Button>}
                    >
                        Gölge ile yükseltilmiş kart. Hover'da daha derin gölge oluşur.
                    </Card>

                    {/* Varyant 8: Outlined */}
                    <Card
                        variant="outlined"
                        title="Outlined Card"
                        footer={<Button size="sm" variant="secondary">İncele</Button>}
                    >
                        Çerçeveli kart. Daha sade bir görünüm sunar, gölge yoktur.
                    </Card>

                    {/* Filled */}
                    <Card
                        variant="filled"
                        title="Filled Card"
                        footer={<Button size="sm" variant="ghost">Görüntüle</Button>}
                    >
                        Dolgulu arka plan. Bölüm ayırıcı olarak kullanılır.
                    </Card>

                </div>
            </section>

            {/* ===== ALERTS ===== */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
          border-b border-gray-200 dark:border-gray-700 pb-2">
                    Alerts
                </h2>

                <Alert variant="info" title="Bilgi">
                    Formunuz başarıyla kaydedildi. Değişiklikler yayınlanıyor.
                </Alert>

                <Alert variant="success" title="Başarılı">
                    İşlem tamamlandı! Profiliniz güncellendi.
                </Alert>

                <Alert variant="warning" title="Uyarı">
                    Oturum 5 dakika sonra sona erecek. Çalışmanızı kaydedin.
                </Alert>

                {showAlert ? (
                    <Alert
                        variant="error"
                        title="Hata"
                        dismissible
                        onDismiss={() => setShowAlert(false)}
                    >
                        Bağlantı kurulamadı. Lütfen tekrar deneyin.
                    </Alert>
                ) : (
                    <div className="text-sm text-gray-400 dark:text-gray-500 italic">
                        Hata alert'i kapatıldı.{' '}
                        <button
                            className="underline hover:text-gray-600 dark:hover:text-gray-300"
                            onClick={() => setShowAlert(true)}
                        >
                            Tekrar göster
                        </button>
                    </div>
                )}
            </section>

            {/* ===== RESPONSIVE DEMO ===== */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100
          border-b border-gray-200 dark:border-gray-700 pb-2">
                    Responsive Layout Demo
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ekran boyutunu küçült: Mobil → 1 sütun, Tablet → 2 sütun, Desktop → 4 sütun
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['slate', 'blue', 'violet', 'emerald'].map((color, i) => (
                        <div
                            key={color}
                            className={`rounded-lg p-6 text-center font-semibold text-white
                ${i === 0 ? 'bg-slate-600' : ''}
                ${i === 1 ? 'bg-blue-600' : ''}
                ${i === 2 ? 'bg-violet-600' : ''}
                ${i === 3 ? 'bg-emerald-600' : ''}
              `}
                        >
                            {color}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
