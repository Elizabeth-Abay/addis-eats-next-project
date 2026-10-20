// this is the server component 
// it aggregates and passes summaries

import { SUB_CITIES } from "../(constants)/variable"
import RevenueChart from "./components/RevenueChart"

// dashboard - revenue ordered by neighbourhood // bar chart
// orders over time as a line chart 
// ! ways to create a line chart
// paged order table sorted from the url

// get the whole orders first
// then check the area of delivery and the total revenue u got from the place



const orders = [ { "destination" : "Arada" , grandTotal : 3000 } , { "destination" : "Bole" , grandTotal : 30000 } , { "destination" : "Gulele" , grandTotal : 13000 }]

const byArea = Array.from(Object.keys(SUB_CITIES)).map(
    (subCity) => {
        return {
            subCity,
            revenue : orders.filter(
                // where the destination matches the place
                order  => order.destination === subCity
            ).reduce(
                (sum , orderFiltered ) => sum + orderFiltered.grandTotal , 0
            )
        }
    }
)

export default function Page(){
    // byArea is an array of objects with {subCity , revenue}

    return (
        <RevenueChart data={byArea} />
    )

}