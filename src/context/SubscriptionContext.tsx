import { createContext, useContext, useReducer } from "react";
import { subscriptionQuestions } from "../config/subscriptionQuestions";

/* 
 {
    id: "preferences",
    linkText: "Preferences",
    question: "How do you drink your coffee?",
    options: [
      {
        id: "capsule",
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: "filter",
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: "espresso",
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "bean-type",
    linkText: "Bean Type",
    question: "What type of coffee?",
    options: [
      {
        id: "single-origin",
        title: "Single origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: "decaf",
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: "blended",
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "quantity",
    linkText: "Quantity",
    question: "How much would you like?",
    options: [
      {
        id: "250g",
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: "500g",
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: "1000g",
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "grind-option",
    linkText: "Grind Option",
    question: "Want us to grind them?",
    options: [
      {
        id: "wholebean",
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: "filter",
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: "cafetiere",
        title: "Cafetière",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "deliveries",
    linkText: "Deliveries",
    question: "How often should we deliver?",
    options: [
      {
        id: "every-week",
        title: "Every week",
        description: "$14.00 per shipment. Includes free first-class shipping.",
      },
      {
        id: "every-2-weeks",
        title: "Every 2 weeks",
        description: "$17.25 per shipment. Includes free priority shipping.",
      },
      {
        id: "every-month",
        title: "Every month",
        description: "$22.50 per shipment. Includes free priority shipping.",
      },
    ],
  },


The interactive subscription page has a number of specific behaviours, which are listed below:

- If "Capsule" is selected for the first option
  - The "Want us to grind them?" section should be disabled and not able to be opened
- Order summary texts updates
  - If "Capsule" is selected, update the order summary text to:
    - "I drink my coffee **using** Capsules"
    - Remove the grind selection text
  - If "Filter" or "Espresso" are selected, update the order summary text to:
    - "I drink my coffee **as** Filter||Espresso"
    - Keep/Add the grind selection text
  - For all other selections, add the selection title in the blank space where appropriate
- Updating per shipment price (shown in "How often should we deliver?" section at the bottom) based on weight selected
  - If 250g weight is selected
    - Every Week price per shipment is $7.20
    - Every 2 Weeks price per shipment is $9.60
    - Every Month price per shipment is $12.00
  - If 500g weight is selected
    - Every Week price per shipment is $13.00
    - Every 2 Weeks price per shipment is $17.50
    - Every Month price per shipment is $22.00
  - If 1000g weight is selected
    - Every Week price per shipment is $22.00
    - Every 2 Weeks price per shipment is $32.00
    - Every Month price per shipment is $42.00
- Calculating per month cost for the Order Summary modal
  - If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
  - If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
  - If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month */
