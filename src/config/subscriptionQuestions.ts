export interface SubscriptionOption {
  id: string;
  title: string;
  description: string;
}

export interface SubscriptionQuestion {
  id: string;
  linkText: string;
  question: string;
  options: SubscriptionOption[];
}
