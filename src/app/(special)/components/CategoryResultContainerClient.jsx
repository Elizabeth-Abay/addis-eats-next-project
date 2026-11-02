'use client'

import useSWR from "swr"
import { fetcher } from "../../fetcher"
import useSpecialItemsChoice from "@/app/(stores)/SpecialItems";
import { useEffect } from "react";
import SpecialContainerBox from "./SpecialContainerBox";

// for filtering we can use route

export default function CategoryResult(){

    // the fetcher useSWR - enables client side caching
    let { data , isLoading , error} = useSWR('https://addis-eats-backend.onrender.com/menu/specials' , fetcher ,
        {
            refreshInterval: 900000,      
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
            dedupingInterval: 2000,  
        }
    );

    
    
    let setTotalSpecialItems  = useSpecialItemsChoice(state => state.setTotalSpecialItems);


    useEffect(
        () => {
            if (data) {
                setTotalSpecialItems(data); // this will set the array
            }
        }, 
        [data , setTotalSpecialItems]
    )


    let filteredData  = useSpecialItemsChoice(state => state.renderedSpecialItems)

    if (isLoading) {
        return <div>Loading special items from the client</div>
    }


    return (
        <div className="category-result-container">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                <SpecialContainerBox key={item.id} container={item} />
                ))
            ) : (
                <p style={{ color: "rgba(255,255,255,0.6)", gridColumn: "1 / -1" }}>
                No items available for this category.
                </p>
            )}
        </div>)




    



}