// here this is a dynamic route and u gotta receive the id and then display it accordingly
// we have to load in the whole data in here first and then give it to the containers

import { cacheTag } from "next/cache";
import TitleContainer from "./components/TitleContainer";


export default async function OrderPage({params}){
    "use cache"
    // means cache this and use this until expiry

    let { id } = await params;


    // here since there is deduplication it will use that and not make too many request to the server
    let result = await fetch('https://addis-eats-backend.onrender.com/menu/');
    

    
    if (!result || !result.ok) return alert('Problem fetching the menu');
    
    let res = await result.json();

    let { data } = res;


    let found = data.find(
        menu => menu.id === String(id)
    )

    let item =  { id : found.id ,name : found.nameEn , description : found.description  , price : found.priceETB }
    
    return (
        <TitleContainer item={item}/>
    )

}