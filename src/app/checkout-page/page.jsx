import { Suspense } from "react";
import FullPage from "./components/fullPage";

export default function Page(){
    return (
        <Suspense fallback={
            <div>Loading Checkout</div>
        }>
            <FullPage />
        </Suspense>
    )
}