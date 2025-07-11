export const STRIPE_PRICES = {
  starter: 250,      // One-page, quick turnaround
  standard: 500,     // Up to 3-pages, more in depth
  advanced: 750,     // Custom consultation pricing (handled separately)
  // Add-ons
  extraPage: 100,    // For each extra page past 3
  aiBot: 150,        // Lite AI Logic setup
  automation: 200,   // Lite automation builds
  hostingMonthly: 30,  // Monthly hosting
  hostingAnnual: 300,  // Annual hosting
} as const;

export type PackageType = keyof typeof STRIPE_PRICES;

export function getStripePrice(packageType: PackageType): number {
  return STRIPE_PRICES[packageType];
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
