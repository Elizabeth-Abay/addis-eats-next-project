// orders per day 
// heading - naming the range and unit
// chart data put into a table below it

import OrderTable from "./component/OrderTable";
import Pager from "./component/Pager";
import { headers } from "next/headers";
import orders from '../data/orderHistory.json'

// order table - real markup , sorting in the url 
// links for paging
// Paging - to break large dataset into smaller chunks

export default async function Page({ searchParams }){
    // to filter the orders based on price
    // above some price point
    let parameters = await searchParams;

    let headerrs = await headers();
    let cookieString = headerrs.get('cookie')
    

    const cookies = cookieString.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});
    
    let userId = null;

    if (cookies.sessionInfo) {
        // 2. Decode URL encoding (e.g., %7B -> {, %22 -> ", etc.)
        const decodedSession = decodeURIComponent(cookies.sessionInfo);
        
        // 3. Parse the JSON string into an object
        const sessionObj = JSON.parse(decodedSession);
        
        // 4. Grab the userId
        userId = sessionObj.userId;
        // the userId will be for accepting the cart
    }


    console.log("Received the search Params");
    console.log(parameters)


    // the pages will be given in the search parameters
    // and the user will be able to see the number of orders based on the size

    let page = Number( parameters?.page ?? 1);
    console.log(`page ${page}`)

    let ordersPerPage = 5

    // users shld see some of their orders
    // let ordersPage = page * ordersPerPage;

    // then get the orders array
    // this page displays the order for the user

    let ids = 1;
        

    let startIndex = (page - 1) * ordersPerPage;
    let endIndex = startIndex + ordersPerPage;

    console.log("userId");
    console.log(userId)
    let userOrder = orders[userId]; // give us an array
    console.log("userOrder");
    console.log(userOrder)

    
    endIndex = endIndex >= userOrder.length ? userOrder.length : endIndex

    // to give the orders number
    let seenOrders = userOrder.slice(startIndex ,endIndex )


    let importantInfo = seenOrders.slice(startIndex , endIndex).map(
        item => {return {
            id : ids++,
            grandTotal : item["payment"]["grandTotal"]
        }}
    )
    
    console.log("importantInfo");
    console.log(importantInfo);



    // using the search params for sorting and ordering
    // to order the things in the order page using parameters
    return (
        <div>
            <OrderTable orders={importantInfo}/>
            <Pager seenOrders={importantInfo}/>
        </div>

        // and there is a pager
        // the pager will contain a line chart representation of the data
        // and when the user clicks next then push on the router
        
    )
}