'use client'

import useMenuStore from "@/app/(stores)/MenuStores"
import { fetcher } from "@/app/fetcher"
import { useEffect } from "react"
import useSWR from "swr"
import MenuBox from "./MenuBox"

export default function MenuContainerClient(){
    let { data , isLoading , error } = useSWR('https://addis-eats-backend.onrender.com/menu/' , fetcher , 
        {
            // refresh on every 15 minutes
            refreshInterval: 900000,      // Disable automatic polling (default is 0)
            revalidateOnFocus: true, // Revalidate when window gets focused (default: true)
            revalidateOnReconnect: true, // Revalidate when browser regains network (default: true)
            dedupingInterval: 2000,  // Request deduplication time window in ms (default: 2000)
        }
    )

    let setTotalMenuItems = useMenuStore(state => state.setTotalMenuItems);

    // to prevent infinite rerendering useEffect

    useEffect(
        () => {
            if (data) setTotalMenuItems(data)
        } , [setTotalMenuItems , data]
    )

    let rendered = useMenuStore(state => state.renderedMenuItems);

    if (isLoading) return (
        <div>
            Loading Menu from the client
        </div>
    )

    if (error) return (
        <div>error</div>
    )


return (
        <div className="menu-container">
            {rendered.length > 0 ? (
                        rendered.map((item) => (
                        <MenuBox key={item.id} dish={item} />
                        ))
                    ) : (
                        <p style={{ color: "rgba(255,255,255,0.6)", gridColumn: "1 / -1" }}>
                        No items available for this category.
                        </p>
                    )}
        </div>
)
}