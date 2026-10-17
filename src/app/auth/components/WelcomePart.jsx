export default function WelcomePart() {
    return (
        <div className="welcome-card">
        <div className="welcome-card-header">
            <span className="welcome-badge font-mono">
            <span className="welcome-dot" /> ENKUAN DEHNA METAHU
            </span>
        </div>

        <div className="welcome-content">
            <div className="welcome-icon">🍲</div>
            <div className="welcome-text">
            <h1 className="welcome-title">Welcome to Mesob Table</h1>
            <p className="welcome-subtitle">
                Get here to manage your feasts, Telebirr rewards, and reserved dining.
            </p>
            <button className="welcome-btn">
                Manage Feasts &rarr;
            </button>
            </div>
        </div>
        </div>
    );
}