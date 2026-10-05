import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/ui/SearchBar';
import CategoryFilter from '../components/ui/CategoryFilter';
import ProductGrid from '../components/product/ProductGrid';
import ReviewsSection from '../components/ui/ReviewsSection';
import ContactSection from '../components/ui/ContactSection';
import { searchProducts, getCategories, getAllProducts } from '../api/productService';
import { CATEGORIES } from '../data/products';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || CATEGORIES.ALL;
  const initialQuery    = searchParams.get('q') || '';

  const [query, setQuery]               = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [categories, setCategories]     = useState([]);
  const [products, setProducts]         = useState([]);
  const [totalCount, setTotalCount]     = useState(0);

  // Load categories + total count once
  useEffect(() => {
    getCategories().then(setCategories);
    getAllProducts().then((all) => setTotalCount(all.length));
  }, []);

  const fetchProducts = useCallback(async () => {
    const results = await searchProducts(query, activeCategory);
    setProducts(results);

    const params = {};
    if (query) params.q = query;
    if (activeCategory !== CATEGORIES.ALL) params.category = activeCategory;
    setSearchParams(params, { replace: true });
  }, [query, activeCategory, setSearchParams]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="home-hero" aria-label="Product catalog search">
        <div className="container home-hero__inner">

          <div className="home-hero__eyebrow">
            <span>🍳</span> Premium Kitchen Essentials
          </div>

          <h1 className="home-hero__title">
            The Best Kitchen Ware<br />
            for <span>Every Home</span>
          </h1>

          <p className="home-hero__subtitle">
            Browse our curated collection of cookware, cutlery, and kitchen
            essentials. Enquire directly via WhatsApp — no account needed.
          </p>

          <div className="home-hero__search-row">
            <SearchBar value={query} onChange={setQuery} />
          </div>

          {/* Stats */}
          <div className="home-hero__stats">
            <div>
              <div className="home-hero__stat-value">
                {totalCount}<span>+</span>
              </div>
              <div className="home-hero__stat-label">Products</div>
            </div>
            <div>
              <div className="home-hero__stat-value">
                {Object.keys(CATEGORIES).length - 1}<span>+</span>
              </div>
              <div className="home-hero__stat-label">Categories</div>
            </div>
            <div>
              <div className="home-hero__stat-value">
                <span>₹</span>
              </div>
              <div className="home-hero__stat-label">WhatsApp Enquiry</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catalog ── */}
      <section className="home-catalog" aria-label="Product listing">
        <div className="container">

          <div className="home-catalog__header">
            <h2 className="home-catalog__title">
              Our <span>Products</span>
            </h2>
          </div>

          <div className="home-catalog__toolbar">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
            <p className="home-catalog__count" aria-live="polite">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <ProductGrid products={products} query={query} />
        </div>
      </section>

      {/* ── Reviews ── */}
      <ReviewsSection />

      {/* ── Store Contact & Location ── */}
      <ContactSection />
    </main>
  );
}
