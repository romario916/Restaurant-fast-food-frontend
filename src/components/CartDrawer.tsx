
import {
  MapPin,
  MessageCircle,
  ShoppingBag,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

import { useCart } from "../context/CartContext";
import {
  getCartOrderMessage,
  openWhatsApp,
} from "../utils/whatsapp";
import QuantitySelector from "./QuantitySelector";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type OrderType = "onsite" | "delivery";

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

  const [isSending, setIsSending] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [orderType, setOrderType] =
    useState<OrderType>("onsite");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [table, setTable] = useState("");
  const [address, setAddress] = useState("");

  const handleOpenOrderForm = () => {
    if (items.length === 0 || totalPrice <= 0) {
      return;
    }

    setShowOrderForm(true);
  };

  const handleCloseOrderForm = () => {
    if (isSending) {
      return;
    }

    setShowOrderForm(false);
  };

  const handleOrderTypeChange = (type: OrderType) => {
    setOrderType(type);

    if (type === "onsite") {
      setAddress("");
    } else {
      setTable("");
    }
  };

  const handleWhatsAppOrder = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    if (items.length === 0 || totalPrice <= 0) {
      return;
    }

    if (!name.trim() || !phone.trim()) {
      return;
    }

    if (
      orderType === "delivery" &&
      !address.trim()
    ) {
      return;
    }

    setIsSending(true);

    /*
     * Copie du panier actuel.
     * Le message est créé avant de vider le panier.
     */
    const orderItems = items.map((cartItem) => ({
      item: cartItem.item,
      quantity: cartItem.quantity,
    }));

    const customerInfo =
      orderType === "onsite"
        ? {
            type: "SUR PLACE" as const,
            name: name.trim(),
            phone: phone.trim(),
            table: table.trim(),
          }
        : {
            type: "LIVRAISON" as const,
            name: name.trim(),
            phone: phone.trim(),
            address: address.trim(),
          };

    /*
     * Un seul appel.
     * getCartOrderMessage construit tout le message.
     */
    const cartMessage = getCartOrderMessage(
      orderItems,
      totalPrice,
      customerInfo,
    );

    /*
     * Ouverture de WhatsApp avec UNE SEULE commande.
     */
    openWhatsApp(cartMessage);

    /*
     * Nettoyage du panier.
     */
    clearCart();

    /*
     * Nettoyage du formulaire.
     */
    setName("");
    setPhone("");
    setTable("");
    setAddress("");
    setOrderType("onsite");
    setShowOrderForm(false);

    onClose();

    setTimeout(() => {
      setIsSending(false);
    }, 1000);
  };

  return (
    <>
      {/* Overlay du panier */}
      {isOpen && (
        <button
          type="button"
          aria-label="Fermer le panier"
          onClick={onClose}
          className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Panier */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              GAMANTA
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

        {/* Panier vide */}
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
              Ajoutez vos plats préférés et retrouvez-les
              ici avant de commander sur WhatsApp.
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
            {/* Informations panier */}
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

            {/* Liste des produits */}
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

            {/* Total */}
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
                onClick={handleOpenOrderForm}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >
                <MessageCircle size={18} />
                Commander via WhatsApp
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                Renseignez vos informations avant de
                continuer vers WhatsApp.
              </p>
            </div>
          </>
        )}
      </aside>

      {/* Formulaire de commande */}
      {showOrderForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                  GAMANTA
                </p>

                <h2 className="mt-1 text-2xl font-black text-black">
                  Finaliser la commande
                </h2>
              </div>

              <button
                type="button"
                onClick={handleCloseOrderForm}
                aria-label="Fermer le formulaire"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black transition hover:bg-black hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleWhatsAppOrder}
              className="max-h-[80vh] space-y-5 overflow-y-auto p-6"
            >
              {/* Type de commande */}
              <div>
                <label className="mb-3 block text-sm font-black text-black">
                  Comment souhaitez-vous recevoir votre
                  commande ?
                </label>

                <div className="grid grid-cols-2 gap-3">
                  {/* Sur place */}
                  <button
                    type="button"
                    onClick={() =>
                      handleOrderTypeChange("onsite")
                    }
                    className={`rounded-2xl border-2 p-4 text-left transition ${
                      orderType === "onsite"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingBag
                        size={20}
                        className={
                          orderType === "onsite"
                            ? "text-orange-500"
                            : "text-gray-500"
                        }
                      />

                      <span className="font-black text-black">
                        Sur place
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      Je mange au restaurant
                    </p>
                  </button>

                  {/* Livraison */}
                  <button
                    type="button"
                    onClick={() =>
                      handleOrderTypeChange("delivery")
                    }
                    className={`rounded-2xl border-2 p-4 text-left transition ${
                      orderType === "delivery"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={20}
                        className={
                          orderType === "delivery"
                            ? "text-orange-500"
                            : "text-gray-500"
                        }
                      />

                      <span className="font-black text-black">
                        Livraison
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      Je souhaite être livré
                    </p>
                  </button>
                </div>
              </div>

              {/* Nom */}
              <div>
                <label
                  htmlFor="order-name"
                  className="mb-2 block text-sm font-black text-black"
                >
                  Nom
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="order-name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    required
                    placeholder="Votre nom"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-black outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div>
                <label
                  htmlFor="order-phone"
                  className="mb-2 block text-sm font-black text-black"
                >
                  Numéro de téléphone
                </label>

                <input
                  id="order-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                  required
                  placeholder="032 00 000 00"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                />
              </div>

              {/* Table */}
              {orderType === "onsite" && (
                <div>
                  <label
                    htmlFor="order-table"
                    className="mb-2 block text-sm font-black text-black"
                  >
                    Numéro de table
                    <span className="ml-2 font-normal text-gray-400">
                      (facultatif)
                    </span>
                  </label>

                  <input
                    id="order-table"
                    type="text"
                    value={table}
                    onChange={(event) =>
                      setTable(event.target.value)
                    }
                    placeholder="Ex. Table 8"
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              )}

              {/* Adresse */}
              {orderType === "delivery" && (
                <div>
                  <label
                    htmlFor="order-address"
                    className="mb-2 block text-sm font-black text-black"
                  >
                    Adresse de livraison
                  </label>

                  <textarea
                    id="order-address"
                    value={address}
                    onChange={(event) =>
                      setAddress(event.target.value)
                    }
                    required
                    rows={4}
                    placeholder="Votre adresse complète..."
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
              )}

              {/* Résumé */}
              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-600">
                    Total de la commande
                  </span>

                  <span className="text-xl font-black text-black">
                    {totalPrice.toLocaleString("fr-FR")} Ar
                  </span>
                </div>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <MessageCircle size={19} />

                {isSending
                  ? "Préparation..."
                  : "Continuer sur WhatsApp"}
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                Aucun paiement en ligne. La commande sera
                confirmée directement avec GAMANTA sur WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDrawer;



