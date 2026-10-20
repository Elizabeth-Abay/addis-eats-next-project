'use server';
import orders from "../data/orderHistory.json";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(
    "C:/Users/HP/OneDrive/Desktop/Addis-Eats-final/addis-eats/src/app/data", 
    "orderHistory.json"
);

export async function setUpHistory({userId , deliveryFee , grandTotal , cart , destinationPlace }){
    // the userId will be the key
    // cart is an array of objects = [{ id , name , amount , price , customOrder }] ,

    // when u set it up write in the orders
    // orderHistory = { userId : [ cart-1 [{ id , name , amount , price , customOrder }] ] , userId2 }

    // loop through the object keys and then match the userId

    let found = false;
    let orderHist = {cart , payment : { deliveryFee , grandTotal} , date : new Date().toLocaleString() , destinationPlace}


    let targetId = userId.toLowerCase()
    for (let key of Array.from(Object.keys(orders))){
        if (key.toLowerCase() === targetId){
            found = true
            // then append the current cart and all information to the array
            
            // key.push will update the thing in place
            orders[key].push(orderHist);

            break;
        }
    }

    if (!found) {
        // this is the first order by the user
        orders[userId] = [orderHist]
    }
    
    try {
        await fs.writeFile(filePath , JSON.stringify(orders));
    
        return {
            success : true
        }
    } catch (error) {
        // // console.log(`Error while order history writing ${error}`)
        
    }


}


export async function getOrderHistory(userId) {
    // console.log("orders imported from json")
    // console.log(orders)

    let userIdsFromOrderHistory = Array.from(Object.keys(orders));
    let targetId = userId.toLowerCase()
    // console.log('target ids');
    // console.log(targetId);
    // console.log(userIdsFromOrderHistory)

    for (let item of userIdsFromOrderHistory){
        // console.log("item from here")
        // console.log(item)
        if (item.toLowerCase() === targetId){
            return {
                success : true,
                data : orders[item]
            } // return the array of orders
            // [{cart , payment : { deliveryFee , grandTotal} , date : new Date().toLocaleString()}]
        }
    }
    
    return {
        success : true, 
        data : []
    }
}


