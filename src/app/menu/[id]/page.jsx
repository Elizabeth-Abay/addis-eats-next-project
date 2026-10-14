import { Suspense } from "react";
import OrderPage from "./pages/OrderPage";

export default function ItemPage({params}){
    return (
        <Suspense fallback={
            <div>Loading Menu Item</div>
        }>
            <OrderPage params={params}/>
        </Suspense>
    )
}