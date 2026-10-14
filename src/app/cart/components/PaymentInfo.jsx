"use client"
import { PRICE_OF_INSULATED_CLAY_BOX, PROMO_CODE_ARRAY } from "../../(constants)/variable";
import useCartStore from "../../(stores)/CartStore";
import { useState } from "react";

export default function PaymentInfo() {
    let total = useCartStore(state => state.total)
    let grandTotal = useCartStore(state => state.grandTotal)
    let cart = useCartStore(state => state.cart);
    let updateGrandTotal = useCartStore(state => state.updateGrandTotal)
    

    const [promoCode, setPromoCode] = useState("");
    const [promoCodeMsg, setPromoCodeMsg] = useState("");
    const [isApplied, setIsApplied] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        const isFound = PROMO_CODE_ARRAY?.find((item) => item === promoCode.trim());
        PROMO_CODE_ARRAY?.filter((item) => item === promoCode.trim());

        if (isFound) {
            setPromoCodeMsg("Feast Promo Applied");
            setIsApplied(true);

            // u need to update the total
            updateGrandTotal({
            amount: 200,
            sign: "minus",
            });
        } else {
            setPromoCodeMsg("Invalid Promo Code");
            setIsApplied(false);
        }
        }
    };

    return (
        <div className="payment-card">
        {/* Header */}
        <div className="payment-header">
            <h2>Payment Summary</h2>
            <span className="dish-count">{cart.length} DISHES</span>
        </div>

        {/* Breakdown List */}
        <div className="payment-breakdown">
            <div className="payment-row">
            <span className="row-label">Items Subtotal</span>
            <span className="row-value">ETB {total.toLocaleString()}</span>
            </div>

            <div className="payment-row">
            <span className="row-label">
                100% Teff Upgrade <span className="icon-check">✓</span>
            </span>
            <span className="row-value">ETB 60</span>
            </div>

            <div className="payment-row">
            <span className="row-label">
                Insulated Clay-Pak Box <span className="icon-flame">🔥</span>
            </span>
            <span className="row-value">ETB {PRICE_OF_INSULATED_CLAY_BOX || 40}</span>
            </div>

            <div className="payment-row">
            <span className="row-label">Delivery Fee (Bole Zone)</span>
            <span className="row-value free-text">FREE</span>
            </div>
        </div>

        {/* Promo Code Box */}
        {isApplied ? (
            <div className="promo-applied-box">
            <div className="promo-left">
                <span className="promo-tag-icon">🏷️</span>
                <div>
                <div className="promo-code-title">{promoCode}</div>
                <div className="promo-subtext">{promoCodeMsg}</div>
                </div>
            </div>
            <div className="promo-discount">-ETB 200</div>
            </div>
        ) : (
            <div className="promo-input-wrapper">
            <input
                type="text"
                className="promo-input"
                placeholder="Enter Promo Code & press Enter"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            {promoCodeMsg && <p className="promo-error-msg">{promoCodeMsg}</p>}
            </div>
        )}

        {/* Grand Total Box */}
        <div className="grand-total-box">
            <div className="total-left">
            <h3>Grand Total</h3>
            <p>VAT & Catering Surcharge Inclusive</p>
            </div>
            <div className="total-right">
            ETB {grandTotal.toLocaleString()}
            </div>
        </div>
        </div>
    );
}