import AddBtn from "./QuickAddBtn";

export default function SpecialContainerBox({ container }) {
  const {
    id,
    nameEn,
    nameAm,
    category,
    priceETB,
    isFasting,
    description,
    servings,
  } = container;


  

  return (
    <div className="food-card">
      <div>
        <div className="food-card-type">
          <span>
            {category}
          </span>

          {isFasting && (
            <span className="is-fasting-span">
              🌱 Tsom / Vegan
            </span>
          )}
        </div>

        {/* Dish Titles (English & Amharic) */}
        <div className="dish-name">
          <h1>
            {nameEn}
          </h1>

          {nameAm && (
            <h2>
              {nameAm}
            </h2>
          )}
        </div>

        {/* Description */}
        <p>
          {description}
        </p>
      </div>

      {/* Footer Section: Servings, Price & Quick Add Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          paddingTop: "14px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        
        <div>
          <div className="price-holder"
            style={{
              
            }}
          >
            ETB {priceETB} + default order
          </div>

          {servings && (
            <span className="serving-span">
              {servings}
            </span>
          )}
        </div>
        
        <AddBtn props={{id , nameEn ,priceETB }}/>
      </div>
    </div>
  );
}