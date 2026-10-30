"use client"
import { useState } from "react";
import FilterButton from "./FilterButton";

export default function CategoryFilterContainer(){

    let [activeCategory , setActive] = useState('all')

    const categories = [
        { name: 'All', action: 'get_all' , type : 'all' },
        { name: 'Traditional Stews & Wat', action: 'Traditional Stews & Wat' , type : 'wet' },
        { name: 'Tibs & Grills', action: 'Tibs & Grills' , type : 'tibs'},
        { name: 'Raw & Cured Delicacies / Kitfo', action: 'Raw & Cured Delicacies / Kitfo' , type :'kitfo' },
        { name: 'Fasting & Vegan / Tsom', action: 'Fasting & Vegan / Tsom' , type : 'tsom'},
        { name: 'Beverages & Tej', action: 'Beverages & Tej' , type :'beverages' },
    ];
    

    // // // // console.log('returning category filters')
    
    return (
        <div className="category-filter-container">
            {/* on click add active classtype to them  */}
            {
                categories.map(
                    cat => (
                        <FilterButton 
                            key={cat.name}
                            name={cat.name}
                            type={cat.type}
                            activeCategory={activeCategory}
                            setActive={setActive}
                        ></FilterButton>
                    )
                )
            }
        </div>
    )
}