import ConfirmOrderAndaPay from "./ConfirmOrder";
import DeliveryDestination from "./DeliveryDestination";
import OrderItems from "./OrderItems";
import RecipientContact from "./RecipientContact";
import PaymentMethodBox from "./PaymentMethod";
import { paymentMethods  } from "../../(constants)/variable";
import '../../cart/style/style.css'
import { cookies } from "next/headers";


export default async function FullPage(){
    
    let userCookie = await cookies();
    let actualCookieValue = JSON.parse(userCookie.get('sessionInfo').value);
    let userId = actualCookieValue.userId;

    


    return (
        <div className="checkout-container"> 
            <RecipientContact/>
            <DeliveryDestination />


            <OrderItems/>

            <ConfirmOrderAndaPay userId={userId}/>

        </div>
    );
}