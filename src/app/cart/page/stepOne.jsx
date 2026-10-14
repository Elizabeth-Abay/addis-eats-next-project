import CartItemContainer from "../components/CartItemmContainer";
import CheckoutButton from "../components/CheckoutButton";
import DeliveryBanner from "../components/DeliveryBanner";
import DiningEtiquette from "../components/DinningEtiquette";
import GurshaPackage from "../components/GurshaComponent";
import PaymentInfo from "../components/PaymentInfo";


export default function StepOne(){
    return (
        <div>
            <GurshaPackage />
            <DeliveryBanner />
            <CartItemContainer />
            <CheckoutButton />
            <DiningEtiquette />
            <PaymentInfo/>
        </div>
    )
}