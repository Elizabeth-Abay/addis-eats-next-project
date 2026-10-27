import { Suspense } from "react";
import OrderPage from "./pages/OrderPage";
import { OrderPageSkeleton } from "./components/OrderPageSkeleton";

export default function ItemPage({params}){
    return (
        <Suspense fallback={
            <OrderPageSkeleton/>
        }>
            <OrderPage params={params}/>
        </Suspense>
    )
}