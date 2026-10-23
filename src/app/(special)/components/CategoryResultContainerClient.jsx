'use client'

import useSWR from "swr"
import { fetcher } from "../../fetcher"
import useSpecialItemsChoice from "@/app/(stores)/SpecialItems";
import { useEffect } from "react";
import SpecialContainerBox from "./SpecialContainerBox";

// for filtering we can use route

export default function CategoryResult(){
        // the fetcher useSWR - enables client side caching
    let { data , isLoading , error} = useSWR('https://addis-eats-backend.onrender.com/menu/specials' , fetcher 
    );

    // {
            // refresh on every 15 minutes
        //     refreshInterval: 900000,      // Disable automatic polling (default is 0)
        //     revalidateOnFocus: true, // Revalidate when window gets focused (default: true)
        //     revalidateOnReconnect: true, // Revalidate when browser regains network (default: true)
        //     dedupingInterval: 2000,  // Request deduplication time window in ms (default: 2000)
        // }
    // the data sent here is returned by the fetcher

    // then everytime u do a refetch you should reset the total
    let setTotalSpecialItems  = useSpecialItemsChoice(state => state.setTotalSpecialItems);

    // console.log('data from fetchimg');
    // console.log(data)

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


    return (<div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "20px",
                paddingBottom: "24px",
            }}
        >
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