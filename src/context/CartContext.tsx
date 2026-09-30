import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

import type { MenuItem } from "../data/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: MenuItem;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: number;
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: {
        itemId: number;
        quantity: number;
      };
    }
  | {
      type: "CLEAR_CART";
    };

interface CartContextValue {
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const STORAGE_KEY = "tendem_cart";

const initialState: CartState = {
  items: [],
};

const loadCart = (): CartState => {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);

    if (!savedCart) {
      return initialState;
    }

    const parsedCart: CartItem[] = JSON.parse(savedCart);

    if (!Array.isArray(parsedCart)) {
      return initialState;
    }

    return {
      items: parsedCart,
    };
  } catch {
    return initialState;
  }
};

const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (cartItem) => cartItem.item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.item.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            item: action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter(
          (cartItem) => cartItem.item.id !== action.payload,
        ),
      };

    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          items: state.items.filter(
            (cartItem) => cartItem.item.id !== action.payload.itemId,
          ),
        };
      }

      return {
        items: state.items.map((cartItem) =>
          cartItem.item.id === action.payload.itemId
            ? {
                ...cartItem,
                quantity: action.payload.quantity,
              }
            : cartItem,
        ),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

const CartContext = createContext<CartContextValue | undefined>(
  undefined,
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    loadCart,
  );

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.items),
      );
    } catch {
      // localStorage peut être indisponible dans certains navigateurs.
    }
  }, [state.items]);

  const addToCart = (item: MenuItem): void => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  const removeFromCart = (itemId: number): void => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  const updateQuantity = (
    itemId: number,
    quantity: number,
  ): void => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        itemId,
        quantity,
      },
    });
  };

  const clearCart = (): void => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const totalItems = state.items.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0,
  );

  const totalPrice = state.items.reduce(
    (total, cartItem) =>
      total + cartItem.item.price * cartItem.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé à l'intérieur de CartProvider.",
    );
  }

  return context;
};