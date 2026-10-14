// make it stateful and also add the add to basket button here
// props drilling is ok here
"use client"
import useCartStore from "@/app/(stores)/CartStore";
import { useState } from "react";
import AddToCart from "./AddToCart";
import AmountSetter from "./AmountSetter";
import InjeraBaseSelector from "./InjeraSelector";
import SideAccentsSelector from "./SideAccentSelector";
import SpiceLevelSelector from "./SpiceLevelSelector";
// we use the chosen side Accents in the receipt
// but we need to include that in the sideAccents
// in the order - it is used to include the order
// but total price will also be updated


export default function CustomizeOrder({item }){
    // console.log("price sent is here")
    let {id , name ,  price} = item;
    // console.log(price)
    let addItem = useCartStore(state => state.addItem)

    // use addItem for saying add to cart and updating the cart items
     // what do i want 
    // to store the custom order in some object and then when that changes
    // to update the price , the tick parts they will be handled by the elt itself
    let  [customOrder , setCustomOrder ] = useState({
        spiceLevel : 'tradtitional', // mid, traditional , fiery awaze
        injera : 'standard' ,// standard , brown-teff - will also add price to the cart
        sideAccents : [], // will contain the additional items
        // so input will have a name
        // when it gets clicked then it will add its price to the total
    });

    let [ totalPrice , setTotalPrice ] = useState(Number(price))

    let [ amount , setAmount ] = useState(1);

    let onSpiceChange = (chosenLevel)=> {
        setCustomOrder(
            prev => {
                return { ...prev , spiceLevel : chosenLevel}
            }
        ) 

        
    }

    let onInjeraChange = (chosenType) => {
        setCustomOrder(
            prev => {
                return { ...prev , injera : chosenType }
            }
        ) 
    }
    


    // but the total price in the cart will need to change as well
    let updateTotalPrice = ({ amount , type})=>{
        let newTotal = (type === 'plus') ? totalPrice + amount : totalPrice - amount

        setTotalPrice(newTotal)
    }

    const updateSideAccents = ({ type, added }) => {
        setCustomOrder((prev) => {
            const currentAccents = prev.sideAccents || [];
            const updatedAccents = added
            ? [...currentAccents, type]
            : currentAccents.filter((id) => id !== type);

            return { ...prev, sideAccents: updatedAccents };
        });
    };


    const onAddToCart = () => {
        addItem({ id , name , amount  , price : totalPrice , customOrder})


    }

    return (
        <div className="customize-order">
            <SpiceLevelSelector onSpiceChange={onSpiceChange} /> 
            <InjeraBaseSelector onInjeraChange={onInjeraChange} updateTotal={updateTotalPrice}/>
            <SideAccentsSelector updateSideAccents={updateSideAccents} updateTotal={updateTotalPrice}  sideAccents={customOrder.sideAccents} />
            <AmountSetter amount={amount} setAmount={setAmount}/>
            <AddToCart onClick={onAddToCart} total={totalPrice}/>
            
        </div>
    )
}

