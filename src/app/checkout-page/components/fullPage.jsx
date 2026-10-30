// can we read headers in here
import ConfirmOrderAndaPay from "./ConfirmOrder";
import DeliveryDestination from "./DeliveryDestination";
import OrderItems from "./OrderItems";
import RecipientContact from "./RecipientContact";
import PaymentMethodBox from "./PaymentMethod";
import { paymentMethods  } from "../../(constants)/variable";
import '../../cart/style/style.css'
import { headers } from "next/headers";
import SuspenseFooter from "@/app/(components)/SuspenseFooter";


export default async function FullPage(){
    
    // in the checkout u will update the order history as well
    // this will make it be a dynamic page - reading headers

    const headersList = await headers();
    const cookieString = headersList.get('cookie');


    // console.log("headers list from the fullpage in checkout page");
    // console.log(Object.fromEntries(headersList.entries()));
    // console.log("cookies string")
    // console.log(cookieString)

    const cookies = cookieString.split(';').reduce((acc, cookie) => {
            const [key, value] = cookie.trim().split('=');
            acc[key] = value;
            return acc;
        }, 
        {}
    );

    let userId = null;

    if (cookies.sessionInfo) {
        // 2. Decode URL encoding (e.g., %7B -> {, %22 -> ", etc.)
        const decodedSession = decodeURIComponent(cookies.sessionInfo);
        
        // 3. Parse the JSON string into an object
        const sessionObj = JSON.parse(decodedSession);
        
        // 4. Grab the userId
        userId = sessionObj.userId;
    }


    // console.log("user id  from checkout");
    // console.log(userId)

    // // // // console.log('Getting the headers for checkouty');
    // // // // console.log(Object.fromEntries(headersList));
    // // // console.log(userId)
    // in the checkout button when u confirm the payment - order history
    // 
    
    return (
        <div className="checkout-container"> 
            <RecipientContact/>
            <DeliveryDestination />
            {
                paymentMethods.map(
                    paymentMethod => <PaymentMethodBox key={paymentMethod.id} item={paymentMethod}/>
                )
            }

            <OrderItems/>

            <ConfirmOrderAndaPay userId={userId}/>


        </div>
    );
}