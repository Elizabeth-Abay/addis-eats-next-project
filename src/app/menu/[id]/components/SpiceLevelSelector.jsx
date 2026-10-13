"use client"
import { useState } from "react";

const SPICE_OPTIONS = [
    {
        id: "mild",
        title: "Mild (1/3)",
        description: "Delicate warmth, rich caramelized shallots",
        flames: 1,
        isRecommended: false,
    },
    {
        id: "traditional",
        title: "Traditional (2/3)",
        description: "Signature authentic 12–spice berbere balance",
        flames: 2,
        isRecommended: true,
    },
    {
        id: "fiery",
        title: "Fiery Awaze (3/3)",
        description: "Addis highland heat with mitmita pepper finish",
        flames: 3,
        isRecommended: false,
    },
];

    // Flame Icon SVG Component
const FlameIcon = () => (
    <svg
        width="16"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7D1204"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flame-icon"
    >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
    </svg>
);

export default function SpiceLevelSelector({ onSpiceChange }) {
    const [selectedId, setSelectedId] = useState("traditional");

    const handleSelect = (id) => {
        setSelectedId(id);
        onSpiceChange(id);
    };

    return (
        <div className="spice-selector-container">
        {/* Header */}
        <div className="spice-header">
            <div className="title-group">
            <span className="step-label">STEP 1 • REQUIRED</span>
            <h2 className="section-title">Heat &amp; Spice Level</h2>
            </div>
            <span className="select-badge">Select 1</span>
        </div>

        {/* Options List */}
        <div className="options-list">
            {SPICE_OPTIONS.map((option) => {
            const isSelected = selectedId === option.id;
            return (
                <div
                key={option.id}
                className={`option-card ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(option.id)}
                >
                {/* Radio Circle */}
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

                {/* Details */}
                <div className="option-content">
                    <div className="option-title-row">
                    <span className="option-title">{option.title}</span>
                    {option.isRecommended && (
                        <span className="recommended-badge">RECOMMENDED</span>
                    )}
                    </div>
                    <p className="option-description">{option.description}</p>
                </div>

                {/* Flame Icons */}
                <div className="flames-container">
                    {[...Array(option.flames)].map((_, i) => (
                    <FlameIcon key={i} />
                    ))}
                </div>
                </div>
            );
            })}
        </div>
    </div>
);
}