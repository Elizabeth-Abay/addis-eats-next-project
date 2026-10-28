"use client"
import { PRICE_OF_INSULATED_CLAY_BOX } from "../../(constants)/variable";
import useCartStore from "../../(stores)/CartStore";
import { useState } from "react";

export default function PaymentInfo() {
    let total = useCartStore(state => state.total)
    let grandTotal = useCartStore(state => state.grandTotal)
    let cart = useCartStore(state => state.cart);
    let updateGrandTotal = useCartStore(state => state.updateGrandTotal)
    

    const [isApplied, setIsApplied] = useState(false);

   

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