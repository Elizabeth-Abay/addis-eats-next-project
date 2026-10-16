// import { cacheLife } from "next/cache";
import MenuBox from "./MenuBox";
export const dynamic = 'force-dynamic';

export default async function MenuContainer({searchParams}){
    // this is async it is server component and it is dynamic
    // "use cache"

    let resolvedParams = await searchParams;
    let category = resolvedParams?.category || "all";
    let name = resolvedParams?.name || "";

    let result = await fetch('https://addis-eats-backend.onrender.com/menu/');
    // here we are not invalidating the cache so we gotta go that
    // cacheTag("menu-page-cache")

    // cacheLife(
    //     {
    //         // expire the cache every hour and make the request again
    //         expire : 3600
    //     }
    // )
    // when we click the filter buttons we can revalidate the cache


    if (!result || !result.ok) return alert('Problem fetching the menu');

    // else then you can dispatch the event to create the menu list
    // when it first loads it will set the menu
    let res = await result.json();

    // then check the way to filter the thing
    // is it name or category
    

    let { data } = res;

    // console.log("Data from menu");
    // console.log(data)

    let rendered = data; // the source of truth for the thing to be rendered in the menu container

    if (name != "") {
        const escapedInput = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const searchRegex = new RegExp(escapedInput, 'i');

        // console.log("Rendering data from the name filter")
        rendered = data.filter(
            item => {
                if(searchRegex.test(item.nameEn)) {
                    return item
            }}
        )
    } else {
        switch (category){
            case 'wet':
                    rendered = data.filter(
                    (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
                    )
                    break
            case 'tibs':
                rendered = data.filter(
                    (item) => item.category.toLowerCase().trim() === 'tibs & grills'
                    )
                    break

            case 'kitfo':
                rendered = data.filter(
                    (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
                    )
                break

            case 'tsom':
                rendered = data.filter(
                    (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
                    )
                    break
            case 'beverages':
                rendered = data.filter(
                    (item) => item.category.toLowerCase().trim() === 'beverages & tej'
                    )
                    break
                
            // default:
            //     rendered = data
        }
    }


    // console.log("Rendered thing in the menu");
    // console.log(rendered)

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

        // <div >
        //     {
        //         rendered?.map(
        //             item => {
        //                 let idNew = `${item.id}${addingId++}`
        //                 return <MenuBox key={idNew} dish={item}></MenuBox>
        //             }
        //         )
        //     }
        // </div>
    )


}