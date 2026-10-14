// it will need to see how many items are in there
// it will need to use the context
"use client"
import useCartStore from "../../../../stores/CartStore"



export default function GurshaPackage(){
    
    let cart = useCartStore(state => state.cart)
        
    return (
        <div className="gursha-package">
            <h1>Your Gursha Basket</h1>
            <h4>{cart.length || 0} Delicacies</h4>
        </div>
    )
}