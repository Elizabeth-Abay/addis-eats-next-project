"use client"
import { useState } from "react";

const INJERA_OPTIONS = [
    {
        id: "standard",
        title: "Standard Teff & Barley Blend",
        description: "Classic sourdough fermentation • Soft sponge",
        priceLabel: "Included",
        price : 0,
        isIncluded: true,
        badge: null,
    },
    {
        id: "brown-teff",
        title: "100% Pure Organic Brown Teff",
        description: "Ancient grain, deep nutty flavor & mineral rich",
        priceLabel: "+ETB 60",
        price : 60,
        isIncluded: false,
        badge: "Gluten-Free",
    },
];

export default function InjeraBaseSelector({ onInjeraChange , updateTotal }) {
    const [selectedId, setSelectedId] = useState("standard");

    const handleSelect = (id) => {
        setSelectedId(id);
        onInjeraChange(id);
        // but we gotta check if that will also cause a change in the price
        
        (id === 'brown-teff') ? updateTotal({amount : 60 , type : 'plus'}) : updateTotal({amount : 60 , type : 'minus'})

    };

    return (
        <div className="injera-selector-container">
        {/* Header */}
        <div className="injera-header">
            <div className="title-group">
            <span className="step-label">STEP 2 • REQUIRED</span>
            <h2 className="section-title">Traditional Injera Base</h2>
            </div>
            <span className="select-badge">Select 1</span>
        </div>

        {/* Options List */}
        <div className="options-list">
            {INJERA_OPTIONS.map((option) => {
            const isSelected = selectedId === option.id;
            return (
                <div
                key={option.id}
                className={`injera-card ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(option.id)}
                >
                {/* Radio Indicator */}
                <div className={`radio-circle ${isSelected ? "active" : ""}`}>
                    {isSelected && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path
                        d="M1.5 5L4.5 8L10.5 1.5"
                        stroke="#FFFFFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    )}
                </div>

                {/* Middle Content */}
                <div className="injera-content">
                    <div className="title-row">
                    <span className="injera-title">{option.title}</span>
                    {option.badge && (
                        <span className="gf-badge">
                        Gluten-
                        <br />
                        Free
                        </span>
                    )}
                    </div>
                    <p className="injera-description">{option.description}</p>
                </div>

                {/* Price / Included Tag */}
                <div className="price-tag-container">
                    <span
                    className={`price-tag ${
                        option.isIncluded ? "included" : "extra"
                    }`}
                    >
                    {option.priceLabel}
                    </span>
                </div>
                </div>
            );
            })}
        </div>
        </div>
    );
}