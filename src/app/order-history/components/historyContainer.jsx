export default function HistoryContainer({ index, ordersLength, order }) {
    return (
        <div 
            style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "1rem",
                padding: "1.25rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                marginBottom: "1rem"
            }}
        >
            {/* Order Header: Date & Status/Summary */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid #f4f4f5",
                gap: "0.50rem"
            }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#ea580c",
                        backgroundColor: "#fff7ed",
                        padding: "0.25rem 0.625rem",
                        borderRadius: "9999px"
                    }}>
                        Order #{ordersLength - index}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "#71717a" }}>{order.date}</span>
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#27272a" }}>
                    Grand Total: <span style={{ color: "#18181b", fontWeight: "700" }}>${order.payment.grandTotal.toFixed(2)}</span>
                </div>
            </div>

            {/* Cart Items List */}
            <div style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: "500", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                    Items Ordered
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {order.cart.map((item, itemIndex) => (
                        <div key={itemIndex} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#fafafa",
                            padding: "0.75rem",
                            borderRadius: "0.75rem"
                        }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                <div style={{
                                    backgroundColor: "#ffedd5",
                                    color: "#c2410c",
                                    fontWeight: "700",
                                    fontSize: "0.75rem",
                                    height: "1.5rem",
                                    width: "1.5rem",
                                    borderRadius: "9999px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    marginTop: "0.125rem"
                                }}>
                                    {item.amount}x
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "0.875rem", fontWeight: "600", color: "#27272a", margin: 0 }}>{item.name}</h4>
                                </div>
                            </div>
                            <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#3f3f46" }}>
                                ${(item.price * item.amount).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Footer: Payment breakdown */}
            <div style={{
                paddingTop: "0.75rem",
                borderTop: "1px solid #f4f4f5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.75rem",
                color: "#71717a"
            }}>
                <span>Delivery Fee: ${order.payment.deliveryFee.toFixed(2)}</span>
                <span style={{ color: "#3f3f46", fontWeight: "500" }}>
                    Subtotal: ${(order.payment.grandTotal - order.payment.deliveryFee).toFixed(2)}
                </span>
            </div>
        </div>
    );
}