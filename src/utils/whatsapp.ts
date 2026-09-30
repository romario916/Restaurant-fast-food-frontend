
import { contact } from "../data/contact";
import type { MenuItem } from "../data/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export const getWhatsAppLink = (message?: string): string => {
  const finalMessage = message?.trim() || contact.defaultMessage;

  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    finalMessage,
  )}`;
};

export const getOrderMessage = (itemName: string): string => {
  return `Bonjour TENDEM,

Je souhaite commander :

Produit : ${itemName}

Restaurant :
${contact.address}

Pouvez-vous me confirmer la disponibilité et le prix ?

Merci.`;
};

export const getCartOrderMessage = (
  cartItems: CartItem[],
  total: number,
): string => {
  const items = cartItems
    .map(
      ({ item, quantity }) =>
        `- ${item.name} x${quantity} : ${(
          item.price * quantity
        ).toLocaleString("fr-FR")} Ar`,
    )
    .join("\n");

  return `Bonjour TENDEM,

Je souhaite passer la commande suivante :

${items}

------------------------------
TOTAL : ${total.toLocaleString("fr-FR")} Ar
------------------------------

Restaurant :
${contact.address}

Merci de confirmer ma commande et de m'indiquer les informations nécessaires.`;
};

export const getContactFormMessage = (
  name: string,
  phone: string,
  message: string,
): string => {
  return `Bonjour TENDEM,

Je vous contacte depuis votre site internet.

Nom : ${name}
Téléphone : ${phone}

Message :
${message}

Restaurant :
${contact.address}

Merci de votre retour.`;
};

export const openWhatsApp = (message?: string): void => {
  window.open(
    getWhatsAppLink(message),
    "_blank",
    "noopener,noreferrer",
  );
};

