# RK Kitchen Ware — Complete Project Reference Guide
> **Purpose:** This document explains every file in the project, the design system, and exactly how to make common future changes. Keep this as your go-to reference.

---

## 1. Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | 19 | UI framework |
| **Vite** | 8 | Dev server & bundler |
| **React Router DOM** | 7 | Page routing (URL navigation) |
| **Vanilla CSS** | — | All styling (no Tailwind, no Bootstrap) |
| **Google Fonts** | Outfit | Typography |

**Run the project:**
```bash
npm run dev        # starts at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

---

## 2. Folder Structure

```
RK Kitchen Ware/
├── public/                        # Static files (served as-is)
│   ├── logo.jpg                   ← Shop logo image
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/                   ← All product images
│       ├── cookware_set.jpg
│       ├── frying_pan.jpg
│       ├── pressure_cooker.jpg
│       ├── kadai_wok.jpg
│       ├── casserole_dish.jpg
│       ├── knife_set.jpg
│       ├── spatula_set.jpg
│       ├── mixing_bowls.jpg
│       ├── rolling_pin.jpg
│       ├── grater_box.jpg
│       ├── colander_strainer.jpg
│       ├── steel_tiffin.jpg
│       └── steel_glass_set.jpg
│
├── src/
│   ├── main.jsx                   ← App entry point
│   ├── App.jsx                    ← Root component (router + layout)
│   │
│   ├── data/
│   │   └── products.js            ← ALL product data lives here ✏️
│   │
│   ├── api/
│   │   └── productService.js      ← Data access layer (search, filter)
│   │
│   ├── pages/
│   │   ├── HomePage.jsx           ← Main catalog page (/)
│   │   └── ProductDetailPage.jsx  ← Single product page (/product/:id)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         ← Top navigation bar with logo
│   │   │   └── Footer.jsx         ← Bottom footer with links
│   │   ├── product/
│   │   │   ├── ProductCard.jsx    ← Individual product tile
│   │   │   ├── ProductGrid.jsx    ← Grid of product cards
│   │   │   └── WhatsAppButton.jsx ← WhatsApp enquiry button
│   │   └── ui/
│   │       ├── SearchBar.jsx      ← Search input component
│   │       └── CategoryFilter.jsx ← Category pill buttons
│   │
│   └── styles/
│       └── index.css              ← ALL CSS (design system + components)
│
├── index.html                     ← HTML shell
├── vite.config.js                 ← Vite configuration
└── package.json                   ← Dependencies & scripts
```

---

## 3. How Pages & Routing Work

The app has **2 pages** only:

| URL | Page | File |
|-----|------|------|
| `/` | Homepage — product catalog with search & filter | `src/pages/HomePage.jsx` |
| `/product/RKW-001` | Product detail for any product ID | `src/pages/ProductDetailPage.jsx` |

**Routing is set up in** `src/App.jsx`:
```jsx
<BrowserRouter>
  <Header />           {/* shown on every page */}
  <Routes>
    <Route path="/"             element={<HomePage />} />
    <Route path="/product/:id"  element={<ProductDetailPage />} />
  </Routes>
  <Footer />           {/* shown on every page */}
  <ScrollToTopButton /> {/* floating ↑ button */}
</BrowserRouter>
```

---

## 4. Product Data — The Most Important File

**File:** `src/data/products.js`

This is where ALL product information lives. To add, edit, or remove products — **only edit this file**.

### Product Object Shape

```js
{
  id: 'RKW-001',              // Unique product ID (used in the URL too)
  name: 'Product Name',       // Display name
  category: CATEGORIES.COOKWARE, // Must match a CATEGORIES value
  price: 3499,                // Price in ₹ (rupees). Set 0 for "Price on request"
  image: '/images/filename.jpg', // Path from /public/images/ — set null if no image
  description: 'Full product description text shown on detail page.',
}
```

### Available Categories

```js
export const CATEGORIES = {
  ALL:       'All',           // used for "show everything" filter
  COOKWARE:  'Cookware',
  CUTLERY:   'Cutlery',
  TOOLS:     'Kitchen Tools',
  STORAGE:   'Storage',
  SERVEWARE: 'Serveware',
};
```

### Current Products (20 total)

| ID | Name | Category | Price |
|----|------|----------|-------|
| RKW-001 | Stainless Steel Cookware Set (7-Piece) | Cookware | ₹3,499 |
| RKW-002 | Non-Stick Frying Pan — 24 cm | Cookware | ₹899 |
| RKW-003 | Stainless Steel Pressure Cooker — 8 Litre | Cookware | ₹2,199 |
| RKW-004 | Cast Iron Kadai — 26 cm | Cookware | ₹1,299 |
| RKW-005 | Stainless Steel Casserole Dish — 3 Litre | Cookware | ₹1,099 |
| RKW-006 | Non-Stick Frying Pan — 28 cm | Cookware | ₹1,199 |
| RKW-007 | Stainless Steel Pressure Cooker — 5 Litre | Cookware | ₹1,599 |
| RKW-008 | Cast Iron Tadka Pan | Cookware | ₹599 |
| RKW-009 | Premium Knife Set — 5 Piece | Cutlery | ₹1,799 |
| RKW-010 | Cooking Spatula & Ladle Set — 8 Piece | Cutlery | ₹799 |
| RKW-011 | Stainless Steel Mixing Bowls — Set of 3 | Kitchen Tools | ₹699 |
| RKW-012 | Wooden Rolling Pin & Chakla Board Set | Kitchen Tools | ₹349 |
| RKW-013 | Stainless Steel 4-Sided Box Grater | Kitchen Tools | ₹399 |
| RKW-014 | Stainless Steel Colander — 3 Litre | Kitchen Tools | ₹599 |
| RKW-015 | Stainless Steel Serving Bowl Set — Set of 3 | Kitchen Tools | ₹499 |
| RKW-016 | Stainless Steel 3-Tier Tiffin Box | Storage | ₹549 |
| RKW-017 | Stainless Steel 4-Tier Tiffin Box | Storage | ₹699 |
| RKW-018 | Stainless Steel Glass Set — 6 Piece | Serveware | ₹449 |
| RKW-019 | Stainless Steel Tumbler Set — 6 Piece | Serveware | ₹549 |
| RKW-020 | Stainless Steel Serving Spoon & Ladle Set | Serveware | ₹599 |

---

## 5. Design System — CSS Tokens

All colors, sizes, and spacing are defined as **CSS custom properties** at the top of `src/styles/index.css`. Change a token here and it updates everywhere automatically.

### Color Tokens

```css
/* Brand Colors */
--clr-primary:        hsl(22, 88%, 48%)   /* Orange — main brand color */
--clr-primary-dark:   hsl(22, 88%, 36%)   /* Darker orange (hover states) */
--clr-primary-light:  hsl(22, 88%, 95%)   /* Very light orange (backgrounds) */
--clr-primary-glow:   hsla(22,88%,48%,0.18) /* Orange glow (box-shadow) */
--clr-accent:         hsl(197, 80%, 42%)  /* Blue accent */
--clr-gold:           hsl(42, 90%, 52%)   /* Gold highlight */

/* Backgrounds & Surfaces */
--clr-bg:             hsl(36, 22%, 96%)   /* Page background (warm off-white) */
--clr-surface:        hsl(0, 0%, 100%)    /* Card / component background */
--clr-surface-2:      hsl(36, 18%, 93%)   /* Secondary surface */
--clr-border:         hsl(36, 16%, 87%)   /* Border color */

/* Text */
--clr-text:           hsl(220, 18%, 13%)  /* Primary text (near black) */
--clr-text-muted:     hsl(220, 10%, 46%)  /* Secondary/subdued text */
--clr-text-light:     hsl(220, 10%, 64%)  /* Lightest text (captions) */

/* WhatsApp Button */
--clr-whatsapp:       hsl(142, 70%, 37%)  /* WhatsApp green */
--clr-whatsapp-dark:  hsl(142, 70%, 28%)  /* WhatsApp hover */
--clr-whatsapp-glow:  hsla(142,70%,37%,0.28)
```

### Spacing Tokens

```css
--space-xs:  4px
--space-sm:  8px
--space-md:  16px
--space-lg:  24px
--space-xl:  40px
--space-2xl: 72px
```

### Typography Tokens

```css
--font-base: 'Outfit', system-ui, sans-serif  /* Google Font */
--text-xs:   0.72rem
--text-sm:   0.875rem
--text-md:   1rem
--text-lg:   1.125rem
--text-xl:   1.375rem
--text-2xl:  1.75rem
--text-3xl:  2.35rem
--text-4xl:  3rem
```

### Border Radius Tokens

```css
--radius-sm:  8px
--radius-md:  14px
--radius-lg:  20px
--radius-xl:  28px
--radius-2xl: 40px
```

### Shadow Tokens

```css
--shadow-sm:         /* subtle lift */
--shadow-md:         /* moderate depth */
--shadow-lg:         /* strong depth */
--shadow-card:       /* default card shadow */
--shadow-card-hover: /* card hover glow (orange-tinted) */
```

### Transition Tokens

```css
--transition-fast: 140ms ease
--transition-base: 240ms ease
--transition-slow: 360ms cubic-bezier(0.34, 1.56, 0.64, 1)  /* bouncy */
```

---

## 6. Component Reference

### `Header.jsx`
- **Location:** `src/components/layout/Header.jsx`
- **What it does:** Sticky top bar showing the shop logo. Clicking it goes to `/`.
- **Logo:** Uses `<img src="/logo.jpg">` from the `public/` folder.
- **CSS class:** `.header`, `.header__inner`, `.header__logo`, `.header__logo-img`
- **To change logo:** Replace `public/logo.jpg` with the new image file.

---

### `Footer.jsx`
- **Location:** `src/components/layout/Footer.jsx`
- **What it does:** Dark bottom bar with brand name, catalog quick-links, and enquiry info.
- **WhatsApp:** Currently says to use the WhatsApp button on each product page.
- **CSS class:** `.footer`, `.footer__grid`, `.footer__brand-name`, `.footer__links`

---

### `HomePage.jsx`
- **Location:** `src/pages/HomePage.jsx`
- **What it does:** The main `/` page. Contains:
  - **Hero section** — big title, subtitle, search bar, and 3 stats (total products, categories count, WhatsApp enquiry).
  - **Catalog section** — category filter pills + product grid.
- **URL sync:** Search query and category are saved in the URL (`?q=pan&category=Cookware`) so users can share links.
- **CSS classes:** `.home-hero`, `.home-hero__title`, `.home-catalog`, `.home-catalog__toolbar`

---

### `ProductDetailPage.jsx`
- **Location:** `src/pages/ProductDetailPage.jsx`
- **What it does:** Full detail view for one product. Accessed at `/product/RKW-001`.
- **Shows:** Breadcrumb, product image, category badge, name, product ID, price, description, and WhatsApp button.
- **If product not found:** Shows a "Product Not Found" error page with a back button.
- **CSS classes:** `.detail-page`, `.detail-page__grid`, `.detail-image-wrap`, `.detail-info`

---

### `ProductCard.jsx`
- **Location:** `src/components/product/ProductCard.jsx`
- **What it does:** Single product tile in the catalog grid. Shows image, product ID, name, category, and price. Clicking goes to the detail page.
- **If no image:** Shows an "Image Coming Soon" placeholder.
- **If price is 0:** Shows "Price on request" instead of ₹0.
- **CSS classes:** `.product-card`, `.product-card__image-wrap`, `.product-card__body`, `.product-card__price`

---

### `ProductGrid.jsx`
- **Location:** `src/components/product/ProductGrid.jsx`
- **What it does:** Renders a responsive grid of `ProductCard` components.
- **If no results:** Shows an empty state with 🔍 icon and message.
- **CSS class:** `.product-grid`, `.empty-state`

---

### `WhatsAppButton.jsx`
- **Location:** `src/components/product/WhatsAppButton.jsx`
- **What it does:** Green button that opens WhatsApp with a pre-filled enquiry message including the product name, ID, and price.
- **Phone number:** `917619644958` (hardcoded at line 10 — **to change the number, edit this file**).
- **Message format:**
  ```
  Hello RK Kitchen Ware,

  I'm interested in the following product:

  Product: [Name]
  Product ID: [ID]
  Price: ₹[Price]

  Please share more details and availability.
  ```
- **CSS class:** `.whatsapp-btn`, `.whatsapp-btn__icon`

---

### `SearchBar.jsx`
- **Location:** `src/components/ui/SearchBar.jsx`
- **What it does:** Controlled search input with a magnifier icon and a ✕ clear button.
- **Searches:** Product name, product ID, and description (all case-insensitive).
- **CSS class:** `.search-bar`, `.search-bar__input`, `.search-bar__clear`

---

### `CategoryFilter.jsx`
- **Location:** `src/components/ui/CategoryFilter.jsx`
- **What it does:** Horizontal row of pill buttons for filtering by category. The active category is highlighted.
- **CSS class:** `.category-filter`, `.category-filter__btn`, `.category-filter__btn--active`

---

### `productService.js`
- **Location:** `src/api/productService.js`
- **What it does:** All data functions. Every component calls this — never reads from `products.js` directly.

| Function | What it does |
|----------|--------------|
| `getAllProducts()` | Returns all 20 products |
| `getProductById(id)` | Returns one product by ID, or `null` |
| `getProductsByCategory(category)` | Returns products in a category |
| `searchProducts(query, category)` | Searches + filters combined |
| `getCategories()` | Returns list of all category names |

> **Future:** When you connect a backend (Spring Boot API), only change this file. All pages will work automatically without changes.

---

## 7. How To Make Common Changes

### ➕ Add a New Product
1. Open `src/data/products.js`
2. Add a new object at the end of the `products` array:
```js
{
  id: 'RKW-021',                    // Next number in sequence
  name: 'Your Product Name',
  category: CATEGORIES.COOKWARE,    // Choose a category
  price: 999,                       // ₹ price, or 0 for "price on request"
  image: '/images/your_image.jpg',  // Add image to public/images/ first
  description: 'Full description...',
}
```
3. If you have a photo, copy it into `public/images/` first.

---

### ✏️ Edit a Product's Price or Description
1. Open `src/data/products.js`
2. Find the product by its ID (e.g., `RKW-003`)
3. Change the `price` or `description` value directly.

---

### ➕ Add a New Category
1. Open `src/data/products.js`
2. Add to the `CATEGORIES` object:
```js
export const CATEGORIES = {
  ...
  BAKEWARE: 'Bakeware',   // ← new category
};
```
3. Use `CATEGORIES.BAKEWARE` in your product objects.
4. The filter pill will appear automatically on the homepage.

---

### 📞 Change the WhatsApp Number
1. Open `src/components/product/WhatsAppButton.jsx`
2. Change line 10:
```js
const WHATSAPP_PHONE = '917619644958';  // format: country code + number, no +
//                       91 = India code, 7619644958 = phone
```

---

### 🖼️ Change the Shop Logo
1. Save your new logo as `logo.jpg` (or any name)
2. Copy it to the `public/` folder
3. Open `src/components/layout/Header.jsx`
4. Update the `src` attribute:
```jsx
<img src="/your-new-logo.jpg" alt="RK Kitchenware Logo" className="header__logo-img" />
```

---

### 🎨 Change the Brand Color
1. Open `src/styles/index.css`
2. Change `--clr-primary` in the `:root` block:
```css
:root {
  --clr-primary: hsl(22, 88%, 48%);  /* ← change the hue (22) to any number 0-360 */
}
```
This one change updates buttons, highlights, and accents everywhere.

---

### 📝 Change the Hero Text (Homepage Heading)
1. Open `src/pages/HomePage.jsx`
2. Find the `<h1>` tag around line 51:
```jsx
<h1 className="home-hero__title">
  The Best Kitchen Ware<br />
  for <span>Every Home</span>
</h1>
```
3. Edit the text directly.

---

### 🔗 Add a New Page
1. Create a new file in `src/pages/`, e.g. `AboutPage.jsx`
2. Open `src/App.jsx` and add a new Route:
```jsx
import AboutPage from './pages/AboutPage';

<Route path="/about" element={<AboutPage />} />
```
3. Add a link in the Footer or Header:
```jsx
<Link to="/about">About Us</Link>
```

---

### 🖼️ Add a New Product Image
1. Copy your `.jpg` or `.png` image into `public/images/`
2. Reference it in `products.js` as:
```js
image: '/images/your_filename.jpg'
```

---

## 8. CSS Architecture Overview

All CSS is in a **single file**: `src/styles/index.css` (874+ lines).

It is organized in sections in this order:
1. **Google Fonts import** (Outfit)
2. **Design tokens** (`:root` — all variables)
3. **Reset** (box-sizing, margins)
4. **Layout utilities** (`.container`)
5. **Header** (`.header`, `.header__inner`, `.header__logo`, `.header__logo-img`)
6. **Footer** (`.footer`, `.footer__grid`, `.footer__links`)
7. **Hero section** (`.home-hero`, `.home-hero__title`, `.home-hero__stats`)
8. **Catalog section** (`.home-catalog`, `.home-catalog__toolbar`)
9. **Search bar** (`.search-bar`)
10. **Category filter** (`.category-filter`)
11. **Product card** (`.product-card`, `.product-card__image-wrap`)
12. **Product grid** (`.product-grid`, `.empty-state`)
13. **Product detail page** (`.detail-page`, `.detail-info`, `.detail-image-wrap`)
14. **WhatsApp button** (`.whatsapp-btn`)
15. **Scroll-to-top button** (`.scroll-top-btn`)
16. **Not found page** (`.not-found`)

> **Rule:** When adding styles for something new, add them at the bottom or in the relevant section. Always use CSS variables from `:root` — never hardcode colors or sizes.

---

## 9. Key Design Decisions

| Decision | Reason |
|----------|--------|
| **No backend / database** | Products are in a JS file for simplicity. Easy to migrate later. |
| **`productService.js` as data layer** | All pages go through this. When a Spring Boot API is ready, only this file changes. |
| **URL-synced search & filter** | Users can bookmark or share a filtered URL (e.g., `/?category=Cookware&q=pressure`). |
| **WhatsApp as enquiry channel** | No order management, payment, or accounts needed — simplest path to customer contact. |
| **Lazy-loaded product images** | `loading="lazy"` on all product images for faster page load. |
| **Sticky header** | Always visible so users can navigate at any scroll position. |
| **Scroll-to-top button** | Appears after scrolling 300px; helps on long product lists. |

---

## 10. Future Improvements (Planned)

- [ ] Connect to Spring Boot REST API (only `productService.js` needs updating)
- [ ] Add more product categories (Bakeware, Appliances, etc.)
- [ ] Add "Contact Us" / About page
- [ ] Add product images for all items
- [ ] Add price range filter
- [ ] Add sorting (price low→high, name A→Z)
- [ ] Add social media links in footer
- [ ] Add shop address / location in footer

---

*Generated: October 2026 | RK Kitchen Ware Web App v1.0*
