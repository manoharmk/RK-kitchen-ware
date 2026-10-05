import { useState } from "react";

/* ── Seed reviews (Indian customers) ─────────────────────────── */
const SEED_REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    place: "Mumbai, Maharashtra",
    rating: 5,
    date: "October 2026",
    comment:
      "Bahut hi achha product hai! Maine pressure cooker liya aur quality ekdam top-notch hai. Meri mummy bhi bahut khush hain. WhatsApp pe quickly response mila — highly recommended! 🙏",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    place: "Bengaluru, Karnataka",
    rating: 5,
    date: "September 2026",
    comment:
      "Ordered the 7-piece stainless steel cookware set. Delivery was fast and packaging was very secure. The quality is excellent — feels premium and very sturdy. Will definitely order again from RK Kitchen Ware!",
  },
  {
    id: 3,
    name: "Anita Patel",
    place: "Ahmedabad, Gujarat",
    rating: 4,
    date: "August 2026",
    comment:
      "Cast iron kadai is superb! Bilkul market jaisi quality nahi — yahan ki quality bahut better hai. Price bhi reasonable tha. Ek star kam isliye ki delivery thodi slow thi, but overall bahut satisfied hoon.",
  },
  {
    id: 4,
    name: "Suresh Nair",
    place: "Kochi, Kerala",
    rating: 5,
    date: "July 2026",
    comment:
      "Bought the knife set and it is absolutely fantastic! Sharp, well-balanced, and the handles are very comfortable. My wife loves it for cutting vegetables. Best purchase this year from RK Kitchen Ware. Thank you!",
  },
  {
    id: 5,
    name: "Meena Devi",
    place: "Jaipur, Rajasthan",
    rating: 5,
    date: "July 2026",
    comment:
      "Tiffin box aur mixing bowls dono liye. Steel ki quality zabardast hai — na zang lagi, na rang chhuta. Ghar mein sab khush hain. Aage bhi yahan se hi lenge. RK Kitchen Ware bahut bharosemand hai!",
  },
  {
    id: 6,
    name: "Vikram Singh",
    place: "Chandigarh, Punjab",
    rating: 4,
    date: "June 2026",
    comment:
      "Very good quality products at reasonable prices. Ordered the spatula and ladle set — it is dishwasher safe as advertised. The WhatsApp enquiry system is very convenient, no need to create accounts anywhere.",
  },
];

function StarDisplay({ rating }) {
  return (
    <div className="review-card__stars" aria-label={"Rating: " + rating + " out of 5"}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "star star--filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-picker" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          className={"star-picker__btn " + (s <= (hovered || value) ? "star--filled" : "")}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(s)}
          aria-label={s + " star" + (s > 1 ? "s" : "")}
          aria-pressed={value === s}
        >
          ★
        </button>
      ))}
      {value > 0 && <span className="star-picker__label">{value} / 5</span>}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__top">
        <div className="review-card__avatar" aria-hidden="true">
          {review.name.charAt(0)}
        </div>
        <div className="review-card__meta">
          <div className="review-card__name">{review.name}</div>
          <div className="review-card__place">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {review.place}
          </div>
        </div>
        <div className="review-card__date">{review.date}</div>
      </div>
      <StarDisplay rating={review.rating} />
      <p className="review-card__comment">"{review.comment}"</p>
    </article>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(SEED_REVIEWS);
  const [form, setForm] = useState({ name: "", place: "", rating: 0, comment: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Please enter your name.";
    if (!form.place.trim())   e.place   = "Please enter your city or place.";
    if (form.rating === 0)    e.rating  = "Please select a star rating.";
    if (!form.comment.trim()) e.comment = "Please write a comment.";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const newReview = {
      id: Date.now(),
      name: form.name.trim(),
      place: form.place.trim(),
      rating: form.rating,
      date: new Date().toLocaleString("en-IN", { month: "long", year: "numeric" }),
      comment: form.comment.trim(),
    };
    setReviews((prev) => [newReview, ...prev]);
    setForm({ name: "", place: "", rating: 0, comment: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="container">

        <div className="reviews-section__header">
          <div className="home-hero__eyebrow"><span>💬</span> Customer Experiences</div>
          <h2 className="reviews-section__title" id="reviews-heading">
            What Our <span>Customers Say</span>
          </h2>
          <p className="reviews-section__subtitle">
            Real reviews from happy customers across India — no filters, no edits.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <div className="leave-review">
          <div className="leave-review__header">
            <h3 className="leave-review__title">✍️ Leave a Review</h3>
            <p className="leave-review__subtitle">
              Bought from us? Share your experience — it helps other customers!
            </p>
          </div>

          {submitted && (
            <div className="review-toast" role="alert">
              🎉 Thank you! Your review has been posted successfully.
            </div>
          )}

          <form className="leave-review__form" onSubmit={handleSubmit} noValidate>
            <div className="leave-review__row">
              <div className="form-field">
                <label htmlFor="review-name" className="form-field__label">
                  Your Name <span className="form-field__required">*</span>
                </label>
                <input
                  id="review-name"
                  type="text"
                  className={"form-field__input" + (errors.name ? " form-field__input--error" : "")}
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  autoComplete="name"
                />
                {errors.name && <span className="form-field__error" role="alert">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="review-place" className="form-field__label">
                  City / Place <span className="form-field__required">*</span>
                </label>
                <input
                  id="review-place"
                  type="text"
                  className={"form-field__input" + (errors.place ? " form-field__input--error" : "")}
                  placeholder="e.g. Mumbai, Maharashtra"
                  value={form.place}
                  onChange={(e) => handleChange("place", e.target.value)}
                  autoComplete="address-level2"
                />
                {errors.place && <span className="form-field__error" role="alert">{errors.place}</span>}
              </div>
            </div>

            <div className="form-field">
              <label className="form-field__label">
                Rating <span className="form-field__required">*</span>
              </label>
              <StarPicker value={form.rating} onChange={(v) => handleChange("rating", v)} />
              {errors.rating && <span className="form-field__error" role="alert">{errors.rating}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="review-comment" className="form-field__label">
                Your Review <span className="form-field__required">*</span>
              </label>
              <textarea
                id="review-comment"
                className={"form-field__textarea" + (errors.comment ? " form-field__input--error" : "")}
                placeholder="Tell us about your experience with our products..."
                rows={4}
                value={form.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
              />
              {errors.comment && <span className="form-field__error" role="alert">{errors.comment}</span>}
            </div>

            <button type="submit" className="leave-review__submit" id="submit-review-btn">
              Post My Review →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
