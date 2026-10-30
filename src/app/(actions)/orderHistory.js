'use server';
import { supabase } from "../clients/supabaseClient";
import orders from "../data/orderHistory";
import fs from "fs/promises";
import { cookies } from "next/headers";
import path from "path";

const filePath = path.join(process.cwd(), 'src/app/data/orderHistory.json');

// this is called directly from the client side
// export async function setUpHistory({deliveryFee , grandTotal , cart , destinationPlace }){
//     // the userId will be the key
//     // cart is an array of objects = [{ id , name , amount , price , customOrder }] ,

//     // when u set it up write in the orders
//     // orderHistory = { userId : [ cart-1 [{ id , name , amount , price , customOrder }] ] , userId2 }

//     // loop through the object keys and then match the userId

//     let found = false;
//     let orderHist = {cart , payment : { deliveryFee , grandTotal} , date : new Date().toLocaleString() , destinationPlace}


//     let userCookie = await cookies();

//     // accessing the actual object
//     let actualCookieValue = JSON.parse(userCookie.get('sessionInfo')['value']);

//     let {userId } = actualCookieValue;

//     let targetId = userId.toLowerCase()
//     for (let key of Array.from(Object.keys(orders))){
//         if (key.toLowerCase() === targetId){
//             found = true
//             // then append the current cart and all information to the array
            
//             // key.push will update the thing in place
//             orders[key].push(orderHist);

//             break;
//         }
//     }

//     if (!found) {
//         // this is the first order by the user
//         orders[userId] = [orderHist]
//     }
    
//     try {
//         await fs.writeFile(filePath , JSON.stringify(orders));
    
//         return {
//             success : true
//         }
//     } catch (error) {
//         // // console.log(`Error while order history writing ${error}`)
        
//     }


// }


// // this part is called from the route handler so it is ok
// export async function getOrderHistory(userId) {
//     // console.log("orders imported from json")
//     // console.log(orders)

//     let userIdsFromOrderHistory = Array.from(Object.keys(orders));
//     let targetId = userId.toLowerCase()
//     // console.log('target ids');
//     // console.log(targetId);
//     // console.log(userIdsFromOrderHistory)

//     for (let item of userIdsFromOrderHistory){
//         // console.log("item from here")
//         // console.log(item)
//         if (item.toLowerCase() === targetId){
//             return {
//                 success : true,
//                 data : orders[item]
//             } // return the array of orders
//             // [{cart , payment : { deliveryFee , grandTotal} , date : new Date().toLocaleString()}]
//         }
//     }
    
//     return {
//         success : true, 
//         data : []
//     }
// }


export async function setUpHistory({ deliveryFee, grandTotal, cart, destinationPlace }) {
    try {
        let userCookie = await cookies();
        let actualCookieValue = JSON.parse(userCookie.get('sessionInfo').value);
        let userId = actualCookieValue.userId;

        

        

        // Insert order directly to Supabase orders table
        const { error } = await supabase
            .from('orders')
            .insert([{
                user_id: userId,
                cart: cart,
                delivery_fee: deliveryFee,
                grand_total: grandTotal,
                destination_place: destinationPlace,
                date: new Date().toLocaleString()
            }]);

        if (error) throw error;

        return { success: true , userId , deliveryFee , grandTotal , };
    } catch (error) {
        console.log(`Error while writing order history: ${error.message}`);
        return { success: false };
    }
}

export async function getOrderHistory(userId) {
    try {
        const { data: userOrders, error } = await supabase
            .from('orders')
            .select('*')
            .ilike('user_id', userId);

        if (error) throw error;

        // Map database columns back to the array structure your frontend expects
        const formattedOrders = userOrders.map(order => ({
            cart: order.cart,
            payment: {
                deliveryFee: order.delivery_fee,
                grandTotal: order.grand_total
            },
            date: order.date,
            destinationPlace: order.destination_place
        }));

        return {
            success: true,
            data: formattedOrders
        };
    } catch (error) {
        return { success: true, data: [] };
    }
}

