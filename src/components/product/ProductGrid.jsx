import ProductCard from './ProductCard';

/**
 * ProductGrid — renders the product grid or an empty state.
 * Props:
 *   products {Array}   list of product objects
 *   query    {string}  current search query (for the empty state message)
 */
export default function ProductGrid({ products, query }) {
  if (products.length === 0) {
    return (
      <div className="product-grid">
        <div className="empty-state">
          <div className="empty-state__icon" aria-hidden="true">🔍</div>
          <h2 className="empty-state__title">No products found</h2>
          <p className="empty-state__desc">
            {query
              ? `No results for "${query}". Try a different search term.`
              : 'No products in this category yet.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid" role="list" aria-label="Product catalog">
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
