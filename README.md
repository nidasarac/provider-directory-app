# provider-directory-app

Kullanıcıların sağlık profesyonellerini listeleyebildiği, arayabildiği, filtreleyebildiği ve detaylarını görüntüleyebildiği React Native uygulaması.

## Özellikler

- Sağlayıcı listeleme ekranı
- İsim, kategori, şehir, ülke veya biyografi alanlarına göre arama
- Ülke, şehir ve kategoriye göre filtreleme
- Sağlayıcı detay ekranı
- Yüklenme (loading) durumu simülasyonu
- Boş sonuç (empty state) yönetimi
- Tekrar deneme (retry) aksiyonu
- Yeniden kullanılabilir filtre bileşeni
- TypeScript desteği

## Proje Yapısı

text src/ ├── components/ │   └── FilterComponent.tsx ├── data/ │   └── providerData.ts ├── screens/ │   ├── ProviderList.tsx │   ├── Filter.tsx │   └── ProviderDetail.tsx └── types.ts 

## Teknik Tercihler

### Mock Veri Kullanımı

Sağlayıcı verileri providerData.ts dosyasında yerel olarak tutulmuştur. Bu sayede uygulamanın odak noktası kullanıcı arayüzü, arama ve filtreleme deneyimi olmuştur.

### Yeniden Kullanılabilir Bileşenler

Filtreleme formu, bakım kolaylığı sağlamak ve farklı ekranlarda tekrar kullanılabilmesine imkân vermek amacıyla FilterComponent olarak ayrı bir bileşen şeklinde geliştirilmiştir.

### State Yönetimi

Proje kapsamı göz önünde bulundurularak global state yönetim kütüphaneleri yerine React'ın kendi state yönetimi yapıları (useState ve useEffect) kullanılmıştır.

### Kullanıcı Deneyimi

Uygulama içerisinde aşağıdaki senaryolar ele alınmıştır:

- Filtre uygulanırken yüklenme durumu gösterimi
- Sonuç bulunamadığında boş durum ekranı
- Arama ve filtreleri hızlıca temizleme seçeneği
- Eksik veya boş veri durumları için temel null kontrolü

## Kurulum

bash npm install 

## Projeyi Çalıştırma

bash npx expo start 

## Uygulama Önizleme

[<video_link>](https://github.com/user-attachments/assets/0d2233c8-d678-4377-895e-addba143ffbc)

## Kullanılan Teknolojiler

- React Native
- Expo
- TypeScript
- React Navigation
