export function OrderPageSkeleton() {
  return (
    <div className="order-page-skeleton">
      {/* Title Container Skeleton */}
      <div className="skeleton-card title-skeleton">
        <div className="skeleton-row">
          <div className="skeleton-left">
            <div className="skeleton-box title-line"></div>
            <div className="skeleton-box spice-line"></div>
          </div>
          <div className="skeleton-right">
            <div className="skeleton-box price-line"></div>
            <div className="skeleton-box tax-line"></div>
          </div>
        </div>
        <div className="skeleton-box desc-line"></div>
      </div>

      {/* Customize Order Skeleton */}
      <div className="skeleton-card customize-skeleton">
        <div className="skeleton-box section-line"></div>
        <div className="skeleton-box option-box"></div>
        <div className="skeleton-box option-box"></div>
        <div className="skeleton-box amount-box"></div>
        <div className="skeleton-box button-box"></div>
      </div>
    </div>
  );
}