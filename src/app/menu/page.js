import { Suspense } from "react";
import './style/style.css';
import CategoryFilterContainer from "./components/CategoryFilterContainer";
import MenuContainer from "./components/MenuContainer";
import SearchBar from "./components/SearchBar";
import SelectedItemsContainer from "./components/SelectedItemContainer";
import TraditionalGursha from "./components/TraditionalGursha";
import MenuContainerClient from "./components/MenuContainerClient";

export default async  function MenuPage({searchParams}){

    // we wld have used the server component wld require Suspense surrounding it
    return(
        <div>
            <SearchBar/>
            <TraditionalGursha/>
            <CategoryFilterContainer/>
            
            <MenuContainerClient/>
            <SelectedItemsContainer/>
        </div>
    )
}