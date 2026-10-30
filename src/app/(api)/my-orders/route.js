import { cookies } from "next/headers";
import { getOrderHistory } from "../../(actions)/orderHistory";

export async function GET(req) {
    try{

        let cookiesUser = await cookies()
        
        // accessing the actual object
        let actualCookieValue = JSON.parse(cookiesUser.get('sessionInfo')['value']);

        if (!actualCookieValue) return Response.json({
            success : false,
            reason : "Cookie not provided"
        })
    
        // here the route handler protection
        let { userId } = actualCookieValue;
    

        // // console.log('trying to get the order history')
        // // console.log(userId)
        let orders = await getOrderHistory(userId);
        // // console.log("Orders sent from there")
        // // console.log(orders)

        return Response.json(orders);

        // 


    } catch (error){
        return Response.json({'error': error});
        // // console.log(`Error while get handling ${Err}`)
    }
    
}