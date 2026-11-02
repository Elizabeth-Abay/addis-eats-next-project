"use client"
// * client component bc typing is required

import {  useState } from "react";
import useMenuStore from "@/app/(stores)/MenuStores";

export default function SearchBar(){
    let [ searchWord , setSearchWord ] = useState('')
    

    let setSearchBarFilter = useMenuStore( state => state.setSearchBarFilter);

    
    const handleChange = (e) =>{
        setSearchWord(e.target.value);
        
        setSearchBarFilter(searchWord)
        
    } 

    return (
        <div className="input-container">
        <svg 
            className="search-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
            className="actual-input" 
            value={searchWord}
            onChange={handleChange}
            id="search-bar" 
            type="text" 
            placeholder="Search dishes (Kitfo, Shiro, Tibs...)" 
        />
        </div>
    );
}