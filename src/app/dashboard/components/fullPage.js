// this is the server component 
// it aggregates and passes summaries

import { headers } from "next/headers"
import { SUB_CITIES } from "../../(constants)/variable"
import RevenueChart from "./RevenueChart"
import orders from "../../data/orderHistory"

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



let paymentData = {
    'Addis Ketema' : 0,
    'Akaki Kaliti' : 0,
    'Arada' : 0 ,
    'Bole' : 0,
    'Gulele' : 0,
    'Kirkos' : 0 ,
    'Kolfe Keranio' : 0,
    'Lemi Kura' : 0,
    'Lideta' : 0,
    'Nifas Silk-Lafto' : 0,
    'Yeka' : 0
}


let revenueCalculator = () => {
    
    userIds.forEach(
        key => {

            // get the order for each user
            // then loop through the order , then update 
            // the destination and then the grand total
            console.log("values");
            let value = orders[key];

            // then loop through the value 
            // and then update the total price
            console.log(value)


            value.forEach(
                orderObj => {
                    let destination = orderObj['destinationPlace']

                    paymentData[destination] += orderObj['payment']['grandTotal']
                }
            )

            // loop through the values array 
            // update the 
            
        }
    )


}










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

    revenueCalculator()

    // but chart drawings require an array to  be passed 
    // thus creating an array

    let arrayOfVals = []

    let subCityKeys = Array.from(Object.keys(paymentData));

    subCityKeys.forEach(
        key => {
            // create a new object
            arrayOfVals.push({
                subCity : key,
                revenue : paymentData[key] 
            })
        }
    )

    return (
        <RevenueChart data={arrayOfVals} />
    )

}