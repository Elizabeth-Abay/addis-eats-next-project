"use client"
import { useRouter } from "next/navigation";
import useCartStore from "../../(stores)/CartStore";
import { setUpHistory } from "@/app/(actions)/orderHistory";

export default function ConfirmOrderAndaPay({userId}){
    let grandTotal = useCartStore(state => state.grandTotal);
    let updateGrandTotal = useCartStore(state => state.updateGrandTotal);
    let cart = useCartStore(state => state.cart);
    let deliveryFee = useCartStore(state => state.deliveryFee);
    let destinationPlace = useCartStore(state => state.destinationPlace)
    
    let disabled = false;
    let isLoading = false;

    let router = useRouter()

    let onClick = () => {
        // when this button is clicked
        // 2 things happen
        // one is navigation to thank you page
        // second is clearing the cart state bc once they confirm the order and pay 
        // that is it
        // let navigate = useNavigate();
        // we should use Navigate component for navigation purpose

        updateGrandTotal({ amount : grandTotal , sign : 'minus' ,  percentage : false});

        // here also update the order history
        // order history - will include the name of things and the date and total price

        // this is bad 
        // we need to get the userId from the cookie not the client
        // layer of protection
        setUpHistory({deliveryFee , grandTotal , cart , destinationPlace})

        // //// // console.log('the state of the cart after confirm payment');
        // //// // console.log(state)
        router.replace('/receipt')
        // returns from event handlers are ignored 
    }
    return (
        <button 
            className="payment-btn" 
            onClick={onClick} 
            disabled={disabled || isLoading}
            type="button"
        >
            {/* Left side: Lock Icon + Label */}
            <div className="payment-btn-left">
                <svg 
                className="icon lock-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                <circle cx="12" cy="16.5" r="1" fill="currentColor"></circle>
                </svg>
                <span className="btn-label">Confirm Order & Pay</span>
            </div>

            {/* Right side: Amount + Arrow Icon */}
            <div className="payment-btn-right">
                <span className="btn-amount">
                ETB {grandTotal}
                </span>
                <svg 
                className="icon arrow-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </button>
    );
}
