import type {
  CoffeePreference,
  Quantity,
  DeliveryFrequency,
  SubscriptionState,
} from "./subscriptionTypes";

// Lookup table for per shipment prices
// Avoids nested if/else chains, easy to update if prices change
const SHIPMENT_PRICES: Record<
  Quantity,
  Record<NonNullable<DeliveryFrequency>, number>
> = {
  "250g": {
    "Every Week": 7.2,
    "Every 2 Weeks": 9.6,
    "Every Month": 12.0,
  },
  "500g": {
    "Every Week": 13.0,
    "Every 2 Weeks": 17.5,
    "Every Month": 22.0,
  },
  "1000g": {
    "Every Week": 22.0,
    "Every 2 Weeks": 32.0,
    "Every Month": 42.0,
  },
};

// Multiplier to calculate monthly cost from per shipment price
const FREQUENCY_MULTIPLIER: Record<NonNullable<DeliveryFrequency>, number> = {
  "Every Week": 4,
  "Every 2 Weeks": 2,
  "Every Month": 1,
};

// Returns true when grind section should be disabled
export function isGrindDisabled(preference: CoffeePreference | null): boolean {
  return preference === "Capsule";
}

// Returns true when all required fields are selected
// Grind is only required when preference is NOT Capsule
export function isSubscriptionComplete(state: SubscriptionState): boolean {
  const { preference, coffeeType, quantity, frequency, grind } = state;

  // Check all required fields
  if (!preference || !coffeeType || !quantity || !frequency) {
    return false;
  }

  // If not Capsule, grind is also required
  if (preference !== "Capsule" && !grind) {
    return false;
  }

  return true;
}

// Returns the per shipment price based on quantity and frequency
// Returns null if either value hasn't been selected yet
export function getShipmentPrice(
  quantity: Quantity | null,
  frequency: DeliveryFrequency,
): number | null {
  if (!quantity || !frequency) return null;
  return SHIPMENT_PRICES[quantity][frequency];
}

// Returns the monthly price for the order summary modal
// Returns null if either value hasn't been selected yet
export function getMonthlyPrice(
  quantity: Quantity | null,
  frequency: DeliveryFrequency,
): number | null {
  if (!quantity || !frequency) return null;
  const shipmentPrice = SHIPMENT_PRICES[quantity][frequency];
  const multiplier = FREQUENCY_MULTIPLIER[frequency];
  return shipmentPrice * multiplier;
}

// Formats price as a string with 2 decimal places e.g. "$28.80"
export function formatPrice(price: number | null): string {
  if (price === null) return "0.00";
  return `$${price.toFixed(2)}`;
}

// Builds the order summary text based on current selections
// Uses underscores as placeholders for unselected values
export function getOrderSummaryText(state: SubscriptionState): string {
  const { preference, coffeeType, quantity, grind, frequency } = state;

  // Capsule summary omits grind
  if (preference === "Capsule") {
    return `I drink my coffee using Capsules, with ${coffeeType ?? "____"} beans, ${quantity ?? "____"}, sent to me ${frequency ?? "____"}.`;
  }

  return `I drink my coffee as ${preference ?? "____"}, with ${coffeeType ?? "____"} beans, ${quantity ?? "____"}, ground ala ${grind ?? "____"}, sent to me ${frequency ?? "____"}.`;
}
