"use client"
import { FaPlus } from "react-icons/fa6";
import useCartStore from "../../(stores)/CartStore";
import { useState } from "react";


export default function AddBtn({props }){
    let {id , nameEn ,priceETB} = props;
    let [ buttonName , setButtonName ] = useState('Quick Add');
    let [ isClicked , setIsClicked ] = useState(false)

    const addItem = useCartStore((state) => state.addItem);


    const handleQuickAdd = (e) => {
        // CRITICAL: Prevent navigating to detail page when clicking Quick Add
        setButtonName('Adding to cart')
        setIsClicked(true)
        e.stopPropagation();
        addItem({
        id,
        name: nameEn,
        amount: 1,
        price: priceETB,
        customOrder: {},
        });

        setTimeout(
            () => {
                setButtonName('Quick Add')
                setIsClicked(false)
            },
            2000
        )
    };

    return (
        
        <button
            className={`quick-add-btn ${isClicked ? 'clicked' : ''}`}
            onClick={handleQuickAdd}
        >
            <FaPlus size={12} />{buttonName}
        </button>
    );

}