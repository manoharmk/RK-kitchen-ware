/**
 * WhatsAppButton
 *
 * Generates a pre-filled WhatsApp enquiry message and opens wa.me link.
 *
 * Props:
 *   product  {Object}  product object { id, name, price }
 */

const WHATSAPP_PHONE = '917619644958';

export default function WhatsAppButton({ product }) {
  const priceText =
    product.price > 0
      ? `₹${product.price.toLocaleString('en-IN')}`
      : 'Price on request';

  const message = [
    `Hello RK Kitchen Ware,`,
    ``,
    `I'm interested in the following product:`,
    ``,
    `Product: ${product.name}`,
    `Product ID: ${product.id}`,
    `Price: ${priceText}`,
    ``,
    `Please share more details and availability.`,
  ].join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label={`Enquire about ${product.name} on WhatsApp`}
    >
      {/* WhatsApp SVG icon */}
      <svg
        className="whatsapp-btn__icon"
        aria-hidden="true"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.7c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1 1-3.9-.3-.4C5.6 20.1 5 18 5 15.9 5 9.8 9.9 4.9 16 4.9s11 4.9 11 11-4.9 11-11 11zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4-.1-.5c-.1-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.3z" />
      </svg>
      Enquire on WhatsApp
    </a>
  );
}
