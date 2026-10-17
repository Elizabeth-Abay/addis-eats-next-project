import { RESTAURANT_NAME } from "../(constants)/variable";
import CartButton from "./CartButton";
import NameCircle from "./nameCircle";


// will need access to the cart State
// the whole app is wrapped with the cart provider so we can use the context
export default function Header() {
    return (
        // the header will have 
        <div className="header-container">
            {/* horizontal div  that has name and cart part*/}
            <h1>{RESTAURANT_NAME}</h1>
            {/* <CartButton count={cart ? cart.length : 0}></CartButton> */}
            <CartButton />
            <NameCircle/>
            {/* in the header if the user is registered then have the initial name icon */}
            {/* else have anonymous user icon */}
        </div>
    )

}