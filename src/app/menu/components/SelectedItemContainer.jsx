"use client";

import { useRouter } from "next/navigation";
import useCartStore from "@/app/(stores)/CartStore";
import { FaBagShopping, FaArrowRight } from "react-icons/fa6";

export default function SelectedItemsContainer() {
    const router = useRouter();
    const cart = useCartStore((state) => state.cart);
    const totalPrice = useCartStore((state) => state.total);

    const itemCount = cart?.length || 0;

    // Optional: Hide container when cart is empty
    if (itemCount === 0) return null;

    return (
        <div className="floatingBar">
            <div className="basketContentLeft">
                <div className="iconBadgeWrapper">
                    <FaBagShopping size={20} />
                    <span className="itemCount">{itemCount}</span>
                </div>

                <div className="basketInfo">
                    <div className="priceDisplay">
                        <span className="currency">ETB</span>
                        <span className="amount">
                            {(totalPrice || 0).toLocaleString()}
                        </span>
                    </div>

                    <p className="basketSubtitle">Includes pure teff injera rolls</p>

                </div>
            </div>

            <button
                className="viewBasketBtn"
                onClick={() => router.push("/cart")}
            >
                <span>View Basket</span>
                <FaArrowRight size={14} />
            </button>
        </div>
    )       
}