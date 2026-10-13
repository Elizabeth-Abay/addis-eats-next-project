// the menu box only the quick add should be the interactive part
// so it will be a server component but the quick add cld be client component
// have a quick add button and details 

import QuickAdd from "./QuickAdd";
import SeeDetail from "./SeeDishDetails";

export default function MenuBox({dish}){
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
                color={i < level ? "#ef4444" : "rgba(255, 255, 255, 0.2)"}
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
                background:
                "linear-gradient(145deg, rgba(38, 20, 14, 0.9) 0%, rgba(20, 10, 6, 0.95) 100%)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(10px)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                color: "#ffffff",
                position: "relative",
                margin : "10px"
            }}
        >
            <SeeDetail/>
            <div
                style={{ position: "relative", height: "170px", overflow: "hidden" }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                        "linear-gradient(to top, rgba(20, 10, 6, 0.95) 0%, rgba(0, 0, 0, 0.1) 60%)",
                    }}
                />


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
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(16, 185, 129, 0.85)",
                    color: "#ffffff",
                    backdropFilter: "blur(4px)",
                }}
                >
                Tsom / Vegan
                </span>
            )}
            </div>

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
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
                }}
            >
                {category}
            </span>
            )}

            </div>


            <div
                style={{
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "space-between",
            }}
            >
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
                    fontSize: "18px",
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
                    fontSize: "14px",
                    color: "#f59e0b",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    }}
                >
                    {nameAm}
                </span>
                )}
            </div>

          {/* Description */}
            <p
                style={{
                margin: "0 0 16px 0",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.7)",
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


            <div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "14px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        {renderSpiceLevel()}
                    </div>

                    <div>
                        <span
                        style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.5)",
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
            </div>

            <QuickAdd/>
        </div>

    );
}