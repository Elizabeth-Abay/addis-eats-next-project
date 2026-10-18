"use client"
import useCartStore from "../../(stores)/CartStore";
import CartBox from "./CartBox";

export default function CartItemContainer(){
    let cart = useCartStore(state => state.cart);

    //// // console.log('cart from cart item');
    //// // console.log(cart)

    return(
        <div className="scroll-container">
            {cart?.map((item) => (
                <CartBox className="scroll-item" key={item.id} item={item}/>
            ))}
        </div>
    )
}