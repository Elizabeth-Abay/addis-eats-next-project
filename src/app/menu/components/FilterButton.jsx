"use client"
import useMenuStore from "@/app/(stores)/MenuStores";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

 // bc the client will have to click this

export default function FilterButton({name , type , activeCategory , setActive}){
    
    let filterFunction = useMenuStore(state => state.setRenderedThings)


    const handleCategoryClick = () => {
        setActive(type);
        filterFunction(type);    
    };


    let isActive = activeCategory === type




    return (
        <button 
            className="category-filter-btn"
            onClick={handleCategoryClick}
        >
            {name}
        </button>
    )
}