"use client";

import { useRouter, usePathname } from "next/navigation";
import { 
    HiOutlineFire, 
    HiOutlineUser, 
    HiOutlineClipboardDocumentList, 
    HiOutlineCog6Tooth, 
    HiCog6Tooth,
    HiOutlineChartBar
} from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import { RESTAURANT_NAME } from "../(constants)/variable";
import CartButton from "./CartButton";
import NameCircle from "./nameCircle";
import LogOutButton from "./LogOutButton";
import userStore from "../(stores)/userStore";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const role = userStore((state) => state.role);

    const navItems = [
        { label: "Specials", path: "/", icon: HiOutlineFire },
        { label: "Menu", path: "/menu", icon: LuUtensilsCrossed },
        { label: "Cart", path: "/cart", isCustom: true },
        { label: "History", path: "/order-history", icon: HiOutlineClipboardDocumentList },
        { label: "Analytics", path: "/dashboard", icon: HiOutlineChartBar, allowedFor: ["admin"] },
        { label: "Kitchen", path: "/kitchen", icon: HiOutlineCog6Tooth, allowedFor: ["admin"] },
        { label: "Orders", path: "/orders", icon: HiCog6Tooth, allowedFor: ["admin"] },
    ];

    const navDisplayed = navItems.filter((item) => {
        if (!item.allowedFor) return true;
        return item.allowedFor.includes(role);
    });

    return (
        <header className="navbar-container">
        {/* Left: Restaurant Brand */}
        <div className="navbar-left">
            <h1 className="navbar-title" onClick={() => router.push("/")}>
            {RESTAURANT_NAME}
            </h1>
        </div>

        {/* Center: Main Navigation Links (Spread Out) */}
        <nav className="navbar-center">
            {navDisplayed.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            if (item.isCustom) {
                return (
                <div
                    key={item.path}
                    onClick={() => router.push(item.path)}
                    className={`nav-item ${isActive ? "active" : ""}`}
                >
                    <CartButton className="nav-icon" />
                    <span className="nav-label">Cart</span>
                </div>
                );
            }

            return (
                <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`nav-item ${isActive ? "active" : ""}`}
                >
                <Icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
                </button>
            );
            })}
        </nav>

        {/* Right: User Profile & Hover Overlay */}
        <div className="navbar-right">
            <div className="user-profile-wrapper">
            <div className="profile-trigger">
                <NameCircle />
            </div>

            {/* Hover Overlay Dropdown */}
            <div className="user-dropdown-menu">
                <div className="dropdown-section">
                <button
                    onClick={() => router.push("/auth")}
                    className="dropdown-item"
                >
                    <HiOutlineUser className="dropdown-icon" />
                    <span>Log In / Sign Up</span>
                </button>
                </div>

                <div className="dropdown-divider"></div>

                <div className="dropdown-section">
                <div className="logout-wrapper">
                    <LogOutButton />
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
    );
}