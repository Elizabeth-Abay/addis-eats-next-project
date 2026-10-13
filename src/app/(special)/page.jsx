import { Suspense } from "react";
import CategoryResultContainer from "./components/CategoryResultContainer";
import FeatureHead from "./components/FeatureHead";
import FilterContainer from "./components/FilterContainer";
import SpecialSelectionCard from "./components/specialSelection";

export default function SpecialPage(){
    // it is ok to have the page be a server client and 
    // import the client components in here 
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
            <Suspense fallback={
                <div></div>
            }>
                <CategoryResultContainer />
                {/* so that this part can be dynamic in the pre rendered part */}
            </Suspense>
        </div>
    )
}