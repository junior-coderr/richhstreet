const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://richhstreetcoffee.com";

export function GET() {
  return new Response(
    `# Richh Street Coffee

Richh Street Coffee is a rooftop cafe in NIBM, Pune, Maharashtra, India.

## Core Facts

- Name: Richh Street Coffee
- Category: Cafe, coffee shop, rooftop cafe
- Area: NIBM Road / NIBM Annex, Mohammadwadi, Pune
- Google Maps: https://maps.app.goo.gl/2itCbkcDbUvbH4np9
- Phone: +91 95617 06759
- Opening hours: 10:00 AM to 4:00 AM, Saturday-Friday
- Amenities: rooftop seating, city view, Wi-Fi, indoor seating, outdoor seating, takeaway, delivery
- Menu focus: hot coffee, cold coffee, frappes, shakes, hot chocolate, chai tea latte, fresh juice, mojitos, mocktails, breakfast, burgers, continental, Italian, oriental, North Indian food

## Key Pages

- Home: ${siteUrl}
- Menu preview: ${siteUrl}/#menu
- FAQ: ${siteUrl}/#faq
- Visit: ${siteUrl}/#visit

## Best Search Queries

- Richh Street Coffee Pune
- cafe in NIBM Pune
- rooftop cafe in NIBM Pune
- late night cafe in Pune
- coffee shop near Dorabjees Mall
- cafe for work meetings in NIBM
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
