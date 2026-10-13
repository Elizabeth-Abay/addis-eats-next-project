import FilterButton from "./FilterButton";

export default function CategoryFilterContainer(){

    const categories = [
        { name: 'All', action: 'get_all' , type : 'all' },
        { name: 'Traditional Stews & Wat', action: 'Traditional Stews & Wat' , type : 'wet' },
        { name: 'Tibs & Grills', action: 'Tibs & Grills' , type : 'tibs'},
        { name: 'Raw & Cured Delicacies / Kitfo', action: 'Raw & Cured Delicacies / Kitfo' , type :'kitfo' },
        { name: 'Fasting & Vegan / Tsom', action: 'Fasting & Vegan / Tsom' , type : 'tsom'},
        { name: 'Beverages & Tej', action: 'Beverages & Tej' , type :'beverages' },
    ];
    

    
    
    return (
        <div className="category-filter-contaienr">
            {/* on click add active classtype to them  */}
            {
                categories.map(
                    cat => (
                        <FilterButton 
                            key={cat.name}
                            type={cat.name}
                        ></FilterButton>
                    )
                )
            }
        </div>
    )
}