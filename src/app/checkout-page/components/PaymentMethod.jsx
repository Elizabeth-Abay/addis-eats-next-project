"use client"
import useOrderStore from "@/app/(stores)/OrderStore";
import { useState } from "react";

export default function PaymentMethodBox({ item, isSelected: externalIsSelected, onSelect: externalOnSelect }) {
    
    let setPaymentMethod = useOrderStore(state => state.setPaymentMethod);

    // Destructure item properties safely
    const { name, logo, description, requiredElts } = item || {};
    const { text, placeholder, prefix = "+251" } = requiredElts || {};

    // Internal state if parent doesn't control selection
    const [internalIsSelected, setInternalIsSelected] = useState(false);
    const [inputValue, setInputValue] = useState("");

    // Determine selection status
    const isSelected = externalIsSelected ?? internalIsSelected;
    const handleSelect = externalOnSelect || (() => setInternalIsSelected(true));

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        setPaymentMethod({ name, value: inputValue });
    };

    const badgeText = "Matched with profile";

    return (
        <form
        className={`payment-box ${isSelected ? "selected" : ""}`}
        onClick={handleSelect}
        onSubmit={handleSubmit}
        >
        {/* Top Header Row */}
        <div className="payment-box-header">
            <div className="payment-box-info">
            <div className="payment-logo-wrapper">
                {typeof logo === "string" ? (
                <img src="{logo}" alt={name} className="payment-logo" />
                ) : (
                logo
                )}
            </div>

            <div className="payment-details">
                <h4 className="payment-title">{name}</h4>
                <p className="payment-description">{description}</p>
            </div>
            </div>

            {/* Radio Button Selector */}
            <div className="payment-radio-wrapper">
            <input
                type="radio"
                checked={isSelected}
                onChange={handleSelect}
                className="payment-radio"
            />
            <span className="custom-radio"></span>
            </div>
        </div>

        {/* Conditional Input Section */}
        {isSelected && requiredElts && (
            <div className="payment-input-section" onClick={(e) => e.stopPropagation()}>
            <div className="payment-label-row">
                <span className="input-label">{text}</span>
                {badgeText && <span className="input-badge">{badgeText}</span>}
            </div>

            <div className="input-container">
                {prefix && (
                <div className="input-prefix">
                    <span className="flag-icon">🇪🇹</span>
                    <span className="prefix-code">{prefix}</span>
                </div>
                )}
                <input
                type="text"
                className="payment-input"
                placeholder={placeholder || "Enter details..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                />
            </div>

            {/* Submit Action Button */}
            <button type="submit" className="payment-submit-btn">
                Save {name} Method
            </button>
            </div>
        )}
        </form>
    );
}