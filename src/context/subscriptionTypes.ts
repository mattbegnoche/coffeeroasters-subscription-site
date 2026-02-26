export type CoffeePreference = "Capsule" | "Filter" | "Espresso";
export type CoffeeType = "Single Origin" | "Decaf" | "Blended";
export type Quantity = "250g" | "500g" | "1000g";
export type GrindOption =
  | "Wholebean"
  | "Cafetiére"
  | "Filter"
  | "Aeropress"
  | "Espresso"
  | null;
export type DeliveryFrequency =
  | "Every Week"
  | "Every 2 Weeks"
  | "Every Month"
  | null;

export type SubscriptionState = {
  preference: CoffeePreference | null;
  coffeeType: CoffeeType | null;
  quantity: Quantity | null;
  grind: GrindOption;
  frequency: DeliveryFrequency;
};
