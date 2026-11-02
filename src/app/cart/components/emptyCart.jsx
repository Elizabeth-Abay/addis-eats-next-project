export default function EmptyCart() {
    return (
        <div className="empty-cart-container">
        {/* Icon Container */}
        <div className="empty-cart-icon-wrapper">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="empty-cart-icon"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zm7.5 0a.75.75 0 100 1.5.75.75 0 000-1.5z"
            />
            </svg>
        </div>

        {/* Message Heading */}
        <h2 className="empty-cart-title">
            Your cart is empty
        </h2>

        {/* Description */}
        <p className="empty-cart-description">
            Looks like you haven't added anything to your cart yet. Explore our items and find something you love!
        </p>
        </div>
    );
}