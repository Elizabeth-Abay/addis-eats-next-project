import SpecialContainerBox from "./SpecialContainerBox";


// it is ok to do the fetching here bc it is a server component
export default async function CategoryResultContainer({params}) {
    let searchParams = await params;

    let filter = searchParams.category || "all";

    let res = await fetch('https://addis-eats-backend.onrender.com/menu/specials')

    if (!res.ok) throw Error('Problem while fetching')
    
    let result = await res.json();

    let { data } = result;

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

    <div
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
    </div>
}