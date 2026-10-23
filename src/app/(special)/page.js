import { Suspense } from "react";
import CategoryResultContainer from "./components/CategoryResultContainer";
import FeatureHead from "./components/FeatureHead";
import FilterContainer from "./components/FilterContainer";
import SpecialSelectionCard from "./components/specialSelection";
import CategoryResult from "./components/CategoryResultContainerClient";


// this will make it dynamic
export default function SpecialPage({searchParams}){
    // it is ok to have the page be a server client and 
    // import the client components in here 

    // let param = await searchParams;
    // // // console.log(`Search params from page `)
    // // // console.log(param)
    // another thing to do is to have is to set the approach to be 
    // like the thing make the component a client code and then have it be there


    // ! for the server componet
    // <Suspense fallback={
    //     <div>Loading Special Contents</div>
    // }>
    //     {/* <CategoryResultContainer searchParams={searchParams} /> */}
    
    //     {/* so that this part can be dynamic in the pre rendered part */}
    // </Suspense>

    return (
        <div className="feature-section"
            style={
                {
                    display : "flex",
                    flexDirection : "column",
                    width: "100%",
                    gap: "24px",
                }
            }
        >
            <SpecialSelectionCard/>
            <FeatureHead />
            <FilterContainer/>

            <CategoryResult/>
            
        </div>
    )
}