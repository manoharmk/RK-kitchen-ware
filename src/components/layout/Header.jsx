import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="RK Kitchen Ware — Home">
          <img
            src="/logo.jpg"
            alt="RK Kitchenware Logo"
            className="header__logo-img"
          />
        </Link>
        <nav className="header__nav" aria-label="Main navigation">
          <a href="/#contact-us" className="header__nav-link">
            <span className="header__nav-pin">📍</span> Visit Store &amp; Contact
          </a>
          <a
            href="tel:917619644958"
            className="header__nav-btn"
            aria-label="Call RK Kitchen Ware"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+91 76196 44958</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
