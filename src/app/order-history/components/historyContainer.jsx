export default function HistoryContainer({ index, ordersLength, order }) {
    const subtotal = order.payment.grandTotal - order.payment.deliveryFee;

    return (
        <div className="history-card">
        {/* Order Header */}
        <div className="history-card-header">
            <div className="header-meta-group">
            <span className="order-badge">
                Order #{ordersLength - index}
            </span>
            <span className="order-date">{order.date}</span>
            </div>
            <div className="order-total-highlight">
            Grand Total: <span>ETB {order.payment.grandTotal.toFixed(2)}</span>
            </div>
        </div>

        {/* Cart Items List */}
        <div className="history-items-section">
            <p className="history-section-title">Items Ordered</p>
            <div className="history-items-grid">
            {order.cart.map((item, itemIndex) => (
                <div key={itemIndex} className="history-item-row">
                <div className="item-left-content">
                    <div className="item-qty-badge">
                    {item.amount}x
                    </div>
                    <h4 className="item-title">{item.name}</h4>
                </div>
                <div className="item-row-price">
                    ETB {(item.price * item.amount).toFixed(2)}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Order Footer */}
        <div className="history-card-footer">
            <span className="footer-fee">Delivery Fee: ETB {order.payment.deliveryFee.toFixed(2)}</span>
            <span className="footer-subtotal">
            Subtotal: ETB {subtotal.toFixed(2)}
            </span>
        </div>
        </div>
    );
}