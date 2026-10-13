"use client"
import { useRouter } from "next/navigation";
import useCartStore from "../(stores)/CartStore";
import { FaCartShopping } from "react-icons/fa6";


// the cart will have a count passed to it
export default function CartButton() {
    let cart = useCartStore(state => state.cart);
    let count = cart.length;

    let router = useRouter();
    let onClick = () => {
        router.push('/cart' )
    }
    return (
        <button className="cart-button" onClick={onClick}>
        <FaCartShopping size={24} />

        {count > 0 && (
            <span
            className="cart-badge"
            style={{
                position: "absolute",
                top: "-6px",          /* Pulls badge up above the cart */
                right: "-6px",        /* Shifts badge to the top-right corner */
                backgroundColor: "#ef4444", // Red badge color
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "bold",
                borderRadius: "9999px", /* Pills shape for multi-digits */
                minWidth: "18px",
                height: "18px",
                padding: "0 4px",     /* Extra spacing for "99+" */
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                boxShadow: "0 0 0 2px #ffffff", /* Border gap against cart icon */
            }}
            >
            {count > 99 ? "99+" : count}
            </span>
        )}
        </button>

    )
}