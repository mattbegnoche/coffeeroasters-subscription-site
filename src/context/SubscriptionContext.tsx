import { createContext, useContext, useReducer } from "react";
import type {
  CoffeePreference,
  CoffeeType,
  Quantity,
  GrindOption,
  DeliveryFrequency,
  SubscriptionState,
} from "./subscriptionTypes";

export type SubscriptionAction =
  | { type: "SET_PREFERENCE"; payload: CoffeePreference }
  | { type: "SET_COFFEE_TYPE"; payload: CoffeeType }
  | { type: "SET_QUANTITY"; payload: Quantity }
  | { type: "SET_GRIND"; payload: GrindOption }
  | { type: "SET_FREQUENCY"; payload: DeliveryFrequency }
  | { type: "RESET" };

const initialState: SubscriptionState = {
  preference: null,
  coffeeType: null,
  quantity: null,
  grind: null,
  frequency: null,
  isCapsule: false,
};

function subscriptionReducer(
  state: SubscriptionState,
  action: SubscriptionAction,
): SubscriptionState {
  switch (action.type) {
    case "SET_PREFERENCE": {
      // When Capsule is selected, we null out grind since that section
      // becomes disabled and any previous selection is no longer valid
      const checkCapsule = action.payload === "Capsule";
      return {
        ...state,
        preference: action.payload,
        grind: checkCapsule ? null : state.grind,
        isCapsule: checkCapsule,
      };
    }

    case "SET_COFFEE_TYPE": {
      return {
        ...state,
        coffeeType: action.payload,
      };
    }

    case "SET_QUANTITY": {
      return {
        ...state,
        quantity: action.payload,
      };
    }

    case "SET_GRIND": {
      if (state.preference === "Capsule") {
        return state;
      }
      return {
        ...state,
        grind: action.payload,
      };
    }

    case "SET_FREQUENCY": {
      return {
        ...state,
        frequency: action.payload,
      };
    }

    case "RESET": {
      return initialState;
    }

    // TypeScript exhaustive check — if a new action type is added
    // to the union but not handled here, this will cause a compile error
    default: {
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
    }
  }
}

type SubscriptionContextType = {
  state: SubscriptionState;
  dispatch: React.Dispatch<SubscriptionAction>;
};

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

export function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(subscriptionReducer, initialState);

  return (
    <SubscriptionContext.Provider value={{ state, dispatch }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider",
    );
  }
  return context;
}
