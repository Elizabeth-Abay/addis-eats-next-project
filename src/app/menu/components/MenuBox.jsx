import QuickAdd from "./QuickAdd";
import SeeDetail from "./SeeDishDetails";
import { FaFire } from "react-icons/fa6";

export default function MenuBox({ dish }) {
    const {
        id,
        slug,
        nameEn,
        nameAm,
        category,
        priceETB,
        spiceLevel = 1,
        isFasting,
        isSpecial,
        description,
        image,
    } = dish;

    const renderSpiceLevel = () => {
        const level = typeof spiceLevel === "number" ? spiceLevel : 1;
        return Array.from({ length: 3 }).map((_, i) => (
            <FaFire
                key={i}
                size={12}
                color={i < level ? "#ef4444" : "rgba(255, 255, 255, 0.15)"}
            />
        ));
    };

    return (
        <div
            className="dish-card"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "20px",
                background: "linear-gradient(145deg, rgba(30, 16, 11, 0.95) 0%, rgba(18, 9, 5, 0.98) 100%)",
                border: "1px solid rgba(245, 158, 11, 0.15)",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                color: "#ffffff",
                height: "100%",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                e.currentTarget.style.boxShadow = "0 20px 35px -10px rgba(245, 158, 11, 0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.15)";
                e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)";
            }}
        >
            <SeeDetail id={id} />

            {/* Image / Header Banner Area */}
            <div style={{ position: "relative", height: "160px", overflow: "hidden", backgroundColor: "#2d160f" }}>
                {image && (
                    <img
                        src={image}
                        alt={nameEn}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                        }}
                    />
                )}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(18, 9, 5, 0.95) 0%, rgba(0, 0, 0, 0.2) 70%)",
                    }}
                />

                {/* Badges: Special & Fasting */}
                <div
                    style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        zIndex: 2,
                    }}
                >
                    {isSpecial && (
                        <span
                            style={{
                                fontSize: "10px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                padding: "4px 10px",
                                borderRadius: "9999px",
                                backgroundColor: "#f59e0b",
                                color: "#180c07",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            }}
                        >
                            Chef's Special
                        </span>
                    )}
                    {isFasting && (
                        <span
                            style={{
                                fontSize: "10px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                padding: "4px 10px",
                                borderRadius: "9999px",
                                backgroundColor: "rgba(16, 185, 129, 0.9)",
                                color: "#ffffff",
                                backdropFilter: "blur(4px)",
                            }}
                        >
                            Tsom / Vegan
                        </span>
                    )}
                </div>

                {/* Category Tag */}
                {category && (
                    <span
                        style={{
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            fontSize: "10px",
                            fontWeight: "600",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "rgba(255, 255, 255, 0.85)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(4px)",
                            zIndex: 2,
                        }}
                    >
                        {category}
                    </span>
                )}
            </div>

            {/* Content Body */}
            <div
                style={{
                    padding: "16px 18px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: "8px",
                            marginBottom: "8px",
                        }}
                    >
                        <h3
                            style={{
                                margin: 0,
                                fontSize: "17px",
                                fontWeight: "700",
                                fontFamily: "'Playfair Display', serif",
                                color: "#ffffff",
                                lineHeight: "1.3",
                            }}
                        >
                            {nameEn}
                        </h3>
                        {nameAm && (
                            <span
                                style={{
                                    fontSize: "13px",
                                    color: "#f59e0b",
                                    fontWeight: "600",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {nameAm}
                            </span>
                        )}
                    </div>

                    <p
                        style={{
                            margin: "0 0 14px 0",
                            fontSize: "13px",
                            color: "rgba(255, 255, 255, 0.65)",
                            lineHeight: "1.5",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {description}
                    </p>
                </div>

                {/* Footer specs: Spice & Price */}
                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "14px",
                            paddingTop: "10px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "3px" }} title={`Spice level: ${spiceLevel}/3`}>
                            {renderSpiceLevel()}
                        </div>

                        <div style={{ display: "flex", alignItems: "baseline" }}>
                            <span
                                style={{
                                    fontSize: "11px",
                                    color: "rgba(255, 255, 255, 0.5)",
                                    marginRight: "4px",
                                    fontWeight: "500",
                                }}
                            >
                                ETB
                            </span>
                            <span
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "800",
                                    color: "#f59e0b",
                                }}
                            >
                                {priceETB}
                            </span>
                        </div>
                    </div>

                    <QuickAdd props={{ id, nameEn, priceETB }} />
                </div>
            </div>
        </div>
    );
}