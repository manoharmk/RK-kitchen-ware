import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">
              <span>RK</span> Kitchen Ware
            </div>
            <p className="footer__desc">
              Your trusted source for quality cookware, utensils and kitchen
              essentials. Built for everyday Indian kitchens.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <div className="footer__heading">Catalog</div>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">All Products</Link></li>
              <li><Link to="/?category=Cookware" className="footer__link">Cookware</Link></li>
              <li><Link to="/?category=Cutlery" className="footer__link">Cutlery</Link></li>
              <li><Link to="/?category=Kitchen+Tools" className="footer__link">Kitchen Tools</Link></li>
              <li><Link to="/?category=Storage" className="footer__link">Storage</Link></li>
              <li><Link to="/?category=Serveware" className="footer__link">Serveware</Link></li>
            </ul>
          </nav>

          {/* Contact & Showroom */}
          <div className="footer__contact-col">
            <div className="footer__heading">Visit &amp; Contact</div>
            <div className="footer__address-block">
              <p className="footer__address-line">
                <strong>Showroom Address:</strong><br />
                Plot No. 32D, Sector No. 04,<br />
                Behind Bata Showroom, Sector 4,<br />
                Nava Nagar, Bagalkot, Karnataka 587103
              </p>
              <p className="footer__address-line">
                <strong>Proprietor:</strong> Shivprasadh Hulyal
              </p>
              <p className="footer__contact-numbers">
                <strong>Phone / WhatsApp:</strong><br />
                <a href="tel:917619644958" className="footer__link footer__link--highlight">+91 76196 44958</a>
                <br />
                <a href="tel:916362991969" className="footer__link">+91 63629 91969</a>
              </p>
              <a
                href="https://www.google.com/maps?q=16.1671087,75.6591015+(R+K+KITCHENWARE)"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__maps-link"
              >
                <span>📍</span> View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          &copy; {currentYear} RK Kitchen Ware. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
