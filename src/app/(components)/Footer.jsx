"use client"
import { HiOutlineFire, HiOutlineUser, HiOutlineClipboardDocumentList, HiOutlineCog6Tooth , HiCog6Tooth } from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import CartButton from "./CartButton";
import { usePathname, useRouter } from "next/navigation";
import LogOutButton from "./LogOutButton";
import './style.css'
import { useState , useEffect } from "react";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  let [ userRole , setUserRole] = useState('user');

  useEffect(() => {
    try {
      // Assuming you stored your session or user info as a JSON object in localStorage
      // e.g., localStorage.setItem('sessionInfo', JSON.stringify({ role: 'admin', userId: '...' }))
      const userRole = localStorage.getItem('role');
      if (sessionData) {
        setUserRole(userRole);
      }
    } catch (e) {
      console.error("Failed to parse session info from localStorage", e);
    }
  }, [pathname]);

  const navItems = [
    { label: "Specials", path: "/", icon: HiOutlineFire },
    { label: "Menu", path: "/menu", icon: LuUtensilsCrossed },
    { label: "Cart", path: "/cart", isCustom: true },
    { label: "Account", path: "/auth", icon: HiOutlineUser },
    { label: "History", path: "/order-history", icon: HiOutlineClipboardDocumentList },
    { label: "Kitchen", path: "/kitchen", icon: HiOutlineCog6Tooth , allowedFor : ['admin'] },
    { label : "Orders" , path : "/orders" , icon : HiCog6Tooth , allowedFor : ['admin']}
  ];


  const navDisplayed = navItems.filter(
    item => {
      if (!item.allowedFor) return true;

      return item.allowedFor.includes(userRole)
    }
  )

  return (
    <nav className="footer-nav">
      {navDisplayed.map((item) => {
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