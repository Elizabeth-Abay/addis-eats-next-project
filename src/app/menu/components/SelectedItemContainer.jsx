"use client"
import { useRouter } from "next/navigation";
import useCartStore from "@/app/(stores)/CartStore";

export default function SelectedItemsContainer(){
    // we will need the total selected items and total price
    // and when the viewBasket gets clicked then go to cart

    let router = useRouter()
    // we can have a total calculator and also have the number = cart.length
    // when the view basket gets clicked then u will go to the carts page
    // in the state there is cart property - and total too
    
    let cart = useCartStore(state => state.cart)
    let totalPrice = useCartStore(state => state.total)

    return (
        <div className="total-basket-container-in-menu">
            <div className="basket-content-left">
            <div className="basket-icon-box">
                {/* <ShoppingBag size={22} color="#ffffff" strokeWidth={2} /> */}
            </div>
            
            <div className="basket-info">
                <div className="basket-header">
                <span className="item-count">
                    Selected: {cart?.length || 0} {cart?.length === 1 ? 'item' : 'items'}
                </span>
                <span className="dot">•</span>
                <span className="price-display">
                    <span className="currency">ETB</span>
                    <span className="amount">{(totalPrice || 0).toLocaleString()}</span>
                </span>
                </div>
                <p className="basket-subtitle">Includes pure teff injera rolls</p>
            </div>
            </div>

            <button className="view-basket-btn" onClick={
                    () => {
                        router.push('/cart'); 
                    }
                }>
            <div className="btn-label">
                <span>View</span>
                <span>Basket</span>
            </div>
            {/* <ArrowRight size={20} strokeWidth={2.2} /> */}
            Go to cart
            </button>
        </div>
    )
}