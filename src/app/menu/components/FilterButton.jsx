"use client"
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

 // bc the client will have to click this

export default function FilterButton({name , type}){
    let [activeCategory , setActiveCategory ] = useState('All');
    // console.log(`type in the filter button ${type}`)

     

    // the thing is onClick 
    // I want to push the current category to the router to deal with it

    // ! we may need to change the css here to accomodate for the change

    

    const router = useRouter();
    const pathName = usePathname();

    const handleCategoryClick = (categoryName) => {
        setActiveCategory(categoryName);
        // this is the filter

        router.push(`${pathName}?category=${type}`)
    
    };


    return (
        <button className="category-filter-btn active" onClick={handleCategoryClick}>
            {name}
        </button>
    )
}