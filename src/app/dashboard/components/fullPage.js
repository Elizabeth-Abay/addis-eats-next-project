// this is the server component 
// it aggregates and passes summaries

import { headers } from "next/headers"
import { SUB_CITIES } from "../../(constants)/variable"
import RevenueChart from "./RevenueChart"
import orders from "../../data/orderHistory"



// ! ways to create a line chart


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