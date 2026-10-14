import ConfirmOrderAndaPay from "./components/ConfirmOrder";
import DeliveryDestination from "./components/DeliveryDestination";
import OrderItems from "./components/OrderItems";
import RecipientContact from "./components/RecipientContact";
import PaymentMethodBox from "./components/PaymentMethod";
import { paymentMethods  } from "../(constants)/variable";
import '../cart/style/style.css'

export default function Page(){
    return (
        <div>
            <RecipientContact/>
            <DeliveryDestination />
            <ConfirmOrderAndaPay/>
            {
                paymentMethods.map(
                    paymentMethod => <PaymentMethodBox key={paymentMethod.id} item={paymentMethod}/>
                )
            }

            <OrderItems/>

        </div>
    );
}