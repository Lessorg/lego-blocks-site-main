# БЛОКБАЗА — сайт-визитка «Лего бетонные блоки»

Лендинг на React 19 + Vite + Tailwind CSS 4, с анимациями Framer Motion,
галереей с лайтбоксом и полностью адаптивной вёрсткой.

## Стек

- React 19, Vite
- Tailwind CSS 4 (через `@tailwindcss/vite`, конфиг — в `src/index.css`)
- Framer Motion — анимации появления, ховеры, счётчики
- React Icons (`lucide` + `fa6` наборы)
- `yet-another-react-lightbox` — полноэкранный просмотр галереи

## Запуск локально

```bash
npm install
npm run dev
```

Откроется на `http://localhost:5173`.

## Сборка

```bash
npm run build
npm run preview   # локально проверить продакшен-сборку
```

## Структура

```
src/
├── components/      # секции страницы (Navbar, Hero, About, Products, ...)
├── ui/               # переиспользуемые элементы (DuotonePhoto, BlockMark, Container, SectionTag)
├── data/             # контент продукции, галереи, преимуществ, статистики
├── hooks/            # useCountUp — анимация чисел в блоке статистики
└── index.css         # дизайн-токены Tailwind v4 (@theme) и базовые стили
```

## Что нужно заменить перед публикацией

- **Фото** — сейчас на месте фотографий стоит фирменная дуотон-обработка
  (графит → жёлтый + полутоновая зернистость) поверх случайных фото с
  picsum.photos по сиду (`seed` в `src/ui/DuotonePhoto.jsx`). Замените
  `seed` на путь к реальному фото — обработка останется прежней и сразу
  свяжет все фотографии в единый стиль.
- **Контакты** — телефон, почта, адрес и ссылки на соцсети в
  `src/components/Contacts.jsx` и `src/components/Navbar.jsx`.
- **Карта** — координаты/город в `src/components/Contacts.jsx` (iframe Google Maps).
- **Товары и характеристики** — `src/data/products.js`.
- **Цифры статистики** — `src/data/gallery.js` (`stats`).

## Деплой

**Vercel**
```bash
npm i -g vercel
vercel
```
Настройки определятся автоматически (Vite preset).

**Netlify**
```bash
npm run build
```
Затем перетащите папку `dist/` на app.netlify.com/drop, либо подключите
репозиторий с командой сборки `npm run build` и публикуемой папкой `dist`.
