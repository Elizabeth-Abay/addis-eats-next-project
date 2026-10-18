import { getOrderHistory } from "../../(actions)/orderHistory";

export async function GET(req) {
    try{
        let { userId } = req.headers;

    
        let orders = await getOrderHistory(userId);

        return orders;

        // 


    } catch (Err){
        console.log(`Error while get handling ${Err}`)
    }
    
}