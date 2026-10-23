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
        <button className="category-filter-btn active"
        style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: isActive ? "700" : "500",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                outline: "none",
                // Active vs Inactive Styles
                backgroundColor: isActive
                    ? "#f59e0b"
                    : "rgba(38, 20, 14, 0.6)",
                color: isActive ? "#180c07" : "rgba(255, 255, 255, 0.8)",
                border: isActive
                    ? "1px solid #f59e0b"
                    : "1px solid rgba(245, 158, 11, 0.2)",
                boxShadow: isActive
                    ? "0 4px 14px rgba(245, 158, 11, 0.35)"
                    : "0 2px 8px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
                if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(245, 158, 11, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "translateY(-1px)";
                }
            }}
            onMouseLeave={(e) => {
                if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(38, 20, 14, 0.6)";
                    e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.2)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    e.currentTarget.style.transform = "translateY(0)";
                }
            }}
        onClick={handleCategoryClick}>
            {name}
        </button>
    )
}