import FeatureHead from "./components/FeatureHead";
import FilterContainer from "./components/FilterContainer";
import SpecialSelectionCard from "./components/specialSelection";
import CategoryResult from "./components/CategoryResultContainerClient";
import './style/style.css'
import RootLayout from "../layout";
import RootLayoutBox from "./layout";


// this will make it dynamic
export default function SpecialPage({searchParams}){
    // it is ok to have the page be a server client and 
    // import the client components in here 

    // let param = await searchParams;
    // // // console.log(`Search params from page `)
    // // // console.log(param)
    // another thing to do is to have is to set the approach to be 
    // like the thing make the component a client code and then have it be there


    

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

            <RootLayoutBox>
                <FilterContainer/>

                <CategoryResult/>
            </RootLayoutBox>
        
            
        </div>
    )
}