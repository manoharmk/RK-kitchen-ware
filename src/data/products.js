/**
 * products.js — RK Kitchen Ware product catalog (V1)
 *
 * To add / edit products, update this array.
 * Images live in /public/images/ — reference as '/images/filename.jpg'
 * Set image: null if a product has no photo yet.
 *
 * When the Spring Boot API is ready, retire this file and update
 * src/api/productService.js only — no other files change.
 */

export const CATEGORIES = {
  ALL: 'All',
  COOKWARE: 'Cookware',
  CUTLERY: 'Cutlery',
  TOOLS: 'Kitchen Tools',
  STORAGE: 'Storage',
  SERVEWARE: 'Serveware',
};

const products = [
  /* ── COOKWARE ─────────────────────────────────────────── */
  {
    id: 'RKW-001',
    name: 'Stainless Steel Cookware Set (7-Piece)',
    category: CATEGORIES.COOKWARE,
    price: 3499,
    image: '/images/cookware_set.jpg',
    description:
      'A complete 7-piece stainless steel cookware set including saucepans, frying pans, and a stockpot. Tri-ply construction for even heat distribution. Dishwasher safe and compatible with all hob types including induction.',
  },
  {
    id: 'RKW-002',
    name: 'Non-Stick Frying Pan — 24 cm',
    category: CATEGORIES.COOKWARE,
    price: 899,
    image: '/images/frying_pan.jpg',
    description:
      'Heavy-gauge non-stick frying pan with a natural wood-effect handle. PFOA-free granite coating ensures effortless cooking and easy cleanup. Ideal for eggs, pancakes, sautéed vegetables and more.',
  },
  {
    id: 'RKW-003',
    name: 'Stainless Steel Pressure Cooker — 8 Litre',
    category: CATEGORIES.COOKWARE,
    price: 2199,
    image: '/images/pressure_cooker.jpg',
    description:
      'Heavy-duty 8-litre stainless steel pressure cooker with double-safety valve and Braun locking mechanism. Suitable for large families and commercial kitchens. Works on gas, ceramic, and induction hobs.',
  },
  {
    id: 'RKW-004',
    name: 'Cast Iron Kadai — 26 cm',
    category: CATEGORIES.COOKWARE,
    price: 1299,
    image: '/images/kadai_wok.jpg',
    description:
      'Pre-seasoned cast iron kadai ideal for deep frying, curries, and stir-frying. Retains heat exceptionally well for authentic slow-cooked flavours. Gets better with every use.',
  },
  {
    id: 'RKW-005',
    name: 'Stainless Steel Casserole Dish — 3 Litre',
    category: CATEGORIES.COOKWARE,
    price: 1099,
    image: '/images/casserole_dish.jpg',
    description:
      'Multi-purpose 3-litre stainless steel casserole with a tempered glass lid and two ergonomic handles. Built-in measurement markings for precise cooking. Suitable for all hob types.',
  },
  {
    id: 'RKW-006',
    name: 'Non-Stick Frying Pan — 28 cm',
    category: CATEGORIES.COOKWARE,
    price: 1199,
    image: '/images/frying_pan.jpg',
    description:
      'Larger 28 cm variant of our best-selling non-stick frying pan. Perfect for family-sized meals. PFOA-free granite coating with a heat-resistant wood-effect handle. Oven safe up to 180°C.',
  },
  {
    id: 'RKW-007',
    name: 'Stainless Steel Pressure Cooker — 5 Litre',
    category: CATEGORIES.COOKWARE,
    price: 1599,
    image: '/images/pressure_cooker.jpg',
    description:
      'Compact 5-litre stainless steel pressure cooker perfect for everyday family cooking. Features a safety valve, gasket release system, and stay-cool handles. Induction and gas compatible.',
  },
  {
    id: 'RKW-008',
    name: 'Cast Iron Tadka Pan',
    category: CATEGORIES.COOKWARE,
    price: 599,
    image: '/images/kadai_wok.jpg',
    description:
      'Small pre-seasoned cast iron tadka (tempering) pan for heating oil and tempering spices. Essential for authentic Indian cooking. Compact, durable, and easy to season.',
  },

  /* ── CUTLERY ──────────────────────────────────────────── */
  {
    id: 'RKW-009',
    name: 'Premium Knife Set — 5 Piece',
    category: CATEGORIES.CUTLERY,
    price: 1799,
    image: '/images/knife_set.jpg',
    description:
      'High-carbon stainless steel 5-piece knife set including a chef\'s knife, paring knife, nakiri, santoku, and utility knife. Full-tang construction with triple-riveted handles for balance and control.',
  },
  {
    id: 'RKW-010',
    name: 'Cooking Spatula & Ladle Set — 8 Piece',
    category: CATEGORIES.CUTLERY,
    price: 799,
    image: '/images/spatula_set.jpg',
    description:
      'Professional 8-piece stainless steel kitchen utensil set including slotted spatulas, ladles, a skimmer, and a serving spoon. Ergonomic loop handles for hanging storage. Dishwasher safe.',
  },

  /* ── KITCHEN TOOLS ────────────────────────────────────── */
  {
    id: 'RKW-011',
    name: 'Stainless Steel Mixing Bowls — Set of 3',
    category: CATEGORIES.TOOLS,
    price: 699,
    image: '/images/mixing_bowls.jpg',
    description:
      'Nested set of 3 polished stainless steel mixing bowls (1L, 2.5L, 4L). Mirror-finish interior for easy cleaning. Rolled rim prevents spills. Ideal for mixing, marinating, and serving.',
  },
  {
    id: 'RKW-012',
    name: 'Wooden Rolling Pin & Chakla Board Set',
    category: CATEGORIES.TOOLS,
    price: 349,
    image: '/images/rolling_pin.jpg',
    description:
      'Handcrafted solid wood belan (rolling pin) and round chakla board for making roti, chapati, and paratha. Smooth surface for even rolling. Lightweight and easy to clean.',
  },
  {
    id: 'RKW-013',
    name: 'Stainless Steel 4-Sided Box Grater',
    category: CATEGORIES.TOOLS,
    price: 399,
    image: '/images/grater_box.jpg',
    description:
      'Versatile 4-sided box grater with coarse, medium, fine, and slicing blades. Non-slip rubber base keeps it stable during use. Ergonomic soft-grip handle. Dishwasher safe.',
  },
  {
    id: 'RKW-014',
    name: 'Stainless Steel Colander — 3 Litre',
    category: CATEGORIES.TOOLS,
    price: 599,
    image: '/images/colander_strainer.jpg',
    description:
      'Large 3-litre stainless steel colander with a sturdy footed base and dual handles. Fine micro-perforations strain pasta, vegetables, and pulses perfectly. Rust-proof and dishwasher safe.',
  },
  {
    id: 'RKW-015',
    name: 'Stainless Steel Serving Bowl Set — Set of 3',
    category: CATEGORIES.TOOLS,
    price: 499,
    image: '/images/mixing_bowls.jpg',
    description:
      'Set of 3 mirror-finish stainless steel serving bowls in nested sizes. Great for serving dal, sabzi, and desserts at the table. Stackable for compact storage. Food-safe and dishwasher safe.',
  },

  /* ── STORAGE ──────────────────────────────────────────── */
  {
    id: 'RKW-016',
    name: 'Stainless Steel 3-Tier Tiffin Box',
    category: CATEGORIES.STORAGE,
    price: 549,
    image: '/images/steel_tiffin.jpg',
    description:
      'Classic 3-tier stainless steel tiffin lunch box with wire-clip locking mechanism and a carry handle. Each tier is leakproof and dishwasher safe. Perfect for home, office, and school use.',
  },
  {
    id: 'RKW-017',
    name: 'Stainless Steel 4-Tier Tiffin Box',
    category: CATEGORIES.STORAGE,
    price: 699,
    image: '/images/steel_tiffin.jpg',
    description:
      'Larger 4-tier stainless steel tiffin for those who need extra capacity. Secure wire-clip closure prevents leaks. Includes an insulated carry bag. Suitable for all ages.',
  },

  /* ── SERVEWARE ────────────────────────────────────────── */
  {
    id: 'RKW-018',
    name: 'Stainless Steel Glass Set — 6 Piece',
    category: CATEGORIES.SERVEWARE,
    price: 449,
    image: '/images/steel_glass_set.jpg',
    description:
      'Set of 6 polished stainless steel drinking glasses (300 ml each). Double-wall insulation keeps beverages cool. Shatterproof, rustproof, and ideal for everyday use or outdoor entertaining.',
  },
  {
    id: 'RKW-019',
    name: 'Stainless Steel Tumbler Set — 6 Piece',
    category: CATEGORIES.SERVEWARE,
    price: 549,
    image: '/images/steel_glass_set.jpg',
    description:
      'Elegant set of 6 tall stainless steel tumblers (400 ml). Mirror-polished exterior with a food-grade interior. BPA-free, dishwasher safe, and perfect for water, juice, or lassi.',
  },
  {
    id: 'RKW-020',
    name: 'Stainless Steel Serving Spoon & Ladle Set',
    category: CATEGORIES.SERVEWARE,
    price: 599,
    image: '/images/spatula_set.jpg',
    description:
      'Set of 4 large stainless steel serving spoons and ladles for the dining table. Long handles keep hands away from hot dishes. Smooth finish, dishwasher safe, and rust-resistant.',
  },
];

export default products;
