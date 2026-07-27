/**
 * config/business.ts
 *
 * Single source of truth for all Richh Street Coffee business data.
 * Import from here in: layout.tsx, page.tsx, robots.ts, sitemap.ts,
 * llms.txt/route.ts, and any future pages.
 *
 * NEVER hardcode business info in individual files.
 */

// ---------------------------------------------------------------------------
// Core identity
// ---------------------------------------------------------------------------

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://richhstreetcoffee.com";

export const BUSINESS_NAME = "Richh Street Coffee";
export const BUSINESS_TAGLINE = "Flawless by every sip.";
export const BUSINESS_DESCRIPTION =
  "Richh Street Coffee is a rooftop cafe in NIBM, Pune, Maharashtra, India, serving specialty coffee, breakfast, mocktails, and late-night food from 10 AM to 4 AM daily.";

export const BUSINESS_SCHEMA_ID = `${SITE_URL}/#richh-street-coffee`;

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const PHONE_RAW = "+919561706759"; // E.164 without spaces
export const PHONE_DISPLAY = "+91 95617 06759";
export const PHONE_TEL_HREF = `tel:${PHONE_RAW}`;
export const WHATSAPP_HREF = `https://wa.me/919561706759`;

// Add email once confirmed by the business owner.
// export const EMAIL = "hello@richhstreetcoffee.com";

// ---------------------------------------------------------------------------
// Address
// ---------------------------------------------------------------------------

export const ADDRESS = {
  streetAddress: "NIBM Road, NIBM Annex, Mohammadwadi",
  addressLocality: "Pune",
  addressRegion: "Maharashtra",
  postalCode: "411060",
  addressCountry: "IN",
  /** Human-readable single-line version */
  display: "NIBM Road / NIBM Annex, Mohammadwadi, Pune, Maharashtra 411060",
} as const;

/**
 * Approximate GeoCoordinates for NIBM Road / Mohammadwadi, Pune.
 * Replace with exact coordinates once confirmed.
 */
export const GEO = {
  latitude: 18.4635,
  longitude: 73.8858,
} as const;

// ---------------------------------------------------------------------------
// Maps & ordering links
// ---------------------------------------------------------------------------

export const MAP_URL = "https://maps.app.goo.gl/2itCbkcDbUvbH4np9";
export const ZOMATO_URL =
  "https://www.zomato.com/pune/richh-street-coffee-nibm-road/order";
export const INSTAGRAM_URL = "https://www.instagram.com/richhstreetcoffee.pune";

/**
 * sameAs links for schema.org.
 * Helps search engines and AI systems link this website to the
 * same business entity across platforms.
 */
export const SAME_AS_URLS = [
  MAP_URL,
  ZOMATO_URL,
  INSTAGRAM_URL,
  // "https://www.facebook.com/richhstreetcoffee",
];

// ---------------------------------------------------------------------------
// Opening hours
// ---------------------------------------------------------------------------

/**
 * The cafe is open 10:00 AM – 4:00 AM the following day (overnight).
 *
 * Schema.org CANNOT represent overnight hours in a single
 * OpeningHoursSpecification. Splitting into two specs is the only valid
 * approach per Google documentation:
 *   Spec 1: 10:00 → 23:59 (day portion)
 *   Spec 2: 00:00 → 04:00 (post-midnight portion)
 *
 * Both specs apply to every day of the week (Mon–Sun).
 */
export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [...DAYS_OF_WEEK],
    opens: "10:00",
    closes: "23:59",
  },
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [...DAYS_OF_WEEK],
    opens: "00:00",
    closes: "04:00",
  },
];

/** Human-readable display string */
export const HOURS_DISPLAY = "Open daily · 10 AM – 4 AM";
export const HOURS_DISPLAY_SHORT = "10 AM – 4 AM";

// ---------------------------------------------------------------------------
// Business attributes
// ---------------------------------------------------------------------------

export const PRICE_RANGE = "₹200 – ₹1000";
export const CURRENCIES_ACCEPTED = "INR";
export const PAYMENT_ACCEPTED = ["Cash", "UPI", "Credit Card", "Debit Card"];

export const SERVES_CUISINE = [
  "Coffee",
  "Cafe",
  "Continental",
  "Italian",
  "Oriental",
  "North Indian",
  "Breakfast",
  "Burgers",
];

export const AMENITIES = [
  { name: "Rooftop seating", value: true },
  { name: "City view", value: true },
  { name: "Wi-Fi", value: true },
  { name: "Indoor seating", value: true },
  { name: "Outdoor seating", value: true },
  { name: "Takeaway", value: true },
  { name: "Delivery", value: true },
  { name: "Late-night hours", value: true },
] as const;

// ---------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------

export const IMAGES = {
  logo: "/images/richh-street-logo.png",
  heroCoffeeCup: "/images/hero-coffee-cup.png",
  heroBg: "/images/coffee-line-background.png",
  heroBgPhone: "/images/coffee-line-background-forphone.PNG",
  /** OG image — ideally a real cafe photo; using logo as fallback */
  og: "/images/richh-street-logo.png",
} as const;

// ---------------------------------------------------------------------------
// Menu — scalable architecture
// ---------------------------------------------------------------------------

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  isVeg?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "signature-hot-coffees",
    title: "Signature Hot Coffees",
    items: [
      { name: "Cappuccino", price: "₹150", isVeg: true },
      { name: "Café Latte", price: "₹180", isVeg: true },
      { name: "Café Americano", price: "₹150", isVeg: true },
      { name: "Flat White", price: "₹180", isVeg: true },
      { name: "Hot Chocolate", price: "₹180", isVeg: true },
      { name: "Chai Tea Latte", price: "₹150", isVeg: true },
    ],
  },
  {
    id: "cold-coffee-and-frappe",
    title: "Cold Coffee and Frappe",
    items: [
      { name: "Classic Cold Coffee", price: "₹150", isVeg: true },
      { name: "Café Frappe", price: "₹180", isVeg: true },
      { name: "Mocha Frappe", price: "₹180", isVeg: true, isBestSeller: true },
      { name: "Java Chip Frappe", price: "₹210", isVeg: true, isBestSeller: true },
    ],
  },
  {
    id: "mocktails-and-mojitos",
    title: "Mocktails and Mojitos",
    items: [
      { name: "Traditional Mojito", price: "₹180", isVeg: true },
      { name: "Watermelon Mojito", price: "₹210", isVeg: true },
      { name: "Love On The Beach", price: "₹210", isVeg: true },
      { name: "Sangria Lemonade", price: "₹230", isVeg: true },
    ],
  },
  {
    id: "shakes-and-juices",
    title: "Shakes and Juices",
    items: [
      { name: "Chocolate Shake", price: "₹190", isVeg: true },
      { name: "Vanilla Shake", price: "₹190", isVeg: true },
      { name: "Fresh Lime Soda", price: "₹120", isVeg: true },
      { name: "Fresh Juice (Seasonal)", price: "₹150", isVeg: true },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      { name: "Classic French Toast", price: "₹180", isVeg: true },
      { name: "Egg Benedict", price: "₹220" },
      { name: "Avocado Toast", price: "₹220", isVeg: true },
      { name: "Pancake Stack", price: "₹210", isVeg: true, isBestSeller: true },
    ],
  },
  {
    id: "burgers-and-sandwiches",
    title: "Burgers and Sandwiches",
    items: [
      { name: "Classic Veg Burger", price: "₹210", isVeg: true },
      { name: "Crispy Chicken Burger", price: "₹260" },
      { name: "Grilled Cheese Sandwich", price: "₹180", isVeg: true },
      { name: "Club Sandwich", price: "₹240" },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      { name: "Pasta Arrabbiata", price: "₹280", isVeg: true },
      { name: "Penne Alfredo", price: "₹300", isVeg: true },
      { name: "Schezwan Fried Rice", price: "₹260", isVeg: true },
      { name: "Butter Chicken with Naan", price: "₹380" },
    ],
  },
];

/** Flat menu highlights for use in JSON-LD and legacy displays */
export const MENU_HIGHLIGHTS: Array<{ title: string; items: [string, string][] }> =
  MENU.slice(0, 3).map((cat) => ({
    title: cat.title,
    items: cat.items.map((item) => [item.name, item.price] as [string, string]),
  }));

// ---------------------------------------------------------------------------
// FAQs — expanded to 40 items for rich FAQ schema
// ---------------------------------------------------------------------------

export type FAQ = {
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  // ── Location & Directions ──────────────────────────────────────────────
  {
    question: "Where is Richh Street Coffee located?",
    answer:
      "Richh Street Coffee is located on NIBM Road, NIBM Annex, Mohammadwadi, Pune, Maharashtra. It is close to Dorabjees Mall. Use the Google Maps link on this page for live turn-by-turn directions.",
  },
  {
    question: "Which area of Pune is Richh Street Coffee in?",
    answer:
      "The cafe is in NIBM Annex (also called NIBM Road), which sits in the Mohammadwadi neighbourhood of Pune. It is easily reachable from Undri, Kondhwa, Wanowrie, and Hadapsar.",
  },
  {
    question: "Is Richh Street Coffee near Dorabjees Mall?",
    answer:
      "Yes. Richh Street Coffee is located close to Dorabjees Mall on NIBM Road, making it a convenient stop before or after shopping.",
  },
  {
    question: "Is there parking available at Richh Street Coffee?",
    answer:
      "Parking is available in the surrounding area on NIBM Road. Call ahead at +91 95617 06759 to confirm parking details for large groups or special occasions.",
  },
  {
    question: "How do I get directions to Richh Street Coffee?",
    answer:
      "Open Google Maps and search for 'Richh Street Coffee NIBM Pune', or use the direct Maps link available on this website. The cafe is on NIBM Road, NIBM Annex, Mohammadwadi, Pune.",
  },

  // ── Opening Hours & Timings ────────────────────────────────────────────
  {
    question: "What are the opening hours of Richh Street Coffee?",
    answer:
      "Richh Street Coffee is open daily from 10:00 AM to 4:00 AM — that includes overnight hours, making it one of the few late-night cafes in NIBM, Pune.",
  },
  {
    question: "Is Richh Street Coffee open on Sundays?",
    answer:
      "Yes. Richh Street Coffee is open every day of the week, including Sundays and public holidays, from 10:00 AM to 4:00 AM.",
  },
  {
    question: "Is Richh Street Coffee open late at night?",
    answer:
      "Yes. The cafe stays open until 4:00 AM, making it a great option for late-night cravings, post-dinner coffee, or late-night work sessions near NIBM, Pune.",
  },
  {
    question: "Is Richh Street Coffee open on public holidays?",
    answer:
      "Richh Street Coffee is generally open on public holidays. Call +91 95617 06759 before visiting on a major holiday to confirm availability.",
  },
  {
    question: "What time does Richh Street Coffee close?",
    answer:
      "Richh Street Coffee closes at 4:00 AM daily. The kitchen and bar are operational through the night.",
  },

  // ── Seating & Ambience ─────────────────────────────────────────────────
  {
    question: "Does Richh Street Coffee have rooftop seating?",
    answer:
      "Yes. Richh Street Coffee features rooftop seating with open-air city views, making it a popular choice for evening outings and special occasions in NIBM, Pune.",
  },
  {
    question: "Does Richh Street Coffee have outdoor seating?",
    answer:
      "Yes. In addition to rooftop seating, there is outdoor seating available. Indoor seating is also provided for comfort.",
  },
  {
    question: "Is Richh Street Coffee suitable for a date night?",
    answer:
      "Yes. The rooftop ambience, city views, warm lighting, and a menu that spans coffee to mocktails and continental food make it a popular date-night destination in NIBM, Pune.",
  },
  {
    question: "Is Richh Street Coffee good for birthday celebrations?",
    answer:
      "Yes. The cafe is well-suited for birthday gatherings. Call +91 95617 06759 in advance to arrange seating for a group and to check for any special arrangements.",
  },
  {
    question: "Can I host a private event or group gathering at Richh Street Coffee?",
    answer:
      "For group bookings or private events, contact the cafe directly at +91 95617 06759 or via WhatsApp to discuss availability and arrangements.",
  },

  // ── Wi-Fi & Work ───────────────────────────────────────────────────────
  {
    question: "Does Richh Street Coffee have Wi-Fi?",
    answer:
      "Yes. Richh Street Coffee offers Wi-Fi for customers, making it a popular choice for remote workers, students, and those who need connectivity while enjoying coffee in NIBM, Pune.",
  },
  {
    question: "Is Richh Street Coffee a good place to work from?",
    answer:
      "Yes. With Wi-Fi, relaxed seating, a wide menu, and operating hours that extend to 4:00 AM, Richh Street Coffee is a solid choice for working remotely or late-night study sessions near NIBM, Pune.",
  },
  {
    question: "Is Richh Street Coffee suitable for meetings?",
    answer:
      "Yes. The cafe's relaxed atmosphere, Wi-Fi, and varied menu make it a convenient venue for casual business meetings and team catch-ups in the NIBM area.",
  },
  {
    question: "Is Richh Street Coffee student-friendly?",
    answer:
      "Yes. Students frequent the cafe for its Wi-Fi, affordable menu, and extended late-night hours — making it one of the more study-friendly cafes near NIBM Road, Pune.",
  },

  // ── Menu & Food ────────────────────────────────────────────────────────
  {
    question: "What does Richh Street Coffee serve?",
    answer:
      "The menu includes specialty hot coffees (cappuccino, latte, flat white, americano), cold coffees, frappes, shakes, fresh juices, hot chocolate, chai tea latte, mocktails, mojitos, breakfast dishes, burgers, sandwiches, continental, Italian, oriental, and North Indian food.",
  },
  {
    question: "Does Richh Street Coffee serve breakfast?",
    answer:
      "Yes. Breakfast items include French toast, eggs, avocado toast, pancakes, and more. Breakfast is served from the time the cafe opens at 10:00 AM.",
  },
  {
    question: "What are the best-selling drinks at Richh Street Coffee?",
    answer:
      "The Java Chip Frappe, Mocha Frappe, and Watermelon Mojito are popular choices. Signature hot coffees like the Café Latte and Flat White are also highly rated.",
  },
  {
    question: "Does Richh Street Coffee serve non-vegetarian food?",
    answer:
      "Yes. The menu includes both vegetarian and non-vegetarian options across categories like burgers, sandwiches, and mains.",
  },
  {
    question: "Does Richh Street Coffee serve food late at night?",
    answer:
      "Yes. Food and beverages are available through the night, up until closing at 4:00 AM. This makes it one of the few late-night dining options near NIBM, Pune.",
  },

  // ── Orders & Delivery ─────────────────────────────────────────────────
  {
    question: "Can I order food from Richh Street Coffee online?",
    answer:
      "Yes. Online ordering is available through Zomato. Search for 'Richh Street Coffee NIBM' on Zomato or use the Order Online link on this website.",
  },
  {
    question: "Does Richh Street Coffee offer takeaway?",
    answer:
      "Yes. Takeaway orders are accepted. Call +91 95617 06759 or message via WhatsApp to place a takeaway order.",
  },
  {
    question: "Does Richh Street Coffee offer home delivery?",
    answer:
      "Yes. Delivery is available through Zomato. Check the Zomato listing for the current delivery radius and estimated delivery times for your area.",
  },
  {
    question: "Can I call Richh Street Coffee to place an order?",
    answer:
      "Yes. You can call +91 95617 06759 or send a WhatsApp message to confirm menu availability and place an order.",
  },

  // ── Payment ───────────────────────────────────────────────────────────
  {
    question: "What payment methods does Richh Street Coffee accept?",
    answer:
      "Richh Street Coffee accepts cash, UPI (Google Pay, PhonePe, Paytm), credit cards, and debit cards.",
  },
  {
    question: "Does Richh Street Coffee accept UPI payments?",
    answer:
      "Yes. UPI payments via apps like Google Pay, PhonePe, and Paytm are accepted at Richh Street Coffee.",
  },

  // ── Policies ──────────────────────────────────────────────────────────
  {
    question: "Does Richh Street Coffee allow pets?",
    answer:
      "Pet policy may vary. Please call +91 95617 06759 ahead of your visit to confirm the current pet-friendly policy.",
  },
  {
    question: "Is smoking allowed at Richh Street Coffee?",
    answer:
      "Smoking policies differ by seating area. Contact the cafe directly at +91 95617 06759 for the current smoking policy.",
  },
  {
    question: "Can I make a reservation at Richh Street Coffee?",
    answer:
      "Walk-ins are welcome. For group bookings or to reserve a specific table (especially rooftop seating on weekends), it is recommended to call +91 95617 06759 in advance.",
  },
  {
    question: "Do I need to book a table in advance at Richh Street Coffee?",
    answer:
      "For small groups, walk-ins are generally available. For larger groups or weekend rooftop seating, calling ahead at +91 95617 06759 is recommended to avoid waiting.",
  },

  // ── Nearby Areas ──────────────────────────────────────────────────────
  {
    question: "Which neighbourhoods does Richh Street Coffee serve?",
    answer:
      "Richh Street Coffee is located in NIBM Annex, Mohammadwadi, Pune, and is conveniently accessible from Undri, Kondhwa, Wanowrie, Hadapsar, Magarpatta, and Kharadi.",
  },
  {
    question: "Is Richh Street Coffee the best late-night cafe near NIBM Pune?",
    answer:
      "With 4:00 AM closing hours, rooftop seating, Wi-Fi, and a full food and drinks menu, Richh Street Coffee is among the most complete late-night cafe experiences near NIBM Road, Pune.",
  },

  // ── Occasions ─────────────────────────────────────────────────────────
  {
    question: "Is Richh Street Coffee a good spot for a night out in Pune?",
    answer:
      "Yes. The rooftop ambience, city views, mocktail menu, and late hours (until 4 AM) make Richh Street Coffee a popular evening and late-night destination near NIBM, Pune.",
  },
  {
    question: "Can I celebrate an anniversary at Richh Street Coffee?",
    answer:
      "Yes. The rooftop setting and evening ambience make it a romantic option for anniversary dinners and celebrations. Call ahead to arrange your visit.",
  },
  {
    question: "Is Richh Street Coffee good for a casual hangout with friends?",
    answer:
      "Absolutely. With a wide menu, relaxed vibe, rooftop seating, and late-night hours, Richh Street Coffee is one of the most popular hangout spots in the NIBM area of Pune.",
  },
  {
    question: "Does Richh Street Coffee have a good vibe for solo visitors?",
    answer:
      "Yes. The cafe is welcoming to solo visitors. Wi-Fi availability, a calm atmosphere, and a broad menu with both beverages and food make it comfortable for solo work or leisure visits.",
  },
];
