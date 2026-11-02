// components/CustomizeOrder.jsx
"use client";

import { useState } from "react";
import useCartStore from "@/app/(stores)/CartStore";
import TitleContainer from "./TitleContainer";
import SpiceLevelSelector from "./SpiceLevelSelector";
import InjeraBaseSelector from "./InjeraSelector";
import SideAccentsSelector from "./SideAccentSelector";
import AmountSetter from "./AmountSetter";
import AddToCart from "./AddToCart";

export default function CustomizeOrder({ item }) {
    let { id, name, price } = item;
    let addItem = useCartStore((state) => state.addItem);

    let [customOrder, setCustomOrder] = useState({
        spiceLevel: "traditional",
        injera: "standard",
        sideAccents: [],
    });

    let [totalPrice, setTotalPrice] = useState(Number(price));
    let [amount, setAmount] = useState(1);

    const onSpiceChange = (chosenLevel) => {
        setCustomOrder((prev) => ({ ...prev, spiceLevel: chosenLevel }));
    };

    const onInjeraChange = (chosenType) => {
        setCustomOrder((prev) => ({ ...prev, injera: chosenType }));
    };

    const updateTotalPrice = ({ amount, type }) => {
        let newTotal = type === "plus" ? totalPrice + amount : totalPrice - amount;
        setTotalPrice(newTotal);
    };

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
        addItem({ id, name, amount, price: totalPrice, customOrder });
    };

    return (
        <div className="order-layout-grid">
        {/* LEFT COLUMN: Title & Dynamic Base/Updated Price */}
        <aside className="layout-column column-left">
            <TitleContainer item={{ ...item }} />
        </aside>

        {/* MIDDLE COLUMN: Customization Selectors */}
        <section className="layout-column column-middle">
            <SpiceLevelSelector onSpiceChange={onSpiceChange} />
            <InjeraBaseSelector
            onInjeraChange={onInjeraChange}
            updateTotal={updateTotalPrice}
            />
            <SideAccentsSelector
            updateSideAccents={updateSideAccents}
            updateTotal={updateTotalPrice}
            sideAccents={customOrder.sideAccents}
            />
        </section>

        {/* RIGHT COLUMN: Quantity Setter & Add to Basket Button */}
        <aside className="layout-column column-right">
            <div className="cart-action-card">
            <div className="cart-card-header">
                <span className="cart-card-subtitle">QUANTITY</span>
                <AmountSetter amount={amount} setAmount={setAmount} />
            </div>
            <AddToCart onClick={onAddToCart} total={totalPrice * amount} />
            </div>
        </aside>
        </div>
    );
}