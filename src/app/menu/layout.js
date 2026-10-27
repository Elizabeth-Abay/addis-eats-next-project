import SearchBar from "./components/SearchBar";
import SelectedItemsContainer from "./components/SelectedItemContainer";
import TraditionalGursha from "./components/TraditionalGursha";
import './style/style.css'

export default function LayOutComponent({children}){
    return (
        <div 
            style={
                    {
                        display : "flex",
                        flexDirection : "column",
                        width: "100%",
                        gap: "24px",
                    }
                }
        >
            {/* the other parts are ok */}
            <SearchBar/>
            <TraditionalGursha/>
            <div className="root-layout-structure-for-menu">
                {children}
            </div>

            <SelectedItemsContainer/>
        </div>
    )
}