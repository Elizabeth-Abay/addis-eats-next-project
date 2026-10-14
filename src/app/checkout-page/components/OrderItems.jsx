"use client"
import useCartStore from "../../(stores)/CartStore";
import OrderBox from "./OrderBox";

export default function OrderItems(){

    let cart = useCartStore(state => state.cart);
    let grandTotal = useCartStore(state => state.grandTotal)
    let deliveryFee = useCartStore(state => state.deliveryFee)
    let total = useCartStore(state => state.total)
    
    return (
        <div>
            <div className="scroll-container">
                {cart.map((item) => (
                    <OrderBox key={item.id} item={item}/>
                ))}
            </div>
            
            <div className="payment-holder">
                <h3>Items Subtotal</h3>
                <h2>{total}</h2>
            </div>
        </div>
    )
}