import {
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { getCartOrderMessage, openWhatsApp } from "../utils/whatsapp";
import QuantitySelector from "./QuantitySelector";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({
  isOpen,
  onClose,
}: CartDrawerProps) => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      return;
    }

    const message = getCartOrderMessage(items, totalPrice);

    openWhatsApp(message);
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Fermer le panier"
          onClick={onClose}
          className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              TENDEM
            </p>

            <h2 className="mt-1 text-2xl font-black text-black">
              Votre panier
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le panier"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black transition hover:bg-black hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <ShoppingBag
                size={34}
                className="text-gray-400"
              />
            </div>

            <h3 className="text-xl font-black text-black">
              Votre panier est vide
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
              Ajoutez vos plats préférés et retrouvez-les ici
              avant de commander sur WhatsApp.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Découvrir le menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
              <span className="text-sm font-semibold text-gray-500">
                {totalItems} article
                {totalItems > 1 ? "s" : ""}
              </span>

              <button
                type="button"
                onClick={clearCart}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 transition hover:text-red-800"
              >
                <Trash2 size={14} />
                Vider
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {items.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 p-3"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 shrink-0 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="truncate text-sm font-black text-black">
                          {item.name}
                        </h3>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          aria-label={`Supprimer ${item.name}`}
                          className="shrink-0 text-gray-400 transition hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <p className="mt-1 text-sm font-bold text-red-600">
                        {item.price.toLocaleString("fr-FR")} Ar
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <QuantitySelector
                          quantity={quantity}
                          onDecrease={() =>
                            updateQuantity(
                              item.id,
                              quantity - 1,
                            )
                          }
                          onIncrease={() =>
                            updateQuantity(
                              item.id,
                              quantity + 1,
                            )
                          }
                        />

                        <span className="text-sm font-black text-black">
                          {(
                            item.price * quantity
                          ).toLocaleString("fr-FR")}{" "}
                          Ar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 bg-gray-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">
                  Total
                </span>

                <span className="text-2xl font-black text-black">
                  {totalPrice.toLocaleString("fr-FR")} Ar
                </span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Commander via WhatsApp
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Aucun paiement en ligne. Votre commande sera
                confirmée directement avec TENDEM sur WhatsApp.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;