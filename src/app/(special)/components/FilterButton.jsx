"use client"

import useSpecialItemsChoice from "@/app/(stores)/SpecialItems";
import { useRouter } from "next/navigation";

export default function CategoryFilter({type , filterName }){
    

    let filterFunction = useSpecialItemsChoice(state => state.setRenderedThings)


    // * items container depends on total array in the store
    // * this function updates that content and triggers rerender
    let onClick = () => {
        filterFunction(filterName);
    }


    
    return (
        <button className="category-filter-btn" onClick={onClick}>
            {type}
        </button>
    )
}