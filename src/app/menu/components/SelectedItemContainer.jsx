"use client"
import { useRouter } from "next/navigation";
import useCartStore from "@/app/(stores)/CartStore";
// import {ShoppingBag} from 'react-icons'

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
        <div 
            style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "680px",
        zIndex: 50,
        backgroundColor: "rgba(24, 12, 7, 0.92)",
        backgroundImage:
          "linear-gradient(135deg, rgba(38, 20, 14, 0.95) 0%, rgba(20, 10, 6, 0.98) 100%)",
        border: "1px solid rgba(245, 158, 11, 0.35)",
        borderRadius: "20px",
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(16px)",
        boxShadow: "0 16px 36px -6px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.15)",
        animation: "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
        >
            <div className="basket-content-left"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                }}
            >
            
            
            <div className="basket-info">
                <div className="basket-header">
                <span className="item-count"
                    style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                backgroundColor: "#ef4444",
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "700",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #180c07",
            }}
                >
                    {cart?.length || 0}
                </span>
                <span className="dot">•</span>
                <span className="price-display"
                    style={{ display: "flex", alignItems: "baseline", gap: "3px" }}
                >
                    <span className="currency" style={{
                    fontSize: "10px",
                    color: "#f59e0b",
                    fontWeight: "600",
                    }}>ETB</span>
                    <span className="amount"
                        style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "#f59e0b",
                }}
                    >{(totalPrice || 0).toLocaleString()}</span>
                </span>
                </div>
                <p className="basket-subtitle"
                    style={{
              margin: "2px 0 0 0",
              fontSize: "11px",
              color: "rgba(255, 255, 255, 0.55)",
              fontWeight: "400",
            }}
                >Includes pure teff injera rolls</p>
            </div>
            </div>

            <button className="view-basket-btn" 
            style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 18px",
          borderRadius: "14px",
          backgroundColor: "#f59e0b",
          color: "#180c07",
          border: "none",
          fontWeight: "700",
          fontSize: "13px",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(245, 158, 11, 0.35)",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fbbf24";
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow =
            "0 6px 18px rgba(245, 158, 11, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#f59e0b";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 14px rgba(245, 158, 11, 0.35)";
        }}
            onClick={
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