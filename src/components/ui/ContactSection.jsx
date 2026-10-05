import { useState } from 'react';

const MAPS_URL = 'https://maps.app.goo.gl/J89bsEsQapy2as65A';
const PRIMARY_PHONE = '+91 76196 44958';
const PRIMARY_PHONE_CLEAN = '917619644958';
const SECONDARY_PHONE = '+91 63629 91969';
const SECONDARY_PHONE_CLEAN = '916362991969';
const EMAIL_ADDRESS = 'info.rkkitchenwarebgk@gmail.com';

const SHOP_ADDRESS = {
  shopName: 'R K Kitchenware & Home Appliances',
  street: 'Plot No. 32D, Sector No. 04',
  landmark: 'Behind Bata Showroom (Opp. Chandavari Footwear / Near Sunday Market)',
  area: 'Sector 4, Nava Nagar',
  city: 'Bagalkot',
  state: 'Karnataka',
  pincode: '587103',
  country: 'India',
};

const FULL_ADDRESS_TEXT = `${SHOP_ADDRESS.shopName}, ${SHOP_ADDRESS.street}, ${SHOP_ADDRESS.landmark}, ${SHOP_ADDRESS.area}, ${SHOP_ADDRESS.city}, ${SHOP_ADDRESS.state} - ${SHOP_ADDRESS.pincode}, ${SHOP_ADDRESS.country}`;

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(FULL_ADDRESS_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleQuickEnquiry = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const text = [
      `*New Contact Enquiry from Website*`,
      ``,
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      formData.message.trim() ? `*Message:* ${formData.message.trim()}` : null,
      ``,
      `_Sent via RK Kitchen Ware Contact Page_`,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/${PRIMARY_PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact-us" className="contact-section" aria-label="Contact and Store Location">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-header__badge">
            <span>📍</span> Physical Store &amp; Contact
          </div>
          <h2 className="contact-header__title">
            Visit Our Showroom or <span>Contact Us</span>
          </h2>
          <p className="contact-header__subtitle">
            Come visit our kitchenware showroom in Bagalkot to explore products in person, or get in touch with our team for wholesale orders and home delivery.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Owner & Contact Info */}
          <div className="contact-info-col">
            {/* Owner & Management Card */}
            <div className="contact-card owner-card">
              <div className="owner-card__header">
                <div className="owner-card__avatar">
                  <span>SH</span>
                </div>
                <div>
                  <div className="owner-card__tag">Proprietor &amp; Store Owner</div>
                  <h3 className="owner-card__name">Shivprasadh Hulyal</h3>
                  <p className="owner-card__role">Owner &amp; Manager • RK Kitchenware</p>
                </div>
              </div>

              <div className="owner-card__actions">
                <a
                  href={`tel:${PRIMARY_PHONE_CLEAN}`}
                  className="contact-btn contact-btn--call"
                  aria-label="Call Store Owner"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call: {PRIMARY_PHONE}
                </a>

                <a
                  href={`https://wa.me/${PRIMARY_PHONE_CLEAN}?text=${encodeURIComponent('Hello Sir, I would like to enquire about kitchenware at RK Kitchen Ware')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn contact-btn--wa"
                  aria-label="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                    <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1 1-3.9-.3-.4C5.6 20.1 5 18 5 15.9 5 9.8 9.9 4.9 16 4.9s11 4.9 11 11-4.9 11-11 11zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4-.1-.5c-.1-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.3z" />
                  </svg>
                  WhatsApp Owner
                </a>
              </div>
            </div>

            {/* Quick Contact Numbers & Hours */}
            <div className="contact-card details-card">
              <div className="contact-detail-row">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Contact Numbers</div>
                  <div className="contact-detail-val">
                    <a href={`tel:${PRIMARY_PHONE_CLEAN}`} className="contact-link">{PRIMARY_PHONE}</a> (WhatsApp / Primary)
                  </div>
                  <div className="contact-detail-val">
                    <a href={`tel:${SECONDARY_PHONE_CLEAN}`} className="contact-link">{SECONDARY_PHONE}</a> (Store Counter)
                  </div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Email Support</div>
                  <div className="contact-detail-val">
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="contact-link">{EMAIL_ADDRESS}</a>
                  </div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon">🕒</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Showroom Timings</div>
                  <div className="contact-detail-val">
                    <strong>Monday – Sunday:</strong> 10:00 AM – 9:00 PM
                  </div>
                  <div className="contact-detail-sub">Open all 7 days of the week</div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon">🛍️</div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Services Offered</div>
                  <div className="contact-badges">
                    <span className="contact-badge">Wholesale</span>
                    <span className="contact-badge">Retail</span>
                    <span className="contact-badge">Faber Appliances</span>
                    <span className="contact-badge">Bulk Orders</span>
                    <span className="contact-badge">Doorstep Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Message Form */}
            <div className="contact-card enquiry-form-card">
              <h3 className="enquiry-form__title">Send a Quick Enquiry</h3>
              <p className="enquiry-form__sub">Have a question? Send it straight to our WhatsApp.</p>
              <form onSubmit={handleQuickEnquiry} className="enquiry-form">
                <div className="enquiry-form__row">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="enquiry-form__input"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    className="enquiry-form__input"
                  />
                </div>
                <textarea
                  placeholder="What product or item are you looking for? (Optional)"
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="enquiry-form__textarea"
                />
                <button type="submit" className="enquiry-form__submit">
                  <span>Send via WhatsApp</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Physical Address & Map */}
          <div className="contact-map-col">
            <div className="contact-card address-card">
              <div className="address-card__header">
                <div className="address-card__pin-icon">📍</div>
                <div>
                  <h3 className="address-card__store-title">RK Kitchenware Showroom</h3>
                  <div className="address-card__status">
                    <span className="status-dot"></span> Open Today • Navanagar, Bagalkot
                  </div>
                </div>
              </div>

              <div className="address-card__body">
                <div className="address-card__line address-card__line--bold">
                  {SHOP_ADDRESS.shopName}
                </div>
                <div className="address-card__line">
                  {SHOP_ADDRESS.street}
                </div>
                <div className="address-card__line address-card__landmark">
                  <strong>Landmark:</strong> {SHOP_ADDRESS.landmark}
                </div>
                <div className="address-card__line">
                  {SHOP_ADDRESS.area}, {SHOP_ADDRESS.city}
                </div>
                <div className="address-card__line">
                  {SHOP_ADDRESS.state} – {SHOP_ADDRESS.pincode}, {SHOP_ADDRESS.country}
                </div>
              </div>

              {/* Action buttons */}
              <div className="address-card__actions">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-btn address-btn--primary"
                  id="open-google-maps-btn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                  Open in Google Maps
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="address-btn address-btn--secondary"
                  id="copy-address-btn"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Address Copied!
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      Copy Address
                    </>
                  )}
                </button>
              </div>

              {/* Embedded Google Map */}
              <div className="address-map__container">
                <iframe
                  title="RK Kitchenware Showroom Location on Google Maps"
                  src="https://maps.google.com/maps?q=16.1671087,75.6591015&hl=en&z=16&output=embed"
                  width="100%"
                  height="340"
                  style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="address-map__caption">
                  <span>🗺️</span> Located in Sector 4, Nava Nagar, Bagalkot (Behind Bata Showroom)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
