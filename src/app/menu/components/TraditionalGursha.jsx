// can be pre rendered
export default function TraditionalGursha(){
    return (
        <div className="experience-card">
        <div className="card-left">
        <div className="icon-badge">
            {/* Dish / Cloche Icon */}
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="badge-icon"
            >
            <path d="M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M4 17a8 8 0 0 1 16 0" />
            <path d="M3 17h18" />
            <path d="M4 20h16" />
            </svg>
        </div>

        <div className="card-text">
            <h3 className="card-title">Tradititonal Gursha Experience</h3>
            <p className="card-description">Fresh roll of pure brown Teff Injera served wit</p>
        </div>
        </div>

        <div className="card-action-icon">
        {/* Hand with heart / hospitality icon */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="action-icon"
        >
            <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L5 14" />
            <path d="M12 14c0 3.3-2.7 6-6 6H4a2 2 0 0 1-2-2v-2" />
            <path d="M18 10h-2.2a2 2 0 0 0-1.6.8L12 14" />
            <path d="M18 4.5a2.5 2.5 0 0 1 3.5 3.5L18 11.5 14.5 8a2.5 2.5 0 0 1 3.5-3.5z" />
        </svg>
        </div>
    </div>
    )
}