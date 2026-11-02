"use client";

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

    const FlameIcon = () => (
    <svg
        width="16"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flameIcon"
    >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
    </svg>
    );

    export default function SpiceLevelSelector({ onSpiceChange }) {
    const [selectedId, setSelectedId] = useState("traditional");

    const handleSelect = (id) => {
        setSelectedId(id);
        onSpiceChange?.(id);
    };

    return (
        <div className="spiceContainer">
        {/* Header */}
        <div className="spiceHeader">
            <div className="titleGroup">
            <span className="stepLabel">STEP 1 • REQUIRED</span>
            <h2 className="sectionTitle">Heat &amp; Spice Level</h2>
            </div>
            <span className="selectBadge">Select 1</span>
        </div>

        {/* Options List */}
        <div className="optionsList">
            {SPICE_OPTIONS.map((option) => {
            const isSelected = selectedId === option.id;
            return (
                <div
                key={option.id}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                className={`optionCard ${isSelected ? "selectedCard" : ""}`}
                onClick={() => handleSelect(option.id)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(option.id);
                    }
                }}
                >
                {/* Radio Circle */}
                <div className={`radioCircle ${isSelected ? "radioActive" : ""}`}>
                    {isSelected && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path
                        d="M1.5 5L4.5 8L10.5 1.5"
                        stroke="#180C07"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    )}
                </div>

                {/* Details */}
                <div className="optionContent">
                    <div className="optionTitleRow">
                    <span className="optionTitle">{option.title}</span>
                    {option.isRecommended && (
                        <span className="recommendedBadge">RECOMMENDED</span>
                    )}
                    </div>
                    <p className="optionDescription">{option.description}</p>
                </div>

                {/* Flame Icons */}
                <div className={`flamesContainer ${isSelected ? "flamesActive" : ""}`}>
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