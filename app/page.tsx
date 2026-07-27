import Image from "next/image";
import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_DESCRIPTION,
  BUSINESS_SCHEMA_ID,
  PHONE_RAW,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
  WHATSAPP_HREF,
  ADDRESS,
  GEO,
  MAP_URL,
  ZOMATO_URL,
  SAME_AS_URLS,
  OPENING_HOURS_SCHEMA,
  HOURS_DISPLAY,
  PRICE_RANGE,
  CURRENCIES_ACCEPTED,
  PAYMENT_ACCEPTED,
  SERVES_CUISINE,
  AMENITIES,
  IMAGES,
  MENU_HIGHLIGHTS,
  MENU,
  FAQS,
} from "@/config/business";

// ---------------------------------------------------------------------------
// JSON-LD schemas — all server-rendered, no client JS required
// ---------------------------------------------------------------------------

/** WebSite schema — enables Google Sitelinks Search Box */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  description: BUSINESS_DESCRIPTION,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/** Organization schema — entity clarity for knowledge graphs */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${IMAGES.logo}`,
    width: 512,
    height: 512,
  },
  telephone: PHONE_DISPLAY,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.streetAddress,
    addressLocality: ADDRESS.addressLocality,
    addressRegion: ADDRESS.addressRegion,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.addressCountry,
  },
  sameAs: SAME_AS_URLS,
};

/** WebPage schema for the homepage */
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${BUSINESS_NAME} | Rooftop Cafe in NIBM, Pune`,
  description: BUSINESS_DESCRIPTION,
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": BUSINESS_SCHEMA_ID },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  },
};

/**
 * Restaurant / CafeOrCoffeeShop schema.
 *
 * Opening hours use two specifications to correctly model overnight hours:
 * - 10:00 → 23:59 (day portion)
 * - 00:00 → 04:00 (post-midnight portion)
 * This is the only Schema.org-valid way to represent overnight trading hours.
 */
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": ["CafeOrCoffeeShop", "Restaurant", "LocalBusiness"],
  "@id": BUSINESS_SCHEMA_ID,
  name: BUSINESS_NAME,
  description: BUSINESS_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  priceRange: PRICE_RANGE,
  currenciesAccepted: CURRENCIES_ACCEPTED,
  paymentAccepted: PAYMENT_ACCEPTED.join(", "),
  servesCuisine: SERVES_CUISINE,
  hasMap: MAP_URL,
  menu: `${SITE_URL}/#menu`,
  acceptsReservations: "True",
  inLanguage: "en-IN",

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${IMAGES.logo}`,
  },
  image: [
    `${SITE_URL}${IMAGES.logo}`,
    `${SITE_URL}${IMAGES.heroCoffeeCup}`,
  ],

  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.streetAddress,
    addressLocality: ADDRESS.addressLocality,
    addressRegion: ADDRESS.addressRegion,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.addressCountry,
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },

  openingHoursSpecification: OPENING_HOURS_SCHEMA,

  amenityFeature: AMENITIES.map((a) => ({
    "@type": "LocationFeatureSpecification",
    name: a.name,
    value: a.value,
  })),

  sameAs: SAME_AS_URLS,

  isPartOf: { "@id": `${SITE_URL}/#organization` },

  // Aggregate rating — do NOT add until genuine verified data is available.
  // aggregateRating: { ... }
};

/** FAQPage schema */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/**
 * Menu schema — enables Google menu rich results.
 * Each MenuItem becomes eligible to appear directly in Search.
 */
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE_URL}/#menu-schema`,
  name: `${BUSINESS_NAME} Menu`,
  url: `${SITE_URL}/#menu`,
  inLanguage: "en-IN",
  hasMenuSection: MENU.map((cat) => ({
    "@type": "MenuSection",
    name: cat.title,
    identifier: cat.id,
    hasMenuItem: cat.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      offers: {
        "@type": "Offer",
        price: item.price.replace("₹", ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      ...(item.description ? { description: item.description } : {}),
      suitableForDiet: item.isVeg
        ? "https://schema.org/VegetarianDiet"
        : undefined,
    })),
  })),
};


export default function Home() {
  return (
    <main>
      {/* ── JSON-LD schemas (server-rendered) ─────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="hero" id="home">
        {/*
          Background illustration — purely decorative, hidden from AT.
          Using <img> intentionally here: it's a full-bleed background image
          that benefits from browser-native lazy-loading without layout shift.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-drawing"
          src="/images/coffee-line-background.png"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="low"
        />

        <header className="site-header" aria-label="Main navigation">
          <a
            className="brand-lockup"
            href="#home"
            aria-label={`${BUSINESS_NAME} — back to top`}
          >
            <Image
              src={IMAGES.logo}
              alt={`${BUSINESS_NAME} logo`}
              width={96}
              height={96}
              className="brand-logo"
              priority
            />
            <span>{BUSINESS_NAME}</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#visit">Contact</a>
          </nav>

          <a
            className="nav-cta"
            href={ZOMATO_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Order online via Zomato (opens in new tab)"
          >
            Order Online
          </a>
        </header>

        <div className="hero-content">
          <p className="eyebrow">
            {BUSINESS_NAME} <span>/</span> NIBM, Pune
          </p>
          <h1>Flawless by every sip.</h1>
          <p className="hero-copy">
            Where rich flavours meet street soul. Specialty coffee, rooftop air,
            and moments made to be remembered.
          </p>

          <div
            className="hero-visual"
            aria-label="Latte art coffee served at Richh Street Coffee"
          >
            <Image
              src={IMAGES.heroCoffeeCup}
              alt="A beautifully crafted latte art coffee cup served at Richh Street Coffee, NIBM, Pune"
              width={840}
              height={656}
              className="hero-coffee"
              priority
            />
          </div>

          <div className="hero-actions" aria-label="Primary call to action">
            <a className="button button-primary" href="#menu">
              Explore Menu
            </a>
            <a
              className="button button-secondary"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Find our location on Google Maps (opens in new tab)"
            >
              Find Our Location
            </a>
          </div>

          <p className="hero-hours">{HOURS_DISPLAY}</p>

          <dl className="hero-facts" aria-label="Cafe at a glance">
            <div>
              <dt>Open</dt>
              <dd>10 AM – 4 AM</dd>
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

        <a className="hero-scroll" style={{ marginLeft: "10px" }} href="#about" aria-label="Scroll to About section">
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section className="intro-section" id="about" aria-labelledby="about-title">
        <div className="section-shell split">
          <div>
            <p className="section-kicker">Where rich flavours meet street soul</p>
            <h2 id="about-title">
              Coffee, rooftop air, and a menu built for long evenings.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              {BUSINESS_NAME} is a rooftop cafe on NIBM Road, NIBM Annex,
              Mohammadwadi, Pune — with city views, indoor and outdoor seating,
              Wi-Fi, takeaway, delivery, and a menu spanning hot coffees to
              late-night mocktails.
            </p>
            <p>
              Visit for breakfast, coffee breaks, casual meetings, dinner, or
              late-night cravings. We are conveniently located near NIBM Road,
              Mohammadwadi, Undri, Kondhwa, Hadapsar, and Magarpatta.
            </p>
            <p>
              Open daily from <strong>10:00 AM to 4:00 AM</strong>. Call us at{" "}
              <a href={PHONE_TEL_HREF} aria-label={`Call ${BUSINESS_NAME}`}>
                {PHONE_DISPLAY}
              </a>{" "}
              or order online via Zomato.
            </p>
          </div>
        </div>
      </section>

      {/* ── Amenities ticker ─────────────────────────────────────────── */}
      <section className="proof-band" aria-label="Cafe amenities and features">
        <div className="proof-track" role="list">
          <span role="listitem">Rooftop seating</span>
          <span role="listitem">City view</span>
          <span role="listitem">Wi-Fi friendly</span>
          <span role="listitem">Breakfast to late night</span>
          <span role="listitem">Outdoor seating</span>
          <span role="listitem">Takeaway and delivery</span>
        </div>
      </section>

      {/* ── Menu ──────────────────────────────────────────────────────── */}
      <section className="menu-section" id="menu" aria-labelledby="menu-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Menu preview</p>
            <h2 id="menu-title">From espresso mornings to mocktail nights.</h2>
            <p>
              A curated selection from the Richh Street Coffee menu. The full
              menu — covering breakfast, mains, desserts, and specials — is
              available in-store or by calling us.
            </p>
          </div>

          <div className="menu-grid">
            {MENU_HIGHLIGHTS.map((group) => (
              <section
                className="menu-group"
                key={group.title}
                aria-labelledby={`menu-group-${group.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <h3
                  id={`menu-group-${group.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {group.title}
                </h3>
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

          <a className="text-link" href={PHONE_TEL_HREF} aria-label={`Call ${BUSINESS_NAME} to confirm full menu`}>
            Call to confirm the full menu and availability
          </a>
        </div>
      </section>

      {/* ── Review themes ─────────────────────────────────────────────── */}
      <section
        className="review-section"
        id="reviews"
        aria-labelledby="reviews-title"
      >
        <div className="section-shell split">
          <div>
            <p className="section-kicker">Why guests visit</p>
            <h2 id="reviews-title">What guests come here for.</h2>
          </div>
          <div className="review-list" aria-label="Guest review highlights">
            <p>Rooftop seating and city-view ambience for evening plans.</p>
            <p>
              Coffee, shakes, mocktails, and a broad food menu all in one place.
            </p>
            <p>
              Late-night hours until 4 AM — great for post-dinner coffee runs.
            </p>
            <p>Wi-Fi friendly seating for casual work sessions and meetings.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section
        className="faq-section"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">FAQ</p>
            <h2 id="faq-title">Frequently asked questions about {BUSINESS_NAME}.</h2>
            <p>
              Find answers about location, hours, seating, delivery, payments,
              and more.
            </p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit / Contact ───────────────────────────────────────────── */}
      <section
        className="visit-section"
        id="visit"
        aria-labelledby="visit-title"
      >
        <div className="section-shell visit-layout">
          <div>
            <p className="section-kicker">Visit {BUSINESS_NAME}</p>
            <h2 id="visit-title">Open late in NIBM, Pune.</h2>
            <p>
              {BUSINESS_NAME} is a rooftop cafe on NIBM Road, NIBM Annex,
              Mohammadwadi, Pune. Use Google Maps for live directions and call
              before visiting if you need a table for a large group.
            </p>
          </div>

          <address className="visit-details">
            <span>{BUSINESS_NAME}</span>
            <span>{ADDRESS.display}</span>
            <span>{HOURS_DISPLAY}</span>
            <a href={PHONE_TEL_HREF} aria-label={`Call ${BUSINESS_NAME} at ${PHONE_DISPLAY}`}>
              {PHONE_DISPLAY}
            </a>
          </address>

          <div className="visit-actions">
            <a
              className="button button-primary"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open Richh Street Coffee on Google Maps (opens in new tab)"
            >
              Open Google Maps
            </a>
            <a
              className="button button-whatsapp"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat with Richh Street Coffee on WhatsApp (opens in new tab)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                style={{ marginRight: "0.55rem" }}
                focusable="false"
              >
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
