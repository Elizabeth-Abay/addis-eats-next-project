"use client"
import useCartStore from "../../(stores)/CartStore";
import CartBox from "./CartBox";
import EmptyCartState from "./emptyCart";

export default function CartItemContainer(){
    let cart = useCartStore(state => state.cart);


    return(
        <div className="scroll-container">
            {cart?.map((item) => (
                <CartBox key={item.id} item={item}/>
            ))} || {
                <EmptyCartState/>
            } 
        </div>
    )
}