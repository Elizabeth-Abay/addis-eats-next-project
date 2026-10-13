import { HiOutlineFire } from "react-icons/hi2";

export default function FeatureHead() {
    return (
        <div
        className="feature-head-container"
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "16px 24px",
            borderRadius: "20px",
            background:
            "linear-gradient(135deg, rgba(35, 18, 11, 0.9) 0%, rgba(18, 9, 5, 0.95) 100%)",
            border: "1px solid rgba(245, 158, 11, 0.25)",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(10px)",
            flexWrap: "wrap",
        }}
        >
        {/* Left Group: Fire Icon + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Glowing Fire Icon Box */}
            <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                backgroundColor: "rgba(249, 115, 22, 0.15)",
                border: "1px solid rgba(249, 115, 22, 0.35)",
                boxShadow: "0 0 12px rgba(249, 115, 22, 0.2)",
                color: "#f97316",
                flexShrink: 0,
            }}
            >
            <HiOutlineFire size={24} />
            </div>

            {/* Title */}
            <h1
            style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#ffffff",
                letterSpacing: "-0.2px",
            }}
            >
            The Grand Mesob Feast
            </h1>
        </div>

        {/* Right Group: Featured Pill */}
        <span
            className="info-pill-feature"
            style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "rgba(114, 202, 202, 0.18)",
            color: "#fef08a",
            border: "1px solid rgba(112, 211, 66, 0.29)",
            borderRadius: "9999px",
            padding: "6px 14px",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            }}
        >
            Featured Spread
        </span>
        </div>
    );
}