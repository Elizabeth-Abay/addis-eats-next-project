import { useRouter } from "next/navigation";
import AddBtn from "./QuickAddBtn";

export default function SpecialContainerBox({ container }) {
  const {
    id,
    nameEn,
    nameAm,
    category,
    priceETB,
    isFasting,
    description,
    servings,
  } = container;

  const router = useRouter()

  

  return (
    <div
      className="food-card"
      onClick={() => router.push(`/item/${id}`)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        borderRadius: "20px",
        background:
          "linear-gradient(135deg, rgba(38, 20, 14, 0.95) 0%, rgba(18, 9, 5, 0.98) 100%)",
        border: "1px solid rgba(245, 158, 11, 0.22)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        color: "#ffffff",
      }}
    >
      {/* Top Header: Category & Fasting Badges */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              padding: "4px 10px",
              borderRadius: "9999px",
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              color: "#fde047",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              textTransform: "uppercase",
            }}
          >
            {category}
          </span>

          {isFasting && (
            <span
              style={{
                fontSize: "11px",
                fontWeight: "700",
                padding: "4px 10px",
                borderRadius: "9999px",
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                color: "#86efac",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                textTransform: "uppercase",
              }}
            >
              🌱 Tsom / Vegan
            </span>
          )}
        </div>

        {/* Dish Titles (English & Amharic) */}
        <div style={{ marginBottom: "10px" }}>
          <h1
            style={{
              margin: "0 0 4px 0",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: "#ffffff",
              lineHeight: "1.3",
            }}
          >
            {nameEn}
          </h1>

          {nameAm && (
            <h2
              style={{
                margin: 0,
                fontSize: "15px",
                fontWeight: "500",
                color: "rgba(245, 158, 11, 0.85)",
              }}
            >
              {nameAm}
            </h2>
          )}
        </div>

        {/* Description */}
        <p
          style={{
            margin: "0 0 18px 0",
            fontSize: "13px",
            lineHeight: "1.5",
            color: "rgba(255, 255, 255, 0.75)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </div>

      {/* Footer Section: Servings, Price & Quick Add Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          paddingTop: "14px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#f59e0b",
            }}
          >
            ETB {priceETB}
          </div>

          {servings && (
            <span
              style={{
                fontSize: "11px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              {servings}
            </span>
          )}
        </div>
        
        <AddBtn props={{id , nameEn ,priceETB }}/>
      </div>
    </div>
  );
}