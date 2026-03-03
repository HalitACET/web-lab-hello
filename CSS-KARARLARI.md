# CSS Kararları

## 1. Breakpoint Seçimi
Projemde 640px (tablet) ve 1024px (masaüstü) kırılım noktalarını seçtim. 
Bu noktaları içeriğin dikey yığından yatay düzene geçmesi gereken en uygun yerler olduğu için belirledim.

## 2. Layout Tercihleri
* **Header:** Elemanları tek bir eksen (yatay) boyunca kolayca hizalamak ve mobilde dikey yığına çevirmek için **Flexbox** kullandım.  
* **Proje Kartları:** İki boyutlu (satır ve sütun) bir ızgara yapısı oluşturmak için **Grid** tercih ettim.  
  `repeat(auto-fit, minmax(280px, 1fr))` kullanarak media query yazmadan otomatik responsive bir yapı kurdum.

## 3. Design Tokens ve Fluid Typography
Renk ve boşlukları `:root` içinde değişken olarak tanımlayarak tutarlılık sağladım.  
Yazı boyutları için `clamp()` fonksiyonunu kullanarak, metinlerin ekran genişliğine göre akıcı bir şekilde ölçeklenmesini (Fluid Typography) sağladım.

## 4. Responsive Stratejiler
Tamamen **Mobile-First** yaklaşımını uyguladım; yani önce en küçük ekran için kod yazıp `min-width` query'leri ile geniş ekranlara doğru genişlettim.