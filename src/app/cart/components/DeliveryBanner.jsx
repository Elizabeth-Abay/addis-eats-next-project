export default function DeliveryBanner() {
    return (
        <div className="delivery-card">
            <div className="delivery-content">
            {/* Yellow Icon Box */}
                <div className="delivery-icon-box">
                    <svg
                    className="delivery-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    {/* Scooter / Delivery icon */}
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3 3 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    </svg>
                </div>

                {/* Center Text */}
                <div className="delivery-text">
                    <h3>
                    Complimentary Delivery
                    <br />
                    Unlocked
                    </h3>
                    <p>Bole & Kazanchis express courier zones</p>
                </div>

                {/* Right Badge */}
                <div className="delivery-badge">100% Free</div>
                </div>

                {/* Bottom Accent / Progress Bar */}
                <div className="delivery-progress-bar">
                <div className="delivery-progress-fill" />
            </div>
        </div>
    );
}