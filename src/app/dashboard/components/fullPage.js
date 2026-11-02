// this is the server component 
// it aggregates and passes summaries

import { headers } from "next/headers"
import { SUB_CITIES } from "../../(constants)/variable"
import RevenueChart from "./RevenueChart"
import orders from "../../data/orderHistory"
import Footer from "@/app/(components)/Footer";
import SuspenseFooter from "@/app/(components)/SuspenseFooter";

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

            let value = orders[key];

            value.forEach(
                orderObj => {
                    let destination = orderObj['destinationPlace']

                    paymentData[destination] += orderObj['payment']['grandTotal']
                }
            ) 
            
        }
    )

}

export default async function FullPage(){
    let userCookie = await cookies();
    let actualCookieValue = JSON.parse(userCookie.get('sessionInfo').value);
    let userId = actualCookieValue.userId;
    let role = actualCookieValue.role || "user";



    if (role !== "admin") return <div>You are not allowed to see this page </div>

    revenueCalculator()

    let arrayOfVals = []

    let subCityKeys = Array.from(Object.keys(paymentData));

    subCityKeys.forEach(
        key => {
            arrayOfVals.push({
                subCity : key,
                revenue : paymentData[key] 
            })
        }
    )

    return (
        <div>
            <RevenueChart data={arrayOfVals} />

        </div>
    )

}