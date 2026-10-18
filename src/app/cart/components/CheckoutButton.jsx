"use client"
import { useRouter } from "next/navigation";
import useCartStore from "../../(stores)/CartStore";

export default function CheckoutButton() {
  let router = useRouter();

  let price = useCartStore(state => state.total)


  const formattedPrice = Number(price).toLocaleString('en-US');
  //// // console.log(`price is ${price} , formatted price is ${formattedPrice} `);

  return (
    <button className="checkout-btn" onClick={
        () =>router.push('/checkout-page')
    } type="button">
      {/* Left section: Cloche Icon + Text */}
      <div className="checkout-btn-left">
        <svg
          className="cloche-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Food Cover / Cloche Icon */}
          <path d="M12 4v2" />
          <path d="M4 18h16a1 1 0 0 0 1-1 8 8 0 0 0-18 0 1 1 0 0 0 1 1z" />
          <path d="M2 20h20" />
        </svg>
        <span className="checkout-text">Proceed to Checkout</span>
      </div>

      {/* Right section: Price + Arrow */}
      <div className="checkout-btn-right">
        <span className="checkout-price">ETB {formattedPrice}</span>
        <svg
          className="arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}