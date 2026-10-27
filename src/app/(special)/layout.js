// creating layout for this structure
// on the left are filtering buttons

import FilterContainer from "./components/FilterContainer";


export default function RootLayoutBox({children}){
    return (
        <div className="root-layout-structure">
            {children}

        </div>
    )
}