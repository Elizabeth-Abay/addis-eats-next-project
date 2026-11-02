import CartItemContainer from "../components/CartItemmContainer";
import CheckoutButton from "../components/CheckoutButton";
import DeliveryBanner from "../components/DeliveryBanner";
import DiningEtiquette from "../components/DinningEtiquette";
import GurshaPackage from "../components/GurshaComponent";
import PaymentInfo from "../components/PaymentInfo";


// ! work on the display when the cart is empty
export default function StepOne(){
    return (
        <div>
            {/* <DeliveryBanner /> */}
            <CartItemContainer />
            <CheckoutButton />
            {/* <DiningEtiquette /> */}
            <PaymentInfo/>
        </div>
    )
}