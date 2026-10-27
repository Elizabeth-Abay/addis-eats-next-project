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
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
            color: "#f59e0b",
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "'Playfair Display', serif"
        }}>
            Loading culinary delights...
        </div>
    );

    if (error) return (
        <div style={{
            textAlign: "center",
            padding: "40px",
            color: "#ef4444",
            fontSize: "14px"
        }}>
            Failed to load menu items. Please check your connection.
        </div>
    );


return (
        <div 
            className="container-for-menu-box"
        >
            {rendered.length > 0 ? (
                rendered.map((item) => (
                    <MenuBox key={item.id} dish={item} />
                ))
            ) : (
                <p style={{
                    color: "rgba(255,255,255,0.6)",
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    padding: "40px 0",
                    fontSize: "15px"
                }}>
                    No items available for this category.
                </p>
            )}
        </div>
)
}