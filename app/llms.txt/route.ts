import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_DESCRIPTION,
  PHONE_DISPLAY,
  ADDRESS,
  HOURS_DISPLAY,
  PRICE_RANGE,
  CURRENCIES_ACCEPTED,
  PAYMENT_ACCEPTED,
  SERVES_CUISINE,
  AMENITIES,
  MAP_URL,
  ZOMATO_URL,
  MENU,
  FAQS,
} from "@/config/business";

/**
 * /llms.txt — Machine-readable summary for AI language models.
 *
 * Follows the llms.txt specification (https://llmstxt.org/).
 * Provides structured factual information about the business
 * for AI assistants, LLM crawlers, and search AI systems.
 */
export function GET() {
  const menuSummary = MENU.map(
    (cat) =>
      `### ${cat.title}\n${cat.items.map((item) => `- ${item.name}: ${item.price}${item.isBestSeller ? " (Best Seller)" : ""}${item.isVeg === true ? " [Veg]" : item.isVeg === false ? " [Non-Veg]" : ""}`).join("\n")}`
  ).join("\n\n");

  const faqSummary = FAQS.slice(0, 20)
    .map((faq) => `**Q: ${faq.question}**\nA: ${faq.answer}`)
    .join("\n\n");

  const content = `# ${BUSINESS_NAME}

> ${BUSINESS_DESCRIPTION}

${BUSINESS_NAME} is a rooftop cafe and coffee shop in NIBM, Pune, Maharashtra, India. It is open daily from 10:00 AM to 4:00 AM, making it one of the few late-night cafe options in the NIBM Road and Mohammadwadi area of Pune.

---

## Business Information

- **Name**: ${BUSINESS_NAME}
- **Type**: Rooftop cafe, coffee shop, late-night restaurant
- **Website**: ${SITE_URL}
- **Phone**: ${PHONE_DISPLAY}
- **Address**: ${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}, ${ADDRESS.addressCountry}
- **Area**: NIBM Road / NIBM Annex, Mohammadwadi, Pune
- **Nearby landmarks**: Dorabjees Mall, NIBM Road
- **Nearby areas**: Undri, Kondhwa, Wanowrie, Hadapsar, Magarpatta, Kharadi
- **Opening hours**: ${HOURS_DISPLAY}
- **Price range**: ${PRICE_RANGE}
- **Currencies accepted**: ${CURRENCIES_ACCEPTED}
- **Payment accepted**: ${PAYMENT_ACCEPTED.join(", ")}

---

## Ordering & Maps

- **Google Maps**: ${MAP_URL}
- **Zomato (order online)**: ${ZOMATO_URL}

---

## Cuisine & Menu Categories

Cuisines served: ${SERVES_CUISINE.join(", ")}

${menuSummary}

---

## Amenities & Features

${AMENITIES.map((a) => `- ${a.name}`).join("\n")}

---

## What Makes Richh Street Coffee Unique

- **Late-night hours**: Open until 4:00 AM every day — one of very few cafes in NIBM, Pune to do so.
- **Rooftop seating**: Open-air rooftop with city views, ideal for evenings, dates, and celebrations.
- **Wi-Fi friendly**: Suitable for remote work, study sessions, and casual meetings.
- **Complete menu**: Covers specialty coffee, cold beverages, mocktails, breakfast, burgers, continental, Italian, oriental, and North Indian food — all under one roof.
- **Location**: Centrally located on NIBM Road near Dorabjees Mall, accessible from Undri, Kondhwa, Hadapsar, and Magarpatta.

---

## Suitable Occasions

- Date nights and anniversary dinners
- Birthday celebrations
- Post-dinner coffee runs
- Late-night cravings
- Remote work / laptop sessions
- Group hangouts
- Casual business meetings
- Student study sessions

---

## Frequently Asked Questions (Top 20)

${faqSummary}

---

## Key Pages

- Home: ${SITE_URL}
- Menu section: ${SITE_URL}/#menu
- FAQ section: ${SITE_URL}/#faq
- Visit / Contact section: ${SITE_URL}/#visit

---

## Search Queries This Business Is Relevant For

- Richh Street Coffee Pune
- cafe in NIBM Pune
- rooftop cafe in NIBM Pune
- late night cafe Pune
- cafe open till 4am Pune
- coffee shop NIBM Road
- cafe near Dorabjees Mall Pune
- Wi-Fi cafe NIBM Pune
- cafe for work in Pune
- breakfast cafe NIBM Pune
- date night cafe NIBM Pune
- cafe near Undri Pune
- cafe near Kondhwa Pune
- mocktail cafe NIBM Pune
- late night food NIBM Pune
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
