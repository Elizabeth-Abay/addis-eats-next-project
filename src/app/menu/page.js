import { Suspense } from "react";
import './style/style.css';
import CategoryFilterContainer from "./components/CategoryFilterContainer";
import MenuContainer from "./components/MenuContainer";
import SearchBar from "./components/SearchBar";
import SelectedItemsContainer from "./components/SelectedItemContainer";
import TraditionalGursha from "./components/TraditionalGursha";

export default async  function MenuPage({searchParams}){
    return(
        <div>
            <SearchBar/>
            <TraditionalGursha/>
            <CategoryFilterContainer/>
            
            <Suspense fallback={
                <div>Loading....</div>
            }>
                {/* this is a dynamic part */}
                <MenuContainer searchParams={searchParams}/>

            </Suspense>
            <SelectedItemsContainer/>
        </div>
    )
}