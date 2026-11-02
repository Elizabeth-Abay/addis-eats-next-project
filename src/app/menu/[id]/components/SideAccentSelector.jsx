// components/SideAccentSelector.jsx
"use client";

import { SIDE_ACCENTS_CONFIG, sideAccentsPrice } from "../../../(constants)/variable";
import { FaCheck } from "react-icons/fa6";

export default function SideAccentsSelector({
  updateSideAccents,
  updateTotal,
  sideAccents = [],
}) {
  const checkIsSelected = (itemId) => {
    return sideAccents.some(
      (acc) => acc === itemId || acc?.id === itemId || acc?.type === itemId
    );
  };

  const handleToggle = (type) => {
    const isSelected = checkIsSelected(type);
    const itemPrice = sideAccentsPrice?.[type] ?? 0;
    const willBeAdded = !isSelected;

    // 1. Update sideAccents state
    updateSideAccents?.({ type, added: willBeAdded });

    // 2. Update running total price
    if (itemPrice > 0 && updateTotal) {
      const operation = willBeAdded ? "plus" : "minus";
      updateTotal({ amount: itemPrice, type: operation });
    }
  };

  return (
    <div className="sides-selector-container">
      {/* Header Section */}
      <div className="sides-header">
        <div>
          <span className="sides-step-label">Communal Accompaniments</span>
          <h2 className="sides-title">Side Accents</h2>
        </div>

        {/* Dynamic Selection Counter Badge */}
        <span className="sides-counter-badge">
          {sideAccents.length > 0 ? `${sideAccents.length} Selected` : "Optional"}
        </span>
      </div>

      {/* Unlimited Selection Options List */}
      <div className="sides-options-list">
        {SIDE_ACCENTS_CONFIG.map((item) => {
          const isChecked = checkIsSelected(item.id);
          const price = sideAccentsPrice?.[item.id] ?? 0;

          return (
            <div
              key={item.id}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onClick={() => handleToggle(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggle(item.id);
                }
              }}
              className={`side-option-card ${isChecked ? "active-side" : ""}`}
            >
              {/* Checkbox Icon */}
              <div className={`side-checkbox ${isChecked ? "checked" : ""}`}>
                {isChecked && <FaCheck size={12} color="#180c07" />}
              </div>

              {/* Title & Description */}
              <div className="side-info">
                <div className="side-item-title">{item.title}</div>
                {item.description && (
                  <div className="side-item-desc">{item.description}</div>
                )}
              </div>

              {/* Price / Free Badge */}
              <div className="side-price-wrapper">
                <span className={`side-price-badge ${price === 0 ? "free" : "paid"}`}>
                  {price === 0 ? "Free" : `+ETB ${price}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}