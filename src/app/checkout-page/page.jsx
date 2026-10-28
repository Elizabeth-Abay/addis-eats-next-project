import { Suspense } from "react";
import FullPage from "./components/fullPage";
import "./style/style.css"

export default function Page(){
    return (
        <Suspense fallback={
            <div>Loading Checkout</div>
        }>
            <FullPage />
        </Suspense>
    )
}