/**
 * CategoryFilter — renders a pill-button row for filtering by category.
 * Props:
 *   categories       {string[]}  list of category labels
 *   activeCategory   {string}    currently selected category
 *   onSelect         {function}  called with the selected category string
 */
export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <nav className="category-filter" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          id={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
          className={`category-filter__btn ${
            activeCategory === cat ? 'category-filter__btn--active' : ''
          }`}
          onClick={() => onSelect(cat)}
          aria-pressed={activeCategory === cat}
          type="button"
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
