import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/product/WhatsAppButton';
import { getProductById } from '../api/productService';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <main id="main-content" className="detail-page">
        <div className="container">
          <p style={{ color: 'var(--clr-text-muted)' }}>Loading…</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main id="main-content" className="detail-page">
        <div className="container not-found">
          <div className="not-found__icon" aria-hidden="true">🔍</div>
          <h1 className="not-found__title">Product Not Found</h1>
          <p className="not-found__desc">
            We couldn&apos;t find a product with ID &ldquo;{id}&rdquo;.
          </p>
          <Link to="/" className="whatsapp-btn" style={{ display: 'inline-flex', width: 'auto' }}>
            ← Back to Catalog
          </Link>
        </div>
      </main>
    );
  }

  const priceDisplay =
    product.price > 0
      ? `₹${product.price.toLocaleString('en-IN')}`
      : null;

  return (
    <main id="main-content" className="detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="detail-page__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Catalog</Link>
          <span className="detail-page__breadcrumb-sep" aria-hidden="true">›</span>
          <Link to={`/?category=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>
          <span className="detail-page__breadcrumb-sep" aria-hidden="true">›</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        {/* Product Layout */}
        <div className="detail-page__grid">
          {/* Image */}
          <div className="detail-image-wrap">
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div className="detail-image-placeholder" aria-hidden="true">
                <span className="detail-image-placeholder__icon">🍳</span>
                <span className="detail-image-placeholder__text">
                  Image Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="detail-info">
            <span className="detail-info__category">{product.category}</span>

            <h1 className="detail-info__name">{product.name}</h1>

            <div className="detail-info__id-row">
              <span className="detail-info__id-label">Product ID</span>
              <span className="detail-info__id-value">{product.id}</span>
            </div>

            <hr className="detail-info__divider" />

            {/* Price */}
            <div>
              <div className="detail-info__price-label">Price</div>
              {priceDisplay ? (
                <div className="detail-info__price">{priceDisplay}</div>
              ) : (
                <div className="detail-info__price detail-info__price--tbd">
                  Price on request
                </div>
              )}
            </div>

            <hr className="detail-info__divider" />

            {/* Description */}
            <div>
              <div className="detail-info__desc-label">Description</div>
              <p className="detail-info__desc">{product.description}</p>
            </div>

            {/* Actions */}
            <div className="detail-info__actions">
              <WhatsAppButton product={product} />
              <button
                type="button"
                className="detail-info__back-btn"
                onClick={() => navigate(-1)}
                aria-label="Go back to catalog"
              >
                ← Back to Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
