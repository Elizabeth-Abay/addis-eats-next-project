import { SIDE_ACCENTS_CONFIG, sideAccentsPrice } from "../../../../constants/variables";
import { FaCheck } from "react-icons/fa6";

export default function SideAccentsSelector({
  updateSideAccents,
  updateTotal,
  sideAccents = [], // Default empty array
  maxAllowed = 2,
}) {
  // Helper to reliably detect selection whether sideAccents is an array of strings or objects
  const checkIsSelected = (itemId) => {
    return sideAccents.some(
      (acc) => acc === itemId || acc?.id === itemId || acc?.type === itemId
    );
  };

  const handleToggle = (type) => {
    const isSelected = checkIsSelected(type);
    const itemPrice = sideAccentsPrice?.[type] ?? 0;

    // Prevent exceeding maximum selection count
    if (!isSelected && sideAccents.length >= maxAllowed) {
      return;
    }

    const willBeAdded = !isSelected;

    // 1. Notify parent state updater
    updateSideAccents?.({ type, added: willBeAdded });

    // 2. Update price total if applicable
    if (itemPrice > 0 && updateTotal) {
      const operation = willBeAdded ? "plus" : "minus";
      updateTotal({ amount: itemPrice, type: operation });
    }
  };

  return (
    <div
      className="sides-selector-container"
      style={{
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "rgba(30, 15, 9, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        color: "#ffffff",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div>
          <span
            style={{
              display: "block",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "1px",
              color: "#f59e0b",
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            Communal Accompaniments
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
            }}
          >
            Side Accents
          </h2>
        </div>

        {/* Selection Limit Badge */}
        <span
          style={{
            fontSize: "11px",
            fontWeight: "600",
            padding: "4px 12px",
            borderRadius: "9999px",
            backgroundColor:
              sideAccents.length >= maxAllowed
                ? "rgba(245, 158, 11, 0.2)"
                : "rgba(255, 255, 255, 0.08)",
            color: sideAccents.length >= maxAllowed ? "#fde047" : "rgba(255, 255, 255, 0.7)",
            border:
              sideAccents.length >= maxAllowed
                ? "1px solid rgba(245, 158, 11, 0.4)"
                : "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {sideAccents.length}/{maxAllowed} Selected
        </span>
      </div>

      {/* Options Cards List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {SIDE_ACCENTS_CONFIG.map((item) => {
          const isChecked = checkIsSelected(item.id);
          const price = sideAccentsPrice?.[item.id] ?? 0;
          const isDisabled = !isChecked && sideAccents.length >= maxAllowed;

          return (
            <div
              key={item.id}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={isDisabled ? -1 : 0}
              onClick={() => !isDisabled && handleToggle(item.id)}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
                  e.preventDefault();
                  handleToggle(item.id);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 16px",
                borderRadius: "14px",
                cursor: isDisabled ? "not-allowed" : "pointer",
                transition: "all 0.2s ease-in-out",
                opacity: isDisabled ? 0.45 : 1,
                backgroundColor: isChecked
                  ? "rgba(245, 158, 11, 0.12)"
                  : "rgba(15, 8, 4, 0.5)",
                border: isChecked
                  ? "1px solid #f59e0b"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: isChecked
                  ? "0 0 16px rgba(245, 158, 11, 0.2)"
                  : "none",
              }}
            >
              {/* Checkbox Icon Indicator */}
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                  backgroundColor: isChecked ? "#f59e0b" : "transparent",
                  border: isChecked
                    ? "1px solid #f59e0b"
                    : "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {isChecked && <FaCheck size={12} color="#180c07" />}
              </div>

              {/* Title & Description */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: isChecked ? "#ffffff" : "rgba(255, 255, 255, 0.9)",
                    marginBottom: "2px",
                  }}
                >
                  {item.title}
                </div>
                {item.description && (
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.6)",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>

              {/* Price / Free Badge */}
              <div style={{ flexShrink: 0 }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "4px 10px",
                    borderRadius: "8px",
                    backgroundColor:
                      price === 0
                        ? "rgba(16, 185, 129, 0.15)"
                        : "rgba(255, 255, 255, 0.08)",
                    color: price === 0 ? "#34d399" : "#f59e0b",
                    border:
                      price === 0
                        ? "1px solid rgba(16, 185, 129, 0.3)"
                        : "1px solid rgba(245, 158, 11, 0.2)",
                  }}
                >
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