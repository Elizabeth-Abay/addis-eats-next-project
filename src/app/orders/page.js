// orders per day 
// heading - naming the range and unit
// chart data put into a table below it

import OrderTable from "./component/OrderTable";
import Pager from "./component/Pager";
import {  cookies } from "next/headers";
import { supabase } from "../clients/supabaseClient";
import Footer from "../(components)/Footer";
import SuspenseFooter from "../(components)/SuspenseFooter";

// order table - real markup , sorting in the url 
// links for paging
// Paging - to break large dataset into smaller chunks

export default async function Page({ searchParams }){
    
    let parameters = await searchParams;

    let userCookie = await cookies();
    let actualCookieValue = JSON.parse(userCookie.get('sessionInfo').value);
    let userId = actualCookieValue.userId;

    
    let page = Number( parameters?.page ?? 1);

    let ordersPerPage = 5

    let userOrder = [];
    if (userId) {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .order('id', { ascending: false });

            if (error) throw error;

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


    let startIndex = (page - 1) * ordersPerPage;
    let endIndex = startIndex + ordersPerPage;
    
    let totalOrdersCount = userOrder.length;
    endIndex = endIndex >= totalOrdersCount ? totalOrdersCount : endIndex;

    let seenOrders = userOrder.slice(startIndex, endIndex);

    let ids = startIndex + 1; 
    let importantInfo = seenOrders.map(item => {
        return {
            id: ids++,
            grandTotal: item["payment"]["grandTotal"]
        };
    });
    

    return (
        <div>
            <OrderTable orders={importantInfo} />
            <Pager seenOrders={importantInfo} totalCount={totalOrdersCount} page={page} />
        </div>
    );
}