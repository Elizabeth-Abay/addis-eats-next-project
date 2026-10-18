import { headers } from "next/headers";
import { getOrderHistory } from "../../(actions)/orderHistory";

export async function GET(req) {
    try{
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
        }
    

        // console.log('trying to get the order history')
        // console.log(userId)
        let orders = await getOrderHistory(userId);
        // console.log("Orders sent from there")
        // console.log(orders)

        return Response.json(orders);

        // 


    } catch (Err){
        // console.log(`Error while get handling ${Err}`)
    }
    
}