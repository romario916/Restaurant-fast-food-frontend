import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { openWhatsApp } from "../utils/whatsapp";
import CartDrawer from "./CartDrawer";

const navigation = [
  { name: "Accueil", to: "/" },
  { name: "Menu", to: "/menu" },
  { name: "Galerie", to: "/galerie" },
  { name: "À propos", to: "/a-propos" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 shadow-xl backdrop-blur-md"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
       <Link
  to="/"
  onClick={closeMobileMenu}
  className="group flex items-center gap-3"
>
  {/* Logo circulaire */}
  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-white shadow-lg transition-all duration-300 group-hover:border-orange-500 group-hover:scale-105">
    <img
      src="logo.webp"
      alt="Logo GAMANTA"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Nom */}
  <span className="text-2xl font-black tracking-[-0.06em] text-white sm:text-3xl">
    GAMANTA
    <span className="text-orange-500">.</span>
  </span>
</Link>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-bold transition-colors duration-300 ${
                    isActive
                      ? "text-orange-400"
                      : "text-white/80 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Panier, ${totalItems} article${
                totalItems > 1 ? "s" : ""
              }`}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-orange-500"
            >
              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40"
            >
              Commander
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Ouvrir le panier"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <ShoppingBag size={19} />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((previous) => !previous)
              }
              aria-label={
                isMobileMenuOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            >
              {isMobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 lg:hidden ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-bold transition ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  openWhatsApp();
                }}
                className="mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-4 py-3 text-sm font-black text-white"
              >
                Commander via WhatsApp
              </button>
            </div>
          </nav>
        </div>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Navbar;