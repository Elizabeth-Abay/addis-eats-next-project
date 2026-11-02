import ThankYouPage from "./page/ThankYouPage";
import { Suspense } from "react";

export default function Home(){
    return (
        <div className="full-receipt-container">
            <Suspense fallback={
                    <div>
                        <span>Order #: <strong>xxxxxx</strong></span>
                        <span>Date: Today</span>      
                    </div>
        }>
        
            <ThankYouPage/>
        </Suspense>
        </div>
        
    );
}