import { LuUtensils } from "react-icons/lu";

export default function SpecialSelectionCard() {
    return (
        <div
        className="special-selection-card"
        style={{
            position: "relative",
            overflow: "hidden",
            padding: "28px",
            borderRadius: "24px",
            /* Rich dark mahogany & espresso gradient */
            background: "linear-gradient(135deg, rgba(42, 20, 14, 0.95) 0%, rgba(20, 10, 6, 0.98) 100%)",
            /* Subtle gold border and elevated shadow */
            border: "1px solid rgba(245, 158, 11, 0.25)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(12px)",
            color: "#ffffff",
            maxWidth: "480px",
        }}
        >
        {/* Background Radial Glow Accent */}
        <div
            style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            }}
        />

        {/* Top Header Row */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
                style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#f59e0b",
                borderRadius: "50%",
                display: "inline-block",
                boxShadow: "0 0 8px #f59e0b", /* Soft amber glow on the dot */
                }}
            />
            <span
                style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1.2px",
                color: "#fde047",
                textTransform: "uppercase",
                }}
            >
                Special Selection
            </span>
            </div>

            {/* Decorative Graphic Element */}
            <div style={{ display: "flex", gap: "4px", opacity: 0.4 }}>
            {[...Array(6)].map((_, i) => (
                <div
                key={i}
                style={{
                    width: "3px",
                    height: "14px",
                    backgroundColor: "#fef08a",
                    borderRadius: "2px",
                }}
                />
            ))}
            </div>
        </div>

        {/* Main Serif Title */}
        <h2
            style={{
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: "26px",
            fontWeight: "700",
            lineHeight: "1.25",
            margin: "0 0 12px 0",
            color: "#ffffff",
            letterSpacing: "-0.2px",
            }}
        >
            Communal Warmth,
            <br />
            Slow-Cooked Heritage
        </h2>

        {/* Description Text */}
        <p
            style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.8)",
            margin: "0 0 24px 0",
            fontWeight: "400",
            }}
        >
            Gather around our handwoven mesob for time-honored wots, sizzling clay
            stoves, and authentic Gursha sharing.
        </p>

        {/* Footer Row */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)", /* Subtle divider */
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LuUtensils size={18} color="#f59e0b" />
            <span
                style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#fef08a",
                }}
            >
                Table-side Warm Bread Refills
            </span>
            </div>

            <div
            style={{
                backgroundColor: "rgba(245, 158, 11, 0.15)", /* Warm tinted glass button */
                color: "#fef08a",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                borderRadius: "20px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
                backdropFilter: "blur(4px)",
                whiteSpace: "nowrap",
            }}
            >
            Today's Batch
            </div>
        </div>
        </div>
    );
}