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

          {/* Contact */}
          <div>
            <div className="footer__heading">Enquiries</div>
            <ul className="footer__links">
              <li>
                <span className="footer__link">
                  Use the WhatsApp button on any product to send us an enquiry.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          &copy; {currentYear} RK Kitchen Ware. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
