import CategoryFilter from "./FilterButton"

export default function FilterContainer(){
    return (
        <div className="category-selection-buttons-container">
            <CategoryFilter key ='All' type='All'  filterName='All' ></CategoryFilter>
            <CategoryFilter key ='Wat' type='Traditional Stews & Wat'  filterName='Wat' ></CategoryFilter>
            <CategoryFilter key ='Tibs' type='Tibs & Grills'  filterName='Tibs'  ></CategoryFilter>
            <CategoryFilter key ='Raw' type='Raw & Cured Delicacies / Kitfo'  filterName ='Raw'  ></CategoryFilter>
            <CategoryFilter key ='Tsom' type='Fasting & Vegan / Tsom'  filterName='Tsom'  ></CategoryFilter>
            <CategoryFilter key ='Beverage' type='Beverages & Tej'  filterName='Beverage' ></CategoryFilter>
        </div>
    );
}