"use client";

import useCartStore from "../../(stores)/CartStore";

export default function CartBox({ item }) {
    let updateCart = useCartStore((state) => state.updateCart);
    let removeItem = useCartStore((state) => state.removeItem);

    let { id, name, amount, price, customOrder } = item;
    let { spiceLevel, injera, sideAccents } = customOrder;

    let min = 1;

    let increment = () => {
        updateCart({ id, customOrder, amount: amount + 1, price });
    };

    let decrement = () => {
        updateCart({ id, customOrder, amount: amount - 1, price });
    };

    let handleRemove = () => {
        removeItem({ id, customOrder });
    };

    return (
        <div className="cart-card">
        <div className="cart-card-body">
            <div className="cart-info">
            <div className="cart-header">
                <h3 className="cart-title">{name}</h3>
                <button
                type="button"
                className="cart-remove-btn"
                onClick={handleRemove}
                aria-label="Remove item"
                >
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    />
                </svg>
                </button>
            </div>

            <div className="cart-options-group">
                <p className="cart-subtext">
                <span className="cart-subtext-label">Injera:</span> {injera}
                </p>

                {spiceLevel && (
                <p className="cart-subtext">
                    <span className="cart-subtext-label">Spice:</span> {spiceLevel}
                </p>
                )}

                {sideAccents && sideAccents.length > 0 && (
                <div className="cart-sides-list">
                    <span className="cart-subtext-label">Sides:</span>
                    <div className="cart-badges-wrapper">
                    {sideAccents.map((accent, index) => (
                        <span key={index} className="cart-accent-badge">
                        {accent}
                        </span>
                    ))}
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>

        {/* Bottom Row: Price & Quantity Pill */}
        <div className="cart-card-footer">
            <div className="cart-price">ETB {(price * amount).toLocaleString()}</div>

            <div className="cart-qty-pill">
            <button
                type="button"
                className="qty-btn"
                onClick={decrement}
                disabled={amount <= min}
                aria-label="Decrease quantity"
            >
                −
            </button>

            <input
                type="number"
                value={amount}
                className="qty-val"
                readOnly
                min={min}
            />

            <button
                type="button"
                className="qty-btn"
                onClick={increment}
                aria-label="Increase quantity"
            >
                +
            </button>
            </div>
        </div>
        </div>
    );
}