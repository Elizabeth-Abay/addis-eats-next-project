import './style.css'

export default function HeaderSkeleton() {
  return (
    <header className="navbar-container navbar-skeleton" aria-busy="true" aria-label="Loading Navigation">
      {/* Left: Brand Placeholder */}
      <div className="navbar-left">
        <div className="skeleton-box skeleton-brand"></div>
      </div>

      {/* Center: Nav Links Placeholders */}
      <nav className="navbar-center">
        <div className="skeleton-box skeleton-nav-item"></div>
        <div className="skeleton-box skeleton-nav-item"></div>
        <div className="skeleton-box skeleton-nav-item"></div>
        <div className="skeleton-box skeleton-nav-item"></div>
        <div className="skeleton-box skeleton-nav-item"></div>
      </nav>

      {/* Right: Avatar Placeholder */}
      <div className="navbar-right">
        <div className="skeleton-box skeleton-avatar"></div>
      </div>
    </header>
  );
}