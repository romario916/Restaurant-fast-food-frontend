import { contact } from "../data/contact";
import type { MenuItem } from "../data/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface CustomerInfo {
  type: "SUR PLACE" | "LIVRAISON";
  name: string;
  phone: string;
  table?: string;
  address?: string;
}

export const getWhatsAppLink = (message?: string): string => {
  const finalMessage =
    message?.trim() || contact.defaultMessage;

  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    finalMessage,
  )}`;
};

export const getOrderMessage = (
  itemName: string,
): string => {
  return `Bonjour GAMANTA !

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
  customerInfo: CustomerInfo,
): string => {
  const items = cartItems
    .map(
      ({ item, quantity }) =>
        `- ${item.name} x${quantity} : ${(
          item.price * quantity
        ).toLocaleString("fr-FR")} Ar`,
    )
    .join("\n");

  let customerInfoText = `Type de commande : ${customerInfo.type}

Nom : ${customerInfo.name}
Téléphone : ${customerInfo.phone}`;

  if (
    customerInfo.type === "SUR PLACE" &&
    customerInfo.table?.trim()
  ) {
    customerInfoText += `\nTable : ${customerInfo.table}`;
  }

  if (
    customerInfo.type === "LIVRAISON" &&
    customerInfo.address?.trim()
  ) {
    customerInfoText += `\nAdresse de livraison : ${customerInfo.address}`;
  }

  return `Bonjour GAMANTA !

NOUVELLE COMMANDE

${customerInfoText}

------------------------------

COMMANDE

${items}

───────────────────
TOTAL : ${total.toLocaleString("fr-FR")} Ar
───────────────────

Merci de confirmer la commande.`;
};

export const getContactFormMessage = (
  name: string,
  phone: string,
  message: string,
): string => {
  return `Bonjour GAMANTA !

Je vous contacte depuis votre site internet.

Nom : ${name}
Téléphone : ${phone}

Message :
${message}

Restaurant :
${contact.address}

Merci de votre retour.`;
};

export const openWhatsApp = (
  message?: string,
): void => {
  const url = getWhatsAppLink(message);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer",
  );
};