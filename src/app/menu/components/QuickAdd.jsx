"use client"

import { useState } from "react";
import useCartStore from "@/app/(stores)/CartStore";
import { HiOutlineShoppingCart } from "react-icons/hi2";

// bc it will be interactive with the client

export default function QuickAdd({props}){
    let {id , nameEn , priceETB } = props
    const [added , setAdded ] = useState(false)

    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addItem({
            id,
            name: nameEn,
            amount: 1,
            price: priceETB,
            customOrder: {},
        });
    
        // Quick micro-interaction feedback
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    return (
        <button
            type="button"
            onClick={handleAddToCart}
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 14px",
                backgroundColor: added ? "#10b981" : "#f59e0b",
                color: "#180c07",
                border: "none",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: added
                  ? "0 4px 14px rgba(16, 185, 129, 0.4)"
                  : "0 4px 14px rgba(245, 158, 11, 0.3)",
                transition: "all 0.2s ease",
              }}
            >
              <HiOutlineShoppingCart size={16} />
              <span>{added ? "Added!" : "Quick Add"}</span>
            </button>
    );
}