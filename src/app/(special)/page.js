import FeatureHead from "./components/FeatureHead";
import FilterContainer from "./components/FilterContainer";
import SpecialSelectionCard from "./components/specialSelection";
import CategoryResult from "./components/CategoryResultContainerClient";
import './style/style.css'
import RootLayoutBox from "./layout";


// this will make it dynamic
export default function SpecialPage({searchParams}){

    return (
        <div className="specials-page-whole">

            <RootLayoutBox>
                <FilterContainer/>

                <CategoryResult/>
            </RootLayoutBox>
        
            
        </div>
    )
}