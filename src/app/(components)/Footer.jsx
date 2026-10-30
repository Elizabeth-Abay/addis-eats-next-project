"use client"
import { HiOutlineFire, HiOutlineUser, HiOutlineClipboardDocumentList, HiOutlineCog6Tooth , HiCog6Tooth } from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import CartButton from "./CartButton";
import { usePathname, useRouter } from "next/navigation";
import LogOutButton from "./LogOutButton";
import './style.css'

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Specials", path: "/", icon: HiOutlineFire },
    { label: "Menu", path: "/menu", icon: LuUtensilsCrossed },
    { label: "Cart", path: "/cart", isCustom: true },
    { label: "Account", path: "/auth", icon: HiOutlineUser },
    { label: "History", path: "/order-history", icon: HiOutlineClipboardDocumentList },
    { label: "Kitchen", path: "/kitchen", icon: HiOutlineCog6Tooth },
    { label : "Orders" , path : "/orders" , icon : HiCog6Tooth}
  ];

  return (
    <nav className="footer-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;

        if (item.isCustom) {
          return (
            <div key={item.path} className={`nav-item ${isActive ? "active" : ""}`}>
              <CartButton className="nav-icon" />
              <span className="nav-label">Cart</span>
            </div>
          );
        }

      

        return (
          <button
            key={item.path}
            onClick={() => router.replace(item.path)}
            className={`nav-item ${isActive ? "active" : ""}`}
          >
            <Icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}

      <div className="nav-logout-wrapper">
        <LogOutButton />
      </div>
    </nav>
  );
}