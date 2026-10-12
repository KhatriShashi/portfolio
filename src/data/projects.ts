export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  links: { label: string; href: string }[];
  category: string;
  services: string[];
  summary: string;
  role: string;
  stack: string[];
  cover: 'byss' | 'longfield' | 'viia' | 'chef';
  challenge: string;
  approach: string;
  outcome: string;
  result: string;
  sections: { title: string; body: string; visual: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: 'byss-multi-store-service-area', number: '01', title: 'BYSS — Multi-store service-area & warehouse workflows', client: 'Heartland Sheds, Shed Liquidators, KidKraft, Gorilla Sheds',
    links: [
      { label: 'Heartland Sheds', href: 'https://www.heartlandsheds.com/' },
      { label: 'Shed Liquidators', href: 'https://www.shedliquidators.com/' },
      { label: 'KidKraft', href: 'https://www.kidkraft.com/' },
      { label: 'Gorilla Sheds', href: 'https://gorillashed.com/' },
    ],
    category: 'Shopify · Backend · Operations', services: ['Shopify extensions', 'Service-area validation', 'Geolocation', 'Warehouse assignment'],
    summary: 'Automating installation eligibility and warehouse assignment across ZIP-code coverage and service-area rules.',
    role: 'Backend development & Shopify extensions', stack: ['Shopify', 'Shopify extensions', 'Redis', 'Geolocation'], cover: 'byss',
    challenge: 'Heartland Sheds, Shed Liquidators, KidKraft, and Gorilla Sheds needed a reliable way to determine whether an installation could be served and which warehouse should handle it. The rules depended on ZIP-code coverage and service-area business logic, and customers needed a clear experience in each Shopify storefront.',
    approach: 'Built service-area and warehouse workflows that validate eligibility against ZIP-code coverage and business rules. Added geolocation routing based on latitude and longitude proximity, with Redis-cached datasets for fast warehouse and service-area lookups. Also implemented merchant-specific functionality through Shopify extensions.',
    outcome: 'The automated workflows reduced invalid installation requests by 80% and lowered operational support effort. Related storefronts include Heartland Sheds, Shed Liquidators, KidKraft, and Gorilla Sheds.',
    result: '80% fewer invalid installation requests',
    sections: [
      { title: 'Check coverage before checkout', body: 'Installation eligibility is validated against ZIP-code coverage and the merchant’s service-area rules. This gives the storefront a dependable way to determine whether a location can be served.', visual: 'byss-visual-coverage', caption: 'Eligibility checks based on ZIP-code coverage and business rules.' },
      { title: 'Route to the right warehouse', body: 'Latitude and longitude proximity calculations support warehouse assignment. Redis-cached datasets keep warehouse and service-area lookups fast as the workflow evaluates a location.', visual: 'byss-visual-routing', caption: 'Geolocation routing with cached lookup data.' },
      { title: 'Extend the Shopify experience', body: 'Custom Shopify extensions added merchant-specific storefront functionality while keeping the installation and assignment workflow connected to the commerce experience.', visual: 'byss-visual-extension', caption: 'Custom Shopify extension work for merchant-specific needs.' },
    ],
  },
  {
    slug: 'longfield-gardens-seasonal-commerce', number: '02', title: 'Longfield Gardens — Seasonal commerce', client: 'Longfield Gardens',
    links: [{ label: 'Visit Longfield Gardens', href: 'https://www.longfield-gardens.com/' }],
    category: 'Shopify · Migration · Seasonal commerce', services: ['BigCommerce → Shopify migration', 'Custom Shopify app', 'Seasonal availability', 'Location-aware checkout'],
    summary: 'A zero-data-loss commerce migration with seasonal purchasing and delivery-date logic shaped around plant hardiness zones.',
    role: 'Migration & custom Shopify app development', stack: ['BigCommerce', 'Shopify', 'Custom Shopify app', 'Geolocation'], cover: 'longfield',
    challenge: 'Longfield Gardens sells plants whose best planting and delivery windows depend on the season and the customer’s location. The store also needed to move from BigCommerce to Shopify without losing data or interrupting the buying experience.',
    approach: 'Migrated the store data from BigCommerce to Shopify with a smooth cutover and zero data loss. Built a custom Shopify app so the merchant could manage estimated arrival dates by season and hardiness zone. Location coordinates are used to populate a customer’s ZIP code, and checkout logic can schedule a plant for its appropriate season—for example, assigning a winter plant purchased in summer to a winter start date based on the customer’s hardiness zone.',
    outcome: 'The migration preserved the store data, while the custom app connected seasonal availability, hardiness-zone rules, and estimated arrival dates to the customer’s purchase flow.',
    result: 'BigCommerce → Shopify · 0% data loss',
    sections: [
      { title: 'Migrate without losing store data', body: 'Moved Longfield Gardens from BigCommerce to Shopify, with a smooth migration and zero data loss so the new store could launch with its information intact.', visual: 'longfield-visual-migration', caption: 'BigCommerce to Shopify migration with data integrity preserved.' },
      { title: 'Manage arrival dates by season and zone', body: 'A custom Shopify app gives the merchant a way to manage estimated arrival dates based on season and plant hardiness zone, making seasonal fulfillment rules configurable.', visual: 'longfield-visual-seasons', caption: 'Seasonal ETA and hardiness-zone rules managed through a custom app.' },
      { title: 'Match checkout timing to the growing season', body: 'Customer latitude and longitude are used to populate a ZIP code. If a customer buys a winter plant during summer, checkout can assign the winter start date appropriate to that customer’s hardiness zone.', visual: 'longfield-visual-checkout', caption: 'Location-aware ZIP code and season-based checkout date.' },
    ],
  },
  {
    slug: 'viia-hemp-checkout-promotions', number: '03', title: 'VIIA HEMP — Checkout promotions', client: 'VIIA HEMP',
    links: [{ label: 'Visit VIIA HEMP', href: 'https://viiahemp.com/' }],
    category: 'Shopify · Checkout · Promotions', services: ['Shopify extensions', 'Free-item selection', 'Custom discounts', 'Merchant configuration'],
    summary: 'Custom checkout extensions for customer-selected free items and merchant-defined discount conditions.',
    role: 'Shopify extension development', stack: ['Shopify', 'Shopify extensions', 'Native discount capabilities'], cover: 'viia',
    challenge: 'VIIA HEMP needed checkout promotions that could do more than apply a standard discount. The merchant wanted customers to choose a complimentary item and wanted control over discount conditions for campaigns.',
    approach: 'Built a Shopify extension flow that lets eligible customers select their preferred free item at checkout. Added a custom discount capability so the merchant could configure conditions that matched their promotion requirements, extending the use of Shopify’s discount capabilities.',
    outcome: 'The merchant used the free-item and custom discount features in its 2025 Black Friday campaigns and shared that the promotions supported strong sales.',
    result: 'Checkout promotions used for Black Friday 2025',
    sections: [
      { title: 'Let customers choose the free item', body: 'A checkout extension gives eligible customers a choice of complimentary item, making the offer selection part of the purchase flow.', visual: 'viia-visual-gift', caption: 'Customer choice built into the checkout promotion.' },
      { title: 'Give the merchant control of discounts', body: 'Custom discount behavior lets the merchant create promotions using conditions aligned to its own offer rules, while building on Shopify’s native discount capabilities.', visual: 'viia-visual-rules', caption: 'Merchant-defined conditions for custom promotions.' },
      { title: 'Support campaign execution', body: 'The free-item and discount experiences were available to the merchant during its 2025 Black Friday campaign. The merchant shared that the features contributed to strong sales.', visual: 'viia-visual-campaign', caption: 'Promotion features used during Black Friday 2025.' },
    ],
  },
  {
    slug: 'im-chef-too-subscription-discounts', number: '04', title: 'I’m Chef Too — Subscription offers', client: 'I’m Chef Too',
    links: [{ label: 'Visit I’m Chef Too', href: 'https://www.imthecheftoo.com/' }],
    category: 'Shopify · Recharge · Subscriptions', services: ['Custom Shopify app', 'Recharge integration', 'Shopify Functions', 'Subscription discounts'],
    summary: 'Subscription-aware discount experiences built around the merchant’s active-subscriber requirements.',
    role: 'Custom app & Shopify extension development', stack: ['Shopify', 'Recharge', 'Shopify Functions', 'Shopify extensions'], cover: 'chef',
    challenge: 'I’m Chef Too needed subscription promotions that reflected its business rules, including special discounts for customers with an active subscription for three months and discounts on subscription products.',
    approach: 'Created a custom app integrated with Recharge and implemented Shopify Functions and extensions to support discount behavior based on the merchant’s requirements. The subscription logic enabled offers for qualifying active subscribers and applied custom discounts to subscription products.',
    outcome: 'The tailored subscription offers and ongoing merchant support helped the team run promotions that the merchant said supported sales and met its needs.',
    result: 'Subscription-aware offers with Recharge',
    sections: [
      { title: 'Recognize eligible subscribers', body: 'The custom app integrates with Recharge to support an offer for customers whose subscription has remained active for three months, matching the merchant’s eligibility requirement.', visual: 'chef-visual-subscriber', caption: 'A subscription tenure condition for targeted offers.' },
      { title: 'Apply discounts to subscription products', body: 'Shopify Functions and extensions implement discount behavior around the merchant’s subscription-product requirements, giving the offer a purpose-built path through the Shopify experience.', visual: 'chef-visual-discount', caption: 'Custom discount logic for subscription products.' },
      { title: 'Support the merchant beyond launch', body: 'Alongside the custom app and discount work, ongoing support helped the merchant operate its promotions and address its needs as they came up.', visual: 'chef-visual-support', caption: 'Implementation and merchant support for subscription promotions.' },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
