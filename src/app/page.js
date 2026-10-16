import { Suspense } from "react";
import SpecialPage from "./(special)/page";

export default function HomePage({searchParams}){
    
    return (
        <Suspense fallback = {
            <div>
                Loading Special Data
            </div>
        }>
            <SpecialPage searchParams={searchParams} />
        </Suspense>
    )
}