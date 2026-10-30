import { Suspense } from "react";
import Footer from "./Footer";

export default function SuspenseFooter(){
    return (
        <Suspense fallback={<div></div>}>
            <Footer/>
        </Suspense>
    )
}