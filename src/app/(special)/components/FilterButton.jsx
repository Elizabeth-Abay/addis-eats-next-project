"use client"

import useSpecialItemsChoice from "@/app/(stores)/SpecialItems";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CategoryFilter({type , filterName }){
    let router = useRouter()
    // we will need its name here
    // when clicked I want it to dispatch sthg
    // then that sthg will be used for filtering
    // this is filtering for specials so onClick it shld make fetch request
    // but since there is a cache then it wld deduplicate


    // onClick should set the filtered things be 
    // server wld do the first time rendering and client acts wld change it
    // so the server wld set the props in the first render
    // the first render wld make the container have all data
    // but the client action will make it change

    // ! for server comp
    // let currentPath = usePathname();

    let filterFunction = useSpecialItemsChoice(state => state.setRenderedThings)


    
    let onClick = () => {
        // fetch the data then 
        // refeth
        // onClick set the parent url path , when it rerenders then make the whole thing again
        // ! for server component
        // let params = new URLSearchParams();
        // params.set('category' , filterName);
        
        // ! for server component
        // router.replace(`${currentPath}?${params.toString()}`)

        console.log("filter btn clicked")
        filterFunction(filterName);
        // which will cause a rerender
    }


    
    return (
        <button className="category-filter-btn active" onClick={onClick}>
            {type}
        </button>
    )
}