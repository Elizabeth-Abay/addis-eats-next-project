// Gold Leaf Icon from image
const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="leaf-icon">
    <path d="M11 21C11 18.2386 8.76142 16 6 16C3.23858 16 1 18.2386 1 21C1 23.7614 3.23858 26 6 26C8.76142 26 11 23.7614 11 21Z" fill="#b08d4e" fillOpacity="0.8"/>
    <path d="M23 21C23 18.2386 20.7614 16 18 16C15.2386 16 13 18.2386 13 21C13 23.7614 15.2386 26 18 26C20.7614 26 23 23.7614 23 21Z" fill="#b08d4e" fillOpacity="0.8"/>
    <circle cx="12" cy="16" r="1.5" fill="#b08d4e"/>
    </svg>
);

// Gold Pencil/Kitchen Note Icon from image
const PencilIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="pencil-icon">
    <path d="M13.5 3.375C14.07 3.945 14.07 4.875 13.5 5.445L12 6.945L9 3.9375L10.5 2.25C11.07 1.68 12 1.68 12.57 2.25L13.5 3.375ZM3 13.875V11.8125L9.1875 5.625L12.1875 8.625L6 14.8125H3V13.875Z" fill="#b08d4e"/>
    <path d="M12.5 16.5H16C16.5523 16.5 17 16.9477 17 17.5V17.5C17 18.0523 16.5523 18.5 16 18.5H12.5C11.9477 18.5 11.5 18.0523 11.5 17.5V17.5C11.5 16.9477 11.9477 16.5 12.5 16.5Z" fill="#b08d4e"/>
    </svg>
);

export default function DiningEtiquette() {
    const features = [
    {
        title: "Traditional Handwash Basin & Warm Scented Towels",
        description: "Attendant brings botanical rosewater decanter prep pack",
    },
    {
        title: "No Cutlery Needed (True Communal Gursha)",
        description: "Sustainably omit plastic utensils in reverence to eating by hand",
    },
    ];

    return (
    <div className="dining-etiquette-card">
        <header className="etiquette-main-header">
            <LeafIcon />
            <h1>Dining Etiquette & Hospitality</h1>
        </header>

        <section className="etiquette-features">
            {features.map((feature, index) => (
                <div key={index} className="feature-item">
                <div className="feature-marker-container">
                    <div className="feature-marker" />
                </div>
                <div className="feature-content">
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                </div>
                </div>
            ))}   
        </section>

        <hr className="etiquette-divider" />

        <section className="etiquette-kitchen-note">
        <header className="note-header">
            <PencilIcon />
            <h2>Kitchen Note (Special Injera Wrapping & Heat)</h2>
        </header>
        <div className="note-text-box">
            <p>Please pack extra rolled injera in separate banana leaves.</p>
        </div>
        </section>
    </div>
    );
};
