"use client"
import useMenuStore from "@/app/(stores)/MenuStores";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

 // bc the client will have to click this

export default function FilterButton({name , type}){
    console.log("type from filter btn");
    console.log(type)
    let [activeCategory , setActiveCategory ] = useState('All');
    // // // console.log(`type in the filter button ${type}`)

     

    // the thing is onClick 
    // I want to push the current category to the router to deal with it

    // ! we may need to change the css here to accomodate for the change

    
    let filterFunction = useMenuStore(state => state.setRenderedThings)

    // const router = useRouter();
    // const pathName = usePathname();

    const handleCategoryClick = () => {
        setActiveCategory(type);
        // console.log(type)
        // this is the filter
        filterFunction(type);

        // router.push(`${pathName}?category=${type}`)
    
    };


    return (
        <button className="category-filter-btn active" onClick={handleCategoryClick}>
            {name}
        </button>
    )
}