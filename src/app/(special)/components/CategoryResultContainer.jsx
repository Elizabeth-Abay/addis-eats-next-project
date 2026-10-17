import SpecialContainerBox from "./SpecialContainerBox";


// ! ! things that i have issues with is the caching and pre rendering parts
// ! in here the pre rendered part what is up with that
// it is ok to do the fetching here bc it is a server component
export default async function CategoryResultContainer({searchParams}) {
    // "use cache"
    // since i said use cache it can use the cache in there even offline
    let searchParamsUpdated = await searchParams;
    // this is a dynamic page

    let filter = searchParamsUpdated?.category || "all";
    // console.log(`filter selected ${filter}`)

    // * issues faced
    // * --> prerendering 
    // build time / revalidation - serve the stale data while revalidating
    // the result is html and rsc payload == cached and served from cdn

    // in here set the fallback to be cached data / empty
    // by default fetch will have a cached data thus during a build - that can be served
    // and the whole server will serve that indefinitely
    // when u fetch sthg then it will be stored in the cache
    // this is a shared cache stored in the server and since it is in there we gotta specify the time 
    // to refetch that after sometime
    let res = await fetch('https://addis-eats-backend.onrender.com/menu/specials' , { next : { revalidate : 3600} } );

    if (!res.ok) {
        console.log("Erorr while fetching the data");
        console.log(res)
    }

    
    let result = await res.json();

    let { data } = result;

    // console.log("data incoming");
    // console.log(data)

    // but filter the things seen in here
    // bc we may set the data in there --> according to the filter

    let filteredData = []

    switch (filter.toLowerCase()){
        case 'wat':
            filteredData = data.filter(
                (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
            )
            break
        case 'tibs':
            filteredData = data.filter(
                (item) => item.category.toLowerCase().trim() === 'tibs & grills'
            )
            break
        case 'raw':
            filteredData = data.filter(
                (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
            )
            break
        case 'tsom':
            filteredData = data.filter(
                (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
            )
            break
        case 'beverage':
            filteredData = data.filter(
                (item) => item.category.toLowerCase().trim() === 'beverages & tej'
            )
            break
        default:
            filteredData = data
    }

    // console.log("filtered data");
    // console.log(filteredData);

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