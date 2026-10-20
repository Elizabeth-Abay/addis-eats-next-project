// this is the server component 
// it aggregates and passes summaries

import { headers } from "next/headers"
import { SUB_CITIES } from "../../(constants)/variable"
import RevenueChart from "./RevenueChart"
import orders from "../../data/orderHistory.json"

// dashboard - revenue ordered by neighbourhood // bar chart
// orders over time as a line chart 
// ! ways to create a line chart
// paged order table sorted from the url

// get the whole orders first
// then check the area of delivery and the total revenue u got from the place



// in the orders when u set them up 
// add the destination along with the grandTotal
// import the orders from the json file first



let userIds = Array.from(Object.keys(orders));
console.log("user ids")
console.log(userIds)

let revenueCalculator = (subCity) => {
    let totalRevenue = 0
    // so loop through the history object
    // find all the objects where the destination is the same as the subcity 
    // add the grandtotal for that

    userIds.forEach(
        key => {
            let value = orders[key][0];

            if (value['destinationPlace'] === subCity) {
                totalRevenue += value.payment.grandTotal
            }
            
        }
    )



    return totalRevenue;

}





const byArea = Array.from(Object.keys(SUB_CITIES)).map(
    (subCity) => {
        return {
            subCity,

            revenue : revenueCalculator(subCity)
        }
    }
)







// we gotta ensure the page level security in here
// users shld be admins to see this page
// and they will also have to provide their cookie

export default async function FullPage(){
    let headerrs = await headers();
            let cookieString = headerrs.get('cookie')
            
    
            const cookies = cookieString.split(';').reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split('=');
            acc[key] = value;
            return acc;
        }, {});
    
            let role = null;
    
            if (cookies.sessionInfo) {
                // 2. Decode URL encoding (e.g., %7B -> {, %22 -> ", etc.)
                const decodedSession = decodeURIComponent(cookies.sessionInfo);
                
                // 3. Parse the JSON string into an object
                const sessionObj = JSON.parse(decodedSession);
                
                // 4. Grab the userId
                role = sessionObj.role;
            }

    // byArea is an array of objects with {subCity , revenue}

    if (role !== "admin") return <div>You are not allowed to see this page </div>

    return (
        <RevenueChart data={byArea} />
    )

}