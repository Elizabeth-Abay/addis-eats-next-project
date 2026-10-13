import MenuBox from "./MenuBox";

export default async function MenuContainer({params}){
    // this is async it is server component and it is dynamic
    let category = params?.category || "all";
    let name = params?.name || "all";

    let result = await fetch('https://addis-eats-backend.onrender.com/menu/' , { revalidate : 3600});

    if (!result || !result.ok) return alert('Problem fetching the menu');

    // else then you can dispatch the event to create the menu list
    // when it first loads it will set the menu
    let res = await result.json();

    // then check the way to filter the thing
    // is it name or category
    

    let { data } = res;

    let rendered; // the source of truth for the thing to be rendered in the menu container

    if (name) {
        const escapedInput = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const searchRegex = new RegExp(escapedInput, 'i');
        rendered = data.filter(
            item => {
                if(searchRegex.test(item.nameEn)) {
                    return item
            }}
        )
        console.log("Rendering items from name")
        console.log(rendered)
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

                
            default:
                rendered = data
        }
    }

    return (
        <div className="menu-container">
            {
                rendered?.map(
                    item => {
                        let idNew = `${item.id}${addingId++}`
                        return <MenuBox key={idNew} dish={item}></MenuBox>
                    }
                )
            }
        </div>
    )


}