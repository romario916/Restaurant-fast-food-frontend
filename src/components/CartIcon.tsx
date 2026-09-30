import { ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";

interface CartIconProps {
  onClick: () => void;
}

const CartIcon = ({ onClick }: CartIconProps) => {
  const { totalItems } = useCart();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Panier, ${totalItems} article${
        totalItems > 1 ? "s" : ""
      }`}
      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      <ShoppingBag size={20} />

      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white shadow-md">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon;