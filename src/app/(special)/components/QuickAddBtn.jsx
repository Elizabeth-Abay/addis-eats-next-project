"use client"
import { FaPlus } from "react-icons/fa6";
import useCartStore from "../../(stores)/CartStore";


export default function AddBtn({props }){
    let {id , nameEn ,priceETB} = props;

    const addItem = useCartStore((state) => state.addItem);


    const handleQuickAdd = (e) => {
        // CRITICAL: Prevent navigating to detail page when clicking Quick Add
        e.stopPropagation();
        addItem({
        id,
        name: nameEn,
        amount: 1,
        price: priceETB,
        customOrder: {},
        });
    };

    return (
        
        <button
            className="quick-add-btn"
            onClick={handleQuickAdd}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#f59e0b",
                color: "#180c07",
                border: "none",
                borderRadius: "12px",
                padding: "8px 14px",
                fontSize: "12px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                transition: "transform 0.15s ease",
            }}
        >
            <FaPlus size={12} /> Quick Add
        </button>
    );

}