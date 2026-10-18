import ConfirmOrderAndaPay from "./components/ConfirmOrder";
import DeliveryDestination from "./components/DeliveryDestination";
import OrderItems from "./components/OrderItems";
import RecipientContact from "./components/RecipientContact";
import PaymentMethodBox from "./components/PaymentMethod";
import { paymentMethods  } from "../(constants)/variable";
import '../cart/style/style.css'
import { headers } from "next/headers";


export default async function Page(){
    // in the checkout u will update the order history as well

    const headersList = await headers();
    const userId = headersList.get('userId');

    // in the checkout button when u confirm the payment - order history
    // 
    
    return (
        <div>
            <RecipientContact/>
            <DeliveryDestination />
            <ConfirmOrderAndaPay userId={userId}/>
            {
                paymentMethods.map(
                    paymentMethod => <PaymentMethodBox key={paymentMethod.id} item={paymentMethod}/>
                )
            }

            <OrderItems/>

        </div>
    );
}