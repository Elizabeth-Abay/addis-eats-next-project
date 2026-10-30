// creating layout for this structure
// on the left are filtering buttons

import Footer from "../(components)/Footer";
import SuspenseFooter from "../(components)/SuspenseFooter";
import FilterContainer from "./components/FilterContainer";


export default function RootLayoutBox({children}){
    return (
        <div className="root-layout-structure">
            <SuspenseFooter/>
            {children}

        </div>
    )
}