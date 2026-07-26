const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://richhstreetcoffee.com";

const mapUrl = "https://maps.app.goo.gl/2itCbkcDbUvbH4np9";
const phone = "+919561706759";
const zomatoUrl = "https://www.zomato.com/pune/richh-street-coffee-nibm-road/order";

const menuHighlights = [
  {
    title: "Signature hot coffees",
    items: [
      ["Cappuccino", "Rs. 150"],
      ["Cafe Latte", "Rs. 180"],
      ["Cafe Americano", "Rs. 150"],
      ["Flat White", "Rs. 180"]
    ]
  },
  {
    title: "Cold coffee and frappe",
    items: [
      ["Classic Cold Coffee", "Rs. 150"],
      ["Cafe Frappe", "Rs. 180"],
      ["Mocha Frappe", "Rs. 180"],
      ["Java Chip Frappe", "Rs. 210"]
    ]
  },
  {
    title: "Mocktails and mojitos",
    items: [
      ["Traditional Mojito", "Rs. 180"],
      ["Water Melon Mojito", "Rs. 210"],
      ["Love On The Beach", "Rs. 210"],
      ["Sangria Lemonade", "Rs. 230"]
    ]
  }
];

const faqs = [
  {
    question: "Where is Richh Street Coffee located?",
    answer:
      "Richh Street Coffee is located around NIBM Road / NIBM Annex in Mohammadwadi, Pune, close to Dorabjees Mall. Use the Google Maps link on this page for live directions."
  },
  {
    question: "What are the opening hours?",
    answer:
      "Richh Street Coffee is open from 10:00 AM to 4:00 AM from Saturday to Friday."
  },
  {
    question: "Does Richh Street Coffee have rooftop seating?",
    answer:
      "Yes. Public listings mention rooftop seating, city views, indoor seating, and outdoor seating."
  },
  {
    question: "Is Richh Street Coffee good for working or meetings?",
    answer:
      "The cafe is positioned as Wi-Fi friendly with relaxed seating, coffee, food, and late-night hours that work well for casual meetings and laptop sessions."
  },
  {
    question: "What does Richh Street Coffee serve?",
    answer:
      "The menu includes hot coffees, frappes, shakes, fresh juices, hot chocolate, chai tea lattes, mocktails, mojitos, breakfast, burgers, continental, Italian, oriental, and North Indian food."
  },
  {
    question: "Can I order or call before visiting?",
    answer:
      "Yes. You can call Richh Street Coffee at +91 95617 06759 or use the WhatsApp button on this page."
  }
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${siteUrl}/#richh-street-coffee`,
  name: "Richh Street Coffee",
  url: siteUrl,
  image: `${siteUrl}/images/richh-street-logo.png`,
  telephone: "+91 95617 06759",
  priceRange: "Rs. 200 - Rs. 1000",
  servesCuisine: [
    "Coffee",
    "Cafe",
    "Continental",
    "Italian",
    "Oriental",
    "North Indian",
    "Breakfast",
    "Burgers"
  ],
  hasMap: mapUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "NIBM Road, NIBM Annex, Mohammadwadi",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "10:00",
      closes: "04:00"
    }
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Rooftop seating",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Wi-Fi",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Outdoor seating",
      value: true
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Takeaway",
      value: true
    }
  ],
  menu: `${siteUrl}/#menu`
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="hero" id="home">
        <img
          className="hero-drawing"
          src="/images/coffee-line-background.png"
          alt=""
          aria-hidden="true"
        />
        <header className="site-header" aria-label="Main navigation">
          <a className="brand-lockup" href="#home" aria-label="Richh Street Coffee home">
            <img
              src="/images/richh-street-logo.png"
              alt=""
              aria-hidden="true"
              className="brand-logo"
            />
            <span>Richh Street Coffee</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#visit">Contact</a>
          </nav>
          <a className="nav-cta" href={zomatoUrl} target="_blank" rel="noreferrer">
            Order Online
          </a>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Richh Street Coffee <span>/</span> NIBM, Pune</p>
          <h1>Flawless by every sip.</h1>
          <p className="hero-copy">
            Where rich flavours meet street soul. Specialty coffee, rooftop air, and
            moments made to be remembered.
          </p>
          <div className="hero-visual" aria-label="Latte art coffee at Richh Street Coffee">
            <img
              src="/images/hero-coffee-cup.png"
              alt="Latte art coffee served at Richh Street Coffee"
              className="hero-coffee"
            />
          </div>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#menu">
              Explore Menu
            </a>
            <a className="button button-secondary" href={mapUrl} target="_blank" rel="noreferrer">
              Find Our Location
            </a>
          </div>
          <p className="hero-hours">Open daily / 10 AM - 4 AM</p>
          <dl className="hero-facts" aria-label="Cafe highlights">
            <div>
              <dt>Open</dt>
              <dd>10 AM - 4 AM</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>NIBM Annex</dd>
            </div>
            <div>
              <dt>Vibe</dt>
              <dd>Rooftop + Wi-Fi</dd>
            </div>
          </dl>
        </div>
        <a className="hero-scroll " style={{ marginLeft: "10px" }} href="#about">
          {/* <span>Scroll to explore</span> */}
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="intro-section" id="about" aria-labelledby="about-title">
        <div className="section-shell split">
          <div>
            <p className="section-kicker">Where rich flavours meet street soul</p>
            <h2 id="about-title">Coffee, rooftop air, and a menu built for long evenings.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Richh Street Coffee is a cafe in NIBM, Pune with rooftop seating, city
              views, indoor and outdoor seating, Wi-Fi, takeaway, delivery, and a menu
              that runs from hot coffee to mocktails.
            </p>
            <p>
              Visit for breakfast, coffee breaks, casual meetings, dinner, or late-night
              cravings near NIBM Road, Mohammadwadi, Undri, and Kondhwa.
            </p>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Cafe amenities">
        <div className="proof-track">
          <span>Rooftop seating</span>
          <span>City view</span>
          <span>Wi-Fi friendly</span>
          <span>Breakfast to late night</span>
          <span>Outdoor seating</span>
          <span>Takeaway and delivery</span>
        </div>
      </section>

      <section className="menu-section" id="menu" aria-labelledby="menu-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Menu preview</p>
            <h2 id="menu-title">From espresso mornings to mocktail nights.</h2>
            <p>
              These are searchable menu highlights from the cafe menu. The full menu can
              expand from this structured data as we add more pages.
            </p>
          </div>
          <div className="menu-grid">
            {menuHighlights.map((group) => (
              <section className="menu-group" key={group.title} aria-labelledby={group.title}>
                <h3 id={group.title}>{group.title}</h3>
                <ul>
                  {group.items.map(([name, price]) => (
                    <li key={name}>
                      <span>{name}</span>
                      <span>{price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <a className="text-link" href={`tel:${phone}`}>
            Call to confirm the full menu and availability
          </a>
        </div>
      </section>

      <section className="review-section" id="reviews" aria-labelledby="reviews-title">
        <div className="section-shell split">
          <div>
            <p className="section-kicker">Review themes</p>
            <h2 id="reviews-title">What guests come here for.</h2>
          </div>
          <div className="review-list" aria-label="Review highlights">
            <p>Rooftop seating and city-view ambience for evening plans.</p>
            <p>Coffee, shakes, mocktails, and a broad food menu in one place.</p>
            <p>Late-night hours that make it useful for post-dinner coffee runs.</p>
            <p>Wi-Fi friendly seating for casual work sessions and meetings.</p>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">FAQ</p>
            <h2 id="faq-title">Useful answers for visitors and search engines.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit" aria-labelledby="visit-title">
        <div className="section-shell visit-layout">
          <div>
            <p className="section-kicker">Visit Richh Street Coffee</p>
            <h2 id="visit-title">Open late in NIBM, Pune.</h2>
            <p>
              Richh Street Coffee is a rooftop cafe around NIBM Road / NIBM Annex,
              Mohammadwadi, Pune. Use Maps for live directions and call before visiting
              if you need a table for a group.
            </p>
          </div>
          <address className="visit-details">
            <span>Richh Street Coffee</span>
            <span>NIBM Road / NIBM Annex, Mohammadwadi, Pune, Maharashtra</span>
            <span>Open Saturday-Friday, 10:00 AM - 4:00 AM</span>
            <a href={`tel:${phone}`}>+91 95617 06759</a>
          </address>
          <div className="visit-actions">
            <a className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">
              Open Google Maps
            </a>
            <a
              className="button button-whatsapp"
              href={`https://wa.me/${phone.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: "0.55rem" }}>
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
