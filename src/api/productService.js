/**
 * productService.js
 *
 * Data access layer — all UI components fetch data through this module.
 *
 * FUTURE MIGRATION (Spring Boot):
 *   Replace every function body with a fetch() / axios call to your REST API.
 *   The function signatures (name + parameters) stay exactly the same,
 *   so no changes are needed in any page or component.
 *
 * Example future implementation:
 *   export async function getAllProducts() {
 *     const res = await fetch('https://api.rkkitchenware.com/products');
 *     return res.json();
 *   }
 */

import products, { CATEGORIES } from '../data/products';

/**
 * Returns all products.
 * @returns {Promise<Array>}
 */
export async function getAllProducts() {
  return products;
}

/**
 * Returns a single product by its ID, or null if not found.
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getProductById(id) {
  return products.find((p) => p.id === id) ?? null;
}

/**
 * Returns products filtered by category.
 * Pass CATEGORIES.ALL (or 'All') to get every product.
 * @param {string} category
 * @returns {Promise<Array>}
 */
export async function getProductsByCategory(category) {
  if (category === CATEGORIES.ALL) return products;
  return products.filter((p) => p.category === category);
}

/**
 * Searches products by name (case-insensitive substring match).
 * Optionally filtered by category at the same time.
 * @param {string} query
 * @param {string} [category]
 * @returns {Promise<Array>}
 */
export async function searchProducts(query, category) {
  let results = products;

  if (category && category !== CATEGORIES.ALL) {
    results = results.filter((p) => p.category === category);
  }

  if (query && query.trim() !== '') {
    const q = query.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  return results;
}

/**
 * Returns the list of available category values.
 * @returns {Promise<string[]>}
 */
export async function getCategories() {
  return Object.values(CATEGORIES);
}
