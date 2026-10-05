import { Link } from 'react-router-dom';

/**
 * ProductCard — displays a single product in the catalog grid.
 * Props:
 *   product {Object}  { id, name, category, price, image, description }
 */
export default function ProductCard({ product }) {
  const { id, name, category, price, image } = product;

  const priceDisplay =
    price > 0 ? (
      <span className="product-card__price">
        ₹{price.toLocaleString('en-IN')}
      </span>
    ) : (
      <span className="product-card__price product-card__price-placeholder">
        Price on request
      </span>
    );

  return (
    <article className="product-card">
      <Link
        to={`/product/${id}`}
        aria-label={`View details for ${name}`}
        style={{ display: 'contents' }}
      >
        {/* Image */}
        <div className="product-card__image-wrap">
          {image ? (
            <img
              className="product-card__image"
              src={image}
              alt={name}
              loading="lazy"
            />
          ) : (
            <div className="product-card__placeholder" aria-hidden="true">
              <span className="product-card__placeholder-icon">🍳</span>
              <span className="product-card__placeholder-label">Image Coming Soon</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="product-card__body">
          <span className="product-card__id">{id}</span>
          <h2 className="product-card__name">{name}</h2>
          <span className="product-card__category">{category}</span>

          <div className="product-card__footer">
            {priceDisplay}
          </div>
        </div>
      </Link>
    </article>
  );
}
