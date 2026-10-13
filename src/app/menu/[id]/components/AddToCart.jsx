"use client"
import { useRouter } from "next/navigation";
import { HiShoppingBag } from "react-icons/hi2";

export default function AddToCart({ total, onClick }) {
  const router = useRouter()

  const handleClick = (e) => {
    // 1. Execute parent add-to-cart logic
    if (onClick) {
      onClick(e);
    }
    // 2. Navigate to the cart route
    router.push("/cart");
  };

  console.log("The total received in the addToCart")
  console.log(total)
  const formattedTotal =
    typeof total === "number" ? total.toLocaleString() : total;

  return (
    <button
      className="add-to-basket-btn"
      onClick={handleClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 22px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        color: "#180c07",
        border: "none",
        outline: "none",
        cursor: "pointer",
        fontWeight: "700",
        boxShadow: "0 8px 24px rgba(245, 158, 11, 0.35)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        userSelect: "none",
      }}
    >
      {/* Icon + Label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <HiShoppingBag size={22} color="#180c07" />
        <span
          style={{
            fontSize: "15px",
            letterSpacing: "0.3px",
            fontWeight: "700",
          }}
        >
          Add to Basket
        </span>
      </div>

      {/* Price Badge */}
      <span
        style={{
          fontSize: "15px",
          fontWeight: "800",
          backgroundColor: "rgba(24, 12, 7, 0.15)",
          padding: "6px 14px",
          borderRadius: "10px",
          border: "1px solid rgba(24, 12, 7, 0.1)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        ETB {formattedTotal}
      </span>
    </button>
  );
}