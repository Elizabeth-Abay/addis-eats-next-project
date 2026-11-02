import QuickAdd from "./QuickAdd";
import SeeDetail from "./SeeDishDetails";
import { FaFire } from "react-icons/fa6";


export default function MenuBox({ dish }) {
    const {
        id,
        nameEn,
        nameAm,
        category,
        priceETB,
        spiceLevel = 1,
        isFasting,
        isSpecial,
        description,
    } = dish;

    const renderSpiceLevel = () => {
        const level = typeof spiceLevel === "number" ? spiceLevel : 1;
        return Array.from({ length: 3 }).map((_, i) => (
            <FaFire
                key={i}
                size={13}
                color={i < level ? "#ef4444" : "rgba(255, 255, 255, 0.2)"}
            />
        ));
    };

    return (
        <div className="foodCard">
            <div className="cardHeader">
                <div className="badgeGroup">
                    {isSpecial && <span className="badgeSpecial">Chef's Special</span>}
                    {isFasting && <span className="badgeFasting">Tsom / Vegan</span>}
                </div>
                {category && <span className="categoryTag">{category}</span>}
            </div>

            <div>
                {/* Title & Details Button Layout */}
                <div className="titleSection">
                    <div className="titleContainer">
                        <h3 className="nameEn">{nameEn}</h3>
                        {nameAm && <span className="nameAm">{nameAm}</span>}
                    </div>
                    <div className="detailWrapper">
                        <SeeDetail id={id} />
                    </div>
                </div>

                <p className="description">{description}</p>
            </div>

            <div className="cardFooter">
                <div className="specsRow">
                    <div className="spiceContainer" title={`Spice level: ${spiceLevel}/3`}>
                        {renderSpiceLevel()}
                    </div>

                    <div className="priceContainer">
                        <span className="currency">ETB</span>
                        <span className="price">{priceETB}</span>
                    </div>
                </div>

                <QuickAdd props={{ id, nameEn, priceETB }} />
            </div>
        </div>
    );
}