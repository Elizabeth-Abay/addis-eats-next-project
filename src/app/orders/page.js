// orders per day 
// heading - naming the range and unit
// chart data put into a table below it

import OrderTable from "./component/OrderTable";
import Pager from "./component/Pager";

// order table - real markup , sorting in the url 
// links for paging
// Paging - to break large dataset into smaller chunks

export default async function Page({ searchParams }){
    // to filter the orders based on price
    // above some price point
    let parameters = await searchParams;
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

    let orders = [ 
            { id : 1 , grandTotal : 400 } ,  
            { id : 2 , grandTotal : 4000 } , 
            { id : 3 , grandTotal : 7654 } , 
            { id : 4 , grandTotal : 49400 },
            { id : 5 , grandTotal : 49200 },
            { id : 6 , grandTotal : 49300 },
            { id : 7 , grandTotal : 49200 },
            { id : 8 , grandTotal : 49060 },
            { id : 9 , grandTotal : 46900 },
            { id : 10 , grandTotal : 49060 },
            { id : 11 , grandTotal : 46900 },
            { id : 12 , grandTotal : 49007 },
            { id : 13 , grandTotal : 49600 },
    ];

        

    let startIndex = (page - 1) * ordersPerPage;
    let endIndex = startIndex + ordersPerPage;
    let seenOrders = orders.slice(startIndex ,endIndex )
    
    console.log("seenOrders");
    console.log(seenOrders)
    // using the search params for sorting and ordering
    // to order the things in the order page using parameters
    return (
        <div>
            <OrderTable orders={seenOrders}/>
            <Pager seenOrders={seenOrders}/>
        </div>

        // and there is a pager
        // the pager will contain a line chart representation of the data
        // and when the user clicks next then push on the router
        
    )
}