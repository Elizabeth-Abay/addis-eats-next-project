"use client";

import { useRouter } from "next/navigation";
import useCartStore from "@/app/(stores)/CartStore";
import { FaBagShopping } from "react-icons/fa6";

export default function SelectedItemsContainer() {
    const router = useRouter();
    const cart = useCartStore(state => state.cart);
    const totalPrice = useCartStore(state => state.total);

    const itemCount = cart?.length || 0;


    return (
        <div className="floatingCartContainer">
        {/* Price Tooltip (Pops up on hover) */}
            <div className="cartTooltip">
                <div className="priceDisplay">
                    <span className="currency">ETB</span>
                    <span className="amount">
                    {(totalPrice || 0).toLocaleString()}
                    </span>
                </div>
                <p className="basketSubtitle">Includes pure teff injera rolls</p>
            </div>

        {/* Cart Trigger Button */}
        <button
            className="cartButton"
            onClick={() => router.push("/cart")}
            aria-label="View Cart"
        >
            <FaBagShopping size={22} />
            <span className="itemCount">{itemCount}</span>
        </button>
        </div>
    );
}