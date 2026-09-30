import { Check, Flame, Leaf, Plus, Sparkles } from "lucide-react";

import type { MenuItem } from "../data/menu";
import { useCart } from "../context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  const badgeConfig = {
    Populaire: {
      icon: Sparkles,
      className: "bg-orange-500 text-white",
    },
    Nouveau: {
      icon: Sparkles,
      className: "bg-red-600 text-white",
    },
    Épicé: {
      icon: Flame,
      className: "bg-red-600 text-white",
    },
    Végétarien: {
      icon: Leaf,
      className: "bg-gray-800 text-white",
    },
  };

  const badge = item.badge ? badgeConfig[item.badge] : null;
  const BadgeIcon = badge?.icon;

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        {badge && BadgeIcon && (
          <span
            className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide shadow-lg ${badge.className}`}
          >
            <BadgeIcon size={13} />
            {item.badge}
          </span>
        )}

        {!item.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/65">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
              Indisponible
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-black transition-colors group-hover:text-orange-600">
            {item.name}
          </h3>

          <span className="shrink-0 text-lg font-black text-red-600">
            {item.price.toLocaleString("fr-FR")} Ar
          </span>
        </div>

        <p className="mb-5 min-h-12 text-sm leading-6 text-gray-600">
          {item.description}
        </p>

        <button
          type="button"
          disabled={!item.available}
          onClick={() => addToCart(item)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {item.available ? (
            <>
              <Plus size={18} />
              Ajouter au panier
            </>
          ) : (
            <>
              <Check size={18} />
              Indisponible
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default MenuItemCard;