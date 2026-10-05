/**
 * SearchBar — controlled input component.
 * Props:
 *   value    {string}   current search query
 *   onChange {function} called with the new query string
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar" role="search">
      {/* Search icon */}
      <svg
        className="search-bar__icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        id="product-search"
        type="search"
        className="search-bar__input"
        placeholder="Search products, product ID…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        aria-label="Search products"
      />

      {/* Clear button */}
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
}
