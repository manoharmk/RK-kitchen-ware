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
      </div>
    </header>
  );
}
