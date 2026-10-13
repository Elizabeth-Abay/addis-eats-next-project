import {CategoryFilter} from "./FilterButton"

export default function FilterContainer(){
    return (
        <div className="selection-buttons" style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            padding: "16px 0 8px 0",
            scrollbarWidth: "none", /* Firefox hide scrollbar */
        }}>
            <CategoryFilter key ='All' type='All'  filterName='All' ></CategoryFilter>
            <CategoryFilter key ='Wat' type='Traditional Stews & Wat'  filterName='Wat' ></CategoryFilter>
            <CategoryFilter key ='Tibs' type='Tibs & Grills'  filterName='Tibs'  ></CategoryFilter>
            <CategoryFilter key ='Raw' type='Raw & Cured Delicacies / Kitfo'  filterName ='Raw'  ></CategoryFilter>
            <CategoryFilter key ='Tsom' type='Fasting & Vegan / Tsom'  filterName='Tsom'  ></CategoryFilter>
            <CategoryFilter key ='Beverage' type='Beverages & Tej'  filterName='Beverage' ></CategoryFilter>
        </div>
    );
}