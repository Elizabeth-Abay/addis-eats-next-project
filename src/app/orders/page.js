// orders per day 
// heading - naming the range and unit
// chart data put into a table below it

import OrderTable from "./component/OrderTable";
import Pager from "./component/Pager";
import {  cookies } from "next/headers";
import { supabase } from "../clients/supabaseClient";

// order table - real markup , sorting in the url 
// links for paging
// Paging - to break large dataset into smaller chunks

export default async function Page({ searchParams }){
    // to filter the orders based on price
    // above some price point
    let parameters = await searchParams;

    let userCookie = await cookies();
    let actualCookieValue = JSON.parse(userCookie.get('sessionInfo').value);
    let userId = actualCookieValue.userId;

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
        
    // 2. Fetch orders from Supabase using the validated userId from middleware
    let userOrder = [];
    if (userId) {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .order('id', { ascending: false });

            if (error) throw error;

            // Map Supabase columns back to the structure your app expects
            userOrder = (data || []).map(order => ({
                cart: order.cart,
                payment: {
                    deliveryFee: order.delivery_fee,
                    grandTotal: order.grand_total
                },
                destinationPlace: order.destination_place,
                date: order.date
            }));
        } catch (err) {
            console.error("Error fetching orders from Supabase:", err.message);
        }
    }

    console.log("userOrder from database:", userOrder);

    let startIndex = (page - 1) * ordersPerPage;
    let endIndex = startIndex + ordersPerPage;
    
    let totalOrdersCount = userOrder.length;
    endIndex = endIndex >= totalOrdersCount ? totalOrdersCount : endIndex;

    // Get the slice of orders for the current page
    let seenOrders = userOrder.slice(startIndex, endIndex);

    let ids = startIndex + 1; 
    let importantInfo = seenOrders.map(item => {
        return {
            id: ids++,
            grandTotal: item["payment"]["grandTotal"]
        };
    });
    
    console.log("importantInfo:", importantInfo);

    return (
        <div>
            <OrderTable orders={importantInfo} />
            <Pager seenOrders={importantInfo} totalCount={totalOrdersCount} page={page} />
        </div>
    );
}